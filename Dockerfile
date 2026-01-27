# ---------- BUILD ----------
    FROM node:20-alpine AS build
    WORKDIR /app
    
    # Copiar package files
    COPY package*.json ./
    RUN npm install
    
    # Copiar código fuente
    COPY . .
    
    # ⚠️ IMPORTANTE: Declarar las variables de entorno como ARG
    ARG VITE_API_URL
    ARG VITE_TEMPLATE_SERVICE_URL
    
    # Convertir ARG a ENV para que estén disponibles durante el build
    ENV VITE_TEMPLATE_SERVICE_URL=$VITE_TEMPLATE_SERVICE_URL
    
    # Build con las variables de entorno
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