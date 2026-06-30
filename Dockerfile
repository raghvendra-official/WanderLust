###############################
# Stage 1 - Build Stage
###############################

FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

###############################
# Stage 2 - Production Stage
###############################

FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app .

RUN npm prune --production

# Expose application port
EXPOSE 8080

HEALTHCHECK \
  --interval=30s \
  --timeout=5s \
  --start-period=10s \
  CMD wget --spider http://localhost:8080/health || exit 1

# Start Application
CMD ["npm", "start"]