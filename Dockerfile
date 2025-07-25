# Use official Nginx image as base
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx files
RUN rm -rf ./*

# Install dependencies
RUN apk add --no-cache bash

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create directories for assets
RUN mkdir -p assets/css assets/js assets/images assets/logos

# Copy HTML files
COPY index.html .
COPY course-details.html .
COPY contact-form.html .
COPY registration-form.html .
COPY graduation-form.html .

# Copy CSS files
COPY assets/css/style.css assets/css/
COPY assets/css/slider.css assets/css/

# Copy JavaScript files
COPY assets/js/main.js assets/js/
COPY assets/js/slider.js assets/js/

# Copy images and logos (placeholder command - you should add your actual image files)
COPY assets/images/*.jpg assets/images/
COPY assets/images/*.png assets/images/
COPY assets/logos/*.png assets/logos/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]