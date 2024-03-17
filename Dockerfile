# FROM node:18-alpine
# # Installing libvips-dev for sharp Compatibility
# RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
# ARG NODE_ENV=development
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /opt/
# COPY package.json package-lock.json ./
# RUN npm install -g node-gyp
# RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install
# ENV PATH /opt/node_modules/.bin:$PATH

# WORKDIR /opt/app
# COPY . .
# RUN chown -R node:node /opt/app
# USER node
# RUN ["npm", "run", "build"]
# EXPOSE 1337
# CMD ["npm", "run", "develop"]

FROM node:20-alpine as builder
LABEL stage=strapi-builder
WORKDIR /usr/src
COPY . .
RUN npm run build

FROM node:20-alpine as final
LABEL stage=final-output
WORKDIR /usr/app
COPY --from=builder /usr/src/build ./build
COPY --from=builder /usr/src/package.json ./
COPY --from=builder /usr/src/.env ./
EXPOSE 1337
CMD ["node", ".output/server/index.mjs"]