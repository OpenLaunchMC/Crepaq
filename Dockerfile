FROM node:lts-alpine3.15

COPY ./src /crebit/src
COPY ./.yarn /crebit/.yarn
COPY ./.yarnrc.yml /crebit/.yarnrc.yml
COPY ./package.json /crebit/package.json
COPY ./yarn.lock /crebit/yarn.lock

WORKDIR /crebit
RUN apt-get update \
&& npm insall yarn \
&& yarn install --no-immutable \
&& yarn build 
