# specify the base image
FROM node:boron

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# bundle app source
COPY . /usr/src/app

# set API host and port
# this needs to be before build
# so that react will pick them up
# and inject them in the build files
ENV REACT_APP_API_HOST=localhost
ENV REACT_APP_API_PORT=5000

# build and optimize react app
RUN npm run build

# expose port 9000 on the container
EXPOSE 9000

# defined in package.json
CMD [ "npm", "run", "start:server" ]