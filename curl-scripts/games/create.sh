#!/bin/bash

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{}'

echo

# TOKEN="87628818e35b20de552a3dd7e579c9de" sh curl-scripts/games/create.sh

# response =
# {
#     "game": {
#         "cells": ["","","","","","","","",""],
#         "over":false,
#         "_id":"5f89aba3772a0a00170d773b",
#         "owner":"5f899ade772a0a00170d7719",
#         "createdAt":"2020-10-16T14:18:11.447Z",
#         "updatedAt":"2020-10-16T14:18:11.447Z",
#         "__v":0
#     }
# }
