# Ecommerce Store

This project is a simple e-commerce store built using Django for the backend and React for the frontend. The project is fully dockerized and can be easily run using Docker.

## Prerequisites

- Docker: Make sure Docker is installed on your machine.
- Docker Compose: Make sure Docker Compose is installed on your machine.

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

```
git clone https://github.com/yourusername/ecommerce_store.git
cd ecommerce_store
```
### 2. Build and Run the Application with Docker
Use Docker build to build the application:
```
docker-compose build
```
Use Docker compose to start the application:
```
docker-compose up
```
These commands will:

Build the Docker images for both the Django backend and React frontend. <br>
Start the containers and run the application.

### 3. Access the Application
The Django backend will be accessible at: http://localhost:8000/api/products <br>
The React frontend will be accessible at: http://localhost:3000 <br>

It takes a few minutes for the react webpage to load.

### 4. Stopping the Application
To stop the application, press CTRL+C in the terminal where you ran docker-compose up. Then, run the following command to stop and remove the containers:
```
docker-compose down
```
