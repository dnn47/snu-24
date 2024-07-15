# to bulid and deploy: ./build.sh
# to build and deploy with comments: ./build.sh -c "My commit message for deployment changes"

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

npm run build && npm run build:about && npm run build:gilman 
firebase deploy

if [ -n "$option_c" ]; then
    echo -e "${GREEN}COMMITTING CHANGES WITH MESSAGE: $option_c${NC}"
    git status
    git add .
    git commit -m "$option_c"
    git status
    echo -e "${GREEN}WORK COMMITTED${NC}"

fi