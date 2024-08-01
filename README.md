# Product API REST

A simple RESTful API for managing products, built with Node.js, Express, and MongoDB.

## Features

- Create, retrieve, update, and delete products
- Input validation with Joi
- Security enhancements with Helmet
- Cross-Origin Resource Sharing (CORS) enabled

## Prerequisites

- Node.js
- MongoDB
- Docker

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/GDS2005/ecommerce-product-service
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root directory and add the content of .env.example. Modify has you need.



4. **Run the application**:

    ```bash
    npm start
    ```

5. **Access the API**:

    Open your browser and navigate to `http://localhost:{{PORT}}`.

## Docker

To run the application using Docker, follow these steps:

1. **Build the Docker image**:

    ```bash
    docker build -t node-rest-product .
    ```

2. **Run the Docker container**:

    ```bash
    docker run -d -p {{PORT}}:{{PORT}} --name node-rest-product-container --env-file .env node-rest-product
    ```

3. **Use the API**:

    Use POST, GET, PATCH and DELETE in `http://localhost:{{PORT}}/v1/` .

## API Endpoints

### Products

- **Create Product**: `POST /v1/`
- **Get All Products**: `GET /v1/`
- **Get Product by ID**: `GET /v1/:id`
- **Update Product**: `PUT /v1/:id`
- **Delete Product**: `DELETE /v1/:id`

### Images

 Use POST, GET, PATCH and DELETE in `http://localhost:{{PORT}}/v1/files/:filename` .

- **Add Image**: `POST /v1/files/`
- **Get Image by Name**: `GET /v1/files/:filename`


