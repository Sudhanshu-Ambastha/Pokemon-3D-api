#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status

# Define commit message
COMMIT_MESSAGE="Auto-update🤖: Optimized models and handled errors"

# 1) Configure a valid Git identity
# This uses the GitHub Actions bot identity.
git config --global user.name "github-actions[bot]"
git config --global user.email "github-actions[bot]@users.noreply.github.com"

# 2) Check for any changes
if [[ -n $(git status --porcelain) ]]; then
  echo "Changes detected🔍, committing and pushing to main branch..."

  # Add all changes
  git add .

  # Commit with a message
  git commit -m "$COMMIT_MESSAGE"

  # 3) Try pushing to main
  if git push origin main; then
    echo "✅Changes successfully committed and pushed to main."
  else
    # 4) If push to main fails (branch protection?), create a new branch and push
    echo "❌Failed to push to main. Creating new branch 'auto-updates'..."
    NEW_BRANCH="auto-updates"
    git checkout -b "$NEW_BRANCH"
    git push origin "$NEW_BRANCH"
    echo "🫸🏻Changes pushed to branch '$NEW_BRANCH'."
  fi
else
  echo "❌No changes to commit."
fi