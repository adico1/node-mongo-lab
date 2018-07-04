FROM node:10

# app directory
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./
RUN npm install 
# --only=production

# copy app files
COPY . .

# make port public
EXPOSE 8080

# start server
CMD ["npm", "start"]