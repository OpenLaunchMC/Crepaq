FROM node:lts-alpine3.15

COPY ./src /crebit/src
COPY ./.yarn /crebit/.yarn
COPY ./node_modules/ /crebit/node_modules

WORKDIR /crebit
RUN apt-get update \
&& npm insall yarn \
&& yarn install --no-immutable \
&& yarn build 
