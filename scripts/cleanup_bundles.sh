#!/bin/bash
set -e

# Define directories
MODELS_DIR="models/gltfjsx"
BUNDLES_DIR="webpack/dist/bundles"

# Get list of model names
model_names=$(find "$MODELS_DIR" -type f -name "*.jsx" | sed 's/.*\///' | sed 's/\.jsx$//')

# Get list of bundle names
bundle_names=$(find "$BUNDLES_DIR" -type f -name "*.bundle.js" | sed 's/.*\///' | sed 's/\.bundle\.js$//')

# Find orphaned bundles
for bundle_name in $bundle_names; do
  if ! echo "$model_names" | grep -q "$bundle_name"; then
    echo "🧹Removing orphaned bundle: $BUNDLES_DIR/$bundle_name.bundle.js"
    rm "$BUNDLES_DIR/$bundle_name.bundle.js"
  fi
done

echo "✅Bundle cleanup completed."