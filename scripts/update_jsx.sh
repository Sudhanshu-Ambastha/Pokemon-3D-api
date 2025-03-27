#!/bin/bash

# Set the repository and branch (if needed)
REPO_NAME="Sudhanshu-Ambastha/Pokemon-3D-api" # Updated repository name
BRANCH="main"
BASE_URL="https://raw.githubusercontent.com/$REPO_NAME/$BRANCH/models/opt"

echo "🔄 Processing JSX file updates..."

find models/gltfjsx -type f -name "*.jsx" -print0 | while IFS= read -r -d $'\0' jsx_file; do
  # Extract folder name and filename
  FOLDER_NAME=$(dirname "${jsx_file#models/gltfjsx/}")
  MODEL_NAME=$(basename "$jsx_file" .jsx)

  # Construct the component name
  COMPONENT_NAME="Model$(basename "$FOLDER_NAME")$MODEL_NAME"

  # Construct the GLB URL
  GLB_URL="$BASE_URL/$FOLDER_NAME/$MODEL_NAME.glb"

  # Rename the default export function
  sed -i "s/export default function [^ (]*(\(props\))/export default function $COMPONENT_NAME(\1)/g" "$jsx_file"

  # Update useGLTF and useGLTF.preload with the correct GLB URL
  sed -i "s|useGLTF('.*')|useGLTF('$GLB_URL')|g" "$jsx_file"
  sed -i "s|useGLTF.preload('.*')|useGLTF.preload('$GLB_URL')|g" "$jsx_file"

  echo "✅ Updated component in $jsx_file to $COMPONENT_NAME and GLB URL to $GLB_URL"
done

echo "✅ JSX file updates completed!"