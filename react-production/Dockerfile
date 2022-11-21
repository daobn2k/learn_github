FROM node as build

WORKDIR  /app

COPY package*.json ./

RUN npm install -S

COPY . .

ENV REACT_APP_URL_API="http://18.217.155.200:5000/"

RUN npm run build 

FROM nginx

COPY --from=build app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]