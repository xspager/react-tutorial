FROM node:current-alpine

RUN mkdir /react-tutorial

WORKDIR /react-tutorial

ENTRYPOINT ["/bin/sh"]

EXPOSE 3000

