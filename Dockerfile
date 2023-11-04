FROM node
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm i -g @quasar/cli
RUN npm ci
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev"]
