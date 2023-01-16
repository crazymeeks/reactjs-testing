FROM node:14

WORKDIR /var/www/testing.reactjs/app

COPY app/package.json ./
COPY app/package-lock.json ./

RUN npm i
# RUN npm audit fix # Let's disable this for local, this process is too slow

# Basically let's just make the node modules available on host
COPY app/ ./

EXPOSE 3000
EXPOSE 6006

CMD ["npm", "start"]