FROM node:18-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

# Fix for potential memory issues during build
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Install dependencies using npm ci (needs package-lock.json)
COPY package-lock.json ./
RUN npm ci --legacy-peer-deps

COPY . .

ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
