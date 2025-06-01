#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: ./scripts/new-assignment.sh <name>"
  exit 1
fi

NAME="$1"
DIR="assignments/$NAME"

if [ -d "$DIR" ]; then
  echo "❌ Assignment '$NAME' already exists."
  exit 1
fi

mkdir -p "$DIR"
cp assignments/template/* "$DIR"

echo "✅ Created assignment: $NAME"
