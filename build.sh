#!/bin/bash

while getopts ":c:" opt; do
  case $opt in
    c)
      option_c="$OPTARG"
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
  esac
done


echo "Build and deploying"
    npm run build && npm run build:about && npm run build:gilman && firebase deploy

if [ -n "$option_c" ]; then
    echo "Committing changes with message: $option_c"
    git status
    git add .
    git commit -a -m "$option_c"
fi