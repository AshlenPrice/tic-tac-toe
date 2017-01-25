#!/bin/bash

# DATA="credentials%5Bemail%5D=jeff%40jrhorn.me&credentials%5Bpassword%5D=supersekret&credentials%5Bpassword_confirmation%5D=supersekret"
# API="http://httpbin.org" API_PATH="/post" scripts/sign-up.sh
curl "${API}${API_PATH}" \
  --include \
  --request POST \
  --data-urlencode "'${DATA}'"

# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo
