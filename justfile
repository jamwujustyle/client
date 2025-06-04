# justfile

start:
    ./scripts/start-dev.sh

stop:
    docker-compose down

build:
    docker-compose build