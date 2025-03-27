#!/bin/bash

MODELS_DIR="models/gltfjsx"
INDEX_FILE="models/index.js"

# Generate exports for existing JSX files
find "$MODELS_DIR" -type f -name "*.jsx" | sort | while read FILE; do
  COMPONENT_NAME=$(basename "$FILE" .jsx)
  EXPORT_NAME=$(echo "$COMPONENT_NAME" | sed 's/-[a-z]/\U&/g' | sed 's/-//g') 
  RELATIVE_PATH="./$(dirname "$FILE" | sed 's/^models\///')/$COMPONENT_NAME"
  EXPORTS+="export { default as ${EXPORT_NAME} } from '${RELATIVE_PATH}';\n"
done

# Write the generated exports to models/index.js
echo "// Automatically generated models/index.js\n${EXPORTS}" > "$INDEX_FILE"

echo "models/index.js generated successfully!"