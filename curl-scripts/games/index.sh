#!/bin/sh

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo

# TOKEN="0bec386a81cc7356645643c59df00ac3" sh curl-scripts/games/index.sh