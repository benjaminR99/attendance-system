# Attendance System

This project is an attendance management system built with a React frontend and a Node.js backend. The system allows users to log in and view a home page, ensuring that routes are protected based on user authentication. The backend uses ExpressJS to create the server and JSON Web Tokens (JWT) for secure communication between the client and server.

## Table of Contents
- [Setup and Installation](#setup-and-installation)
- [Running the Development Servers](#running-the-development-servers)
- [Login Credentials](#login-credentials)

## Setup and Installation

### Prerequisites
Make sure you have the following installed:
- Node.js (v18.17 or later)
- npm (v9.6 or later)
- Git

### Installation Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/benjaminR99/attendance-system.git
    cd attendance-system
    ```

2. Install dependencies for both server and client:
    ```sh
    # Navigate to the server folder and install dependencies
    cd server
    npm install

    # Navigate to the client folder and install dependencies
    cd ../client
    npm install
    ```

3. Set Up Environment Variables:
    - Create a `.env` file in the `server` folder with the following content:
      ```env
      PORT=3500
      ACCESS_TOKEN_SECRET='secret-key'
      ```

## Running the Development Servers

### Start the Server
To start the backend server, navigate to the `server` folder and run:
    ```sh
    npm run dev
    ```
The server will be running at [http://localhost:3500](http://localhost:3500).

### Start the Client
To start the frontend client, navigate to the `client` folder and run:
    ```sh
    npm run dev
    ```
The client will be running at [http://localhost:5173](http://localhost:5173).

## Login Credentials
For testing purposes, you can use the following login credentials:
- **Username:** ben
- **Password:** Rben@19
