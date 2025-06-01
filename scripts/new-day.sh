#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: ./scripts/new-day.sh <day-number>"
  exit 1
fi

DAY_NUM=$(printf "day-%02d" $1)
DIR="assignments/$DAY_NUM"

if [ -d "$DIR" ]; then
  echo "❌ $DIR already exists."
  exit 1
fi

mkdir -p "$DIR"
cp assignments/template/* "$DIR"

echo "✅ Created $DIR"
