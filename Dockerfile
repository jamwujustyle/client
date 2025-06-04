FROM node:24-alpine AS base

WORKDIR /client


COPY . /client

RUN