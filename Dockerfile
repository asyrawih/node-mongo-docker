FROM node:10
# Set WorkDIR ke Path 
WORKDIR /usr/src/app

#Copy file paket json ke root dir

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80:8000

CMD ["node" , "server.js"]