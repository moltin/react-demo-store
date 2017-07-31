# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:7.8.0

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL error
ENV NPM_ENV production

# Copy all local files into the image.
COPY . .

# Build for production.
RUN set -x \
  && npm install \
  && npm run build \
  && npm install -g serve

CMD [ "serve", "-s", "build" ]

# Tell Docker about the port we'll run on.
EXPOSE 5000
