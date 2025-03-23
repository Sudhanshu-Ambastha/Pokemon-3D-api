#!/bin/bash

SRC_DIR="models/glb"
DEST_DIR="models/opt"
ERROR_FILE="scripts/error.txt"

echo "🔄 Checking GLB files for optimization..."
modified=false

# Clear previous error file
> "$ERROR_FILE"

find "$SRC_DIR" -type f -name "*.glb" | while read -r glb_file; do
  # Extract folder and filename
  folder=$(dirname "${glb_file#$SRC_DIR/}") # Get folder inside models/glb
  filename=$(basename -- "$glb_file")
  modelname="${filename%.glb}"
  opt_file="$DEST_DIR/$folder/$modelname.glb"

  # Check if optimized file exists and is up to date
  if [[ -f "$opt_file" && $(stat -c %Y "$opt_file") -ge $(stat -c %Y "$glb_file") ]]; then
    continue # Skip if optimized file exists and is newer or same as original GLB
  fi

  # Create directory if not exists
  mkdir -p "$DEST_DIR/$folder"

  # Process the GLB file
  npx gltf-transform resize "$glb_file" "$opt_file" --width 1024 --height 1024 && npx gltf-transform optimize "$opt_file" "$opt_file" --compress draco --texture-compress webp

  if [ $? -ne 0 ]; then
    echo "❌ Failed to optimize: $glb_file"
    echo "$glb_file" >> "$ERROR_FILE"
  else
    modified=true
  fi
done

# Print the appropriate message
if [ "$modified" = true ]; then
  if [ -s "$ERROR_FILE" ]; then
    echo "⚠️ Optimization completed with errors. Check $ERROR_FILE for details."
  else
    echo "✅ Optimization completed!"
  fi
else
  echo "✨ All already optimized!"
fi