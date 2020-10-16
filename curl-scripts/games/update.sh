#!/bin/bash

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'

echo

# ID="5f89e83c772a0a00170d780d" TOKEN="87628818e35b20de552a3dd7e579c9de" INDEX="0" VALUE="x" OVER="false" sh curl-scripts/games/update.sh

# Response
{
    "game":{
        "cells":["x","","","","","","","",""],
        "over":false,
        "_id":"5f89e83c772a0a00170d780d",
        "owner":"5f899ade772a0a00170d7719",
        "createdAt":"2020-10-16T18:36:44.556Z",
        "updatedAt":"2020-10-16T18:37:33.209Z",
        "__v":1
    }
}
