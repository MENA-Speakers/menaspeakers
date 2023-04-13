# Use the official PHP 8 image
FROM php:8.1 as php

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y software-properties-common \
    apt-key adv --recv-keys --keyserver keyserver.ubuntu.com E5267A6C \
    && add-apt-repository ppa:ondrej/php \
    && apt-get update \
    && apt-get install -y \
    php-zip

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql exif pcntl bcmath gd

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Node.js 16
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

# Copy application files
COPY . /var/www/html

# Set working directory
WORKDIR /var/www/html

# Install application dependencies
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN composer update --no-dev --optimize-autoloader

# Copy entrypoint script
COPY ./Docker/entrypoint.sh /usr/local/bin/
# RUN chmod +x /usr/local/bin/entrypoint.sh

# Expose port 8000 and start php-fpm server
EXPOSE 8000
# CMD ["php-fpm"]
ENTRYPOINT [ "Docker/entrypoint.sh" ]
