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

GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GREEN}BUILDING AND DEPLOYING\n---------------------------${NC}"

npm run build && npm run build:about && npm run build:gilman 

echo -e "${GREEN}BUILDING DONE \n---------------------------${NC}"

firebase deploy

echo -e "${GREEN}DEPLOYMENT DONE \n---------------------------${NC}"

if [ -n "$option_c" ]; then
    echo -e "${GREEN}COMMITTING CHANGES WITH MESSAGE: $option_c${NC}"
    git status
    git add .
    git commit -a -m "$option_c"
    git status
    echo -e "${GREEN}WORK COMMITTED${NC}"

fi