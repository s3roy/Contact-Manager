Contact Manager
Contact Manager is a simple backend application for managing contacts. It allows users to store and manage their personal contacts.

Description
The application is built using Node.js and Express, with MongoDB as the database. It provides API endpoints to create, read, update, and delete contacts. The application also includes user authentication features, with password hashing using bcrypt and token generation using JSON Web Tokens.

Installation
Prerequisites
Node.js
MongoDB
Steps
Clone the repository:

bash

git clone [repository_url]
cd contact-manager
Install the dependencies:

bash

npm install
Set up your environment variables. Create a .env file in the root directory and add the following:

env

MONGODB_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret
Start the application:

For development:
bash

npm run dev

For production:
bash

npm start
