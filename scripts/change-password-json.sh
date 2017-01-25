#!/bin/bash

# ID=8 \
# TOKEN="BAhJIiU0YzI4MTMyZGExNjM5YzYwOTRlMDA0MDAzNTNiYzhmMwY6BkVG--6294d2bc02961c74d217a2e5db36d66ad8c026e4" \
# API="http://localhost:4741" \
# API_PATH="/change-password" \
# OLD="bbb" NEW="ccc" \
# scripts/change-password-json.sh
#
curl "${API}${API_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'${OLD}'",
      "new": "'${NEW}'"
    }
  }'

# data output from curl doesn't have a trailing newline
echo
