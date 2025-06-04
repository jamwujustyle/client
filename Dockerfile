FROM node:24-alpine

WORKDIR /client


COPY package.json yarn.lock* package-lock.json* ./

RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else npm install; \
    fi


COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]