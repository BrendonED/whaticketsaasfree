FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    chromium \
    libnss3 \
    libfreetype6 \
    libharfbuzz-bin \
    ca-certificates \
    fonts-freefont-ttf \
    && rm -rf /var/lib/apt/lists/*

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]
