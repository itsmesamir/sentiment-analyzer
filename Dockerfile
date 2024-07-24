# Dockerfile

FROM node:21.6.2
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json package-lock.json /opt/app
RUN npm install
COPY . /opt/app
RUN cp .env.sample .env
EXPOSE 3000
CMD [ "npm", "start"]