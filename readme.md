# ANONMSG
Anonmsg is a website that allows users to send and receive anonymous messages. The project is built using HTML, CSS, JavaScript, Node.js, socket.io, and mySQL.

## Installation
To install the project, follow these steps:

```
git clone https://github.com/unwxnted/anonmsg.git
cd anonmsg
npm i
```

This will clone the repository, change into the project directory, and install all of the necessary dependencies.

## Usage
To start the server, run the following commands:

```
cd backend
node server.js
```

This will start the server on port 3000. You can access the website by navigating to http://localhost:3000/ in your web browser.

## Additional Information

The project includes the following dependencies:

- ejs: Templating engine

- express: Web framework for Node.js

- http: Core module for creating HTTP servers

- mysql: Node.js driver for MySQL

- socket.io: Library for real-time, bidirectional communication between web clients and servers

The main entry point for the application is the server.js file located in the backend directory, which sets up the Express app and starts the server. The routes and app directories contain code for handling the routing and socket.io functionality respectively.