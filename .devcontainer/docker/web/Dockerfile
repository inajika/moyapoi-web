FROM node:22.12-slim

ENV NODE_ENV=development
ENV TZ=Asia/Tokyo

RUN apt-get update && \
  apt-get install -y --no-install-recommends sudo ca-certificates curl unzip git vim locales && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

RUN sed -i -e 's/# \(ja_JP.UTF-8\)/\1/' /etc/locale.gen && \
  locale-gen

ENV LANG=ja_JP.UTF-8

RUN npm install -g npm

ARG USERNAME=node
RUN echo "${USERNAME}   ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER ${USERNAME}

ENV HOME=/home/${USERNAME}

WORKDIR /service/web

EXPOSE 3000
