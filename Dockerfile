FROM node:lts-alpine as builder

# install simple http server for serving static content
RUN npm install -g vite

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN vite build


FROM nginx

WORKDIR /app

COPY --from=builder /app/dist ./

COPY nginx.conf /etc/nginx/conf.d/

RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 80