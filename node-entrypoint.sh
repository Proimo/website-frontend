#!/bin/sh
set -e

if [ -z "${BACKEND_URL}" ]; then
    echo "The BACKEND_URL environment variable must be set to a fully-qualified http(s) url (no trailing slash)."
fi

exec /usr/bin/supervisord --nodaemon --loglevel=info
