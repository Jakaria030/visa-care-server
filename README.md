# Visa Care Website - Server-Side Setup

## **Technologies Used**
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for server-side logic.
- **Express.js**: A minimal and flexible Node.js web application framework for building RESTful APIs.
- **MongoDB**: A NoSQL database used for storing visa application data, user details, and other relevant information.

## **Installation Instructions**

Follow these steps to set up the server side for the Visa Application Website:

1. **Clone the Repository**

   Clone the project from GitHub and navigate to the project directory:

   ```bash
   git clone https://github.com/Jakaria030/visa-care-server.git
   cd visa-care-server
2. **Install Dependencies**

    Install the required dependencies with npm:

   ```bash
    npm install
3. **Set Up Environment Variables**

    Create a .env file at the root of your project and add the following configuration:
    ```bash
    port = 5000
    MONGODB_URI=mongodb://localhost:5000/visa-care

    Replace MONGODB_URI with your own MongoDB connection string (use MongoDB Atlas if using a cloud database).
4. **Run The Server**
   
    To start the server, run the following command:
    ```bash
    nodemon index.js