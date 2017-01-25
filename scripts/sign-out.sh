#!/bin/bash

curl "${API}${API_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

# data output from curl doesn't have a trailing newline
echo
