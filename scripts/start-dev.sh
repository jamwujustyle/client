echo "STARTING IN dev MODE"

if docker-compose up --build ; then
    echo "started in devmode at on port 3001"
else
    echo "failed to start"
fi
