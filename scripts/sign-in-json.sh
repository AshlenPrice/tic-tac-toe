#!/bin/bash

curl "${API}${API_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials":{
      "email": "'${EMAIL}'",
      "password": "'${PASSWORD}'"
    }
  }'

# data output from curl doesn't have a trailing newline
echo
