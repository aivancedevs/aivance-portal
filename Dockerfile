# ---------- BUILD ----------
    FROM node:20-alpine AS build
    WORKDIR /app
    
    COPY package*.json ./
    RUN npm install
    
    COPY . .
    RUN npm run build
    
    
    # ---------- SERVE ----------
    FROM nginx:alpine
    
    # React build
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # SPA fallback (react-router)
    RUN rm /etc/nginx/conf.d/default.conf
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    