# BUILD IMAGE
FROM node:12-alpine as build

# Set working directory
WORKDIR /usr/build

# Copy files into container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn --frozen-lockfile

# Copy files into container
COPY . .

# Build project
RUN yarn build

# Remove development dependencies
RUN npm prune --production

# APPLICATION IMAGE
FROM node:12-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy from build image
COPY --from=build /usr/build/dist ./dist
COPY --from=build /usr/build/node_modules ./node_modules
COPY --from=build /usr/build/package.json ./package.json

EXPOSE 3000

# Run production server
CMD ["yarn", "start"]
