#!/bin/bash
set -e

# This script removes orphaned JSX files (JSX files with no corresponding GLB file)

echo "🧹Cleaning up orphaned JSX files..."

# Iterate over all JSX files
find models/gltfjsx -type f -name "*.jsx" | while read -r jsx_file; do
  model_name=$(basename "$jsx_file" .jsx)
  
  # Try to find a corresponding GLB file in models/glb
  glb_file=$(find models/opt -type f -name "$model_name.glb" | head -n 1)
  
  if [ -z "$glb_file" ]; then
    echo "⛔No matching GLB found for $jsx_file. 🗑️Removing..."
    rm -f "$jsx_file"
  fi
done

echo "✅Cleanup of orphaned JSX files complete."
