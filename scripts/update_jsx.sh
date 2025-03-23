#!/bin/bash

REPO_NAME=$1
BRANCH=$2
BASE_URL="https://raw.githubusercontent.com/$REPO_NAME/$BRANCH/models/opt"

echo "🔄 Processing JSX file updates..."

find models/gltfjsx -type f -name "*.jsx" -print0 | while IFS= read -r -d $'\0' jsx_file; do
  folder=$(dirname "${jsx_file#models/gltfjsx/}")
  modelname=$(basename -- "$jsx_file" .jsx)
  GLB_PATH="$BASE_URL/$folder/$modelname.glb"

  # Update useGLTF and useGLTF.preload with the full URL
  sed -i "s|useGLTF('.*')|useGLTF('$GLB_PATH')|g" "$jsx_file"
  sed -i "s|useGLTF.preload('.*')|useGLTF.preload('$GLB_PATH')|g" "$jsx_file"

  # Change the function name to match the filename and set it as default export
  NEW_FUNCTION_NAME=$(echo "$modelname" | sed -E 's/([-_])([a-z])/\\U\2/g') # Convert snake_case or kebab-case to PascalCase
  NEW_FUNCTION_NAME=$(echo "${NEW_FUNCTION_NAME^}") # Capitalize the first letter

  sed -i "s/export function Model(props)/export default function $NEW_FUNCTION_NAME(props)/g" "$jsx_file"

  # Remove the old useGLTF.preload if it exists
  sed -i "/useGLTF.preload('https:\/\/raw.githubusercontent.com.*\/models\/opt\/.*.glb');/d" "$jsx_file"

done

echo "✅ JSX file updates completed!"
