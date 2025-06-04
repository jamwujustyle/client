echo "setting up env vars"

if [ -f .env ]; then
    echo ".env exists. skipping.."
else
    cat << EOF > .env
NEXT_PUBLIC_API_BASE_URL=localhost:9000/api/v1
NEXT_PUBLIC_API_AUTH_URL=localhost:1000
EOF
    echo ".env file created."
fi
