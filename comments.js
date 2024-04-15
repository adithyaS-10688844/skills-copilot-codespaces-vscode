// Create Web Server
//
// Dependencies:
//   express
//   body-parser
//
// Comments:
//   This is a simple server to handle POST requests to the /comments endpoint.
//   It will read the request body and log the content to the console.
//   The server will run on port 3000.
//
// Usage:
//   To run the server, use the following commands:
//   $ node comments.js
//   To test the server, use the following command:
//   $ curl -X POST -H "Content-Type: application/json" -d '{"comment":"This is a test comment."}' http://localhost:3000/comments
//