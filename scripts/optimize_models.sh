#!/bin/bash

SRC_DIR="models/glb"
DEST_DIR="models/opt"
ERROR_FILE="scripts/error.txt"

# Clear previous error file
> "$ERROR_FILE"

# --- Part 1: Deletion of orphaned files ---
echo "🗑️ Checking for orphaned optimized files to remove before processing..."
# Find all GLB files in the destination directory
find "$DEST_DIR" -type f -name "*.glb" | while read -r opt_file; do
  # Extract relative path components
  # ${opt_file#$DEST_DIR/} removes the DEST_DIR prefix
  relative_path="${opt_file#$DEST_DIR/}"
  
  # Construct the expected source file path
  src_file="$SRC_DIR/$relative_path"

  # Check if the original source file exists
  if [ ! -f "$src_file" ]; then
    echo "🗑️ Removing orphaned file: $opt_file"
    rm "$opt_file"
    
    # Check and remove empty directories (cleanup)
    dir_to_check=$(dirname "$opt_file")
    # Check if the directory is empty using find (more reliable than ls -A in all cases)
    if [ -z "$(find "$dir_to_check" -mindepth 1 -maxdepth 1)" ]; then
      rmdir "$dir_to_check" 2>/dev/null # Suppress error if rmdir fails (e.g., if another file appeared)
    fi
  fi
done

# --- Part 2: Optimization Process ---
echo "🔄 Checking GLB files for optimization..."
modified=false

find "$SRC_DIR" -type f -name "*.glb" | while read -r glb_file; do
  # Extract folder and filename relative to SRC_DIR
  relative_folder=$(dirname "${glb_file#$SRC_DIR/}") # Get folder structure relative to SRC_DIR
  filename=$(basename -- "$glb_file")
  modelname="${filename%.glb}"
  
  # Construct the full path for the optimized file
  opt_file="$DEST_DIR/$relative_folder/$filename"

  # Check if optimized file exists and is up to date
  if [[ -f "$opt_file" && $(stat -c %Y "$opt_file") -ge $(stat -c %Y "$glb_file") ]]; then
    continue # Skip if optimized file exists and is newer or same as original GLB
  fi

  # Create directory if not exists
  mkdir -p "$DEST_DIR/$relative_folder"

  echo "🛠️ Optimizing: $glb_file"
  # Process the GLB file
  npx gltf-transform resize "$glb_file" "$opt_file" --width 1024 --height 1024 && npx gltf-transform optimize "$opt_file" "$opt_file" --compress draco --texture-compress webp

  if [ $? -ne 0 ]; then
    echo "❌ Failed to optimize: $glb_file"
    echo "$glb_file" >> "$ERROR_FILE"
  else
    modified=true
  fi
done

# --- Part 3: Final Status Message ---
if [ "$modified" = true ]; then
  if [ -s "$ERROR_FILE" ]; then
    echo "⚠️ Optimization completed with errors. Check $ERROR_FILE for details."
  else
    echo "✅ Optimization completed successfully!"
  fi
else
  # Check for errors even if no files were modified (though optimization logic ensures $modified is true on error for new files)
  if [ -s "$ERROR_FILE" ]; then
    echo "⚠️ No new files optimized, but check $ERROR_FILE for previous run errors if any."
  else
    echo "✨ All files already optimized and up-to-date!"
  fi
fi