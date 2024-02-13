//import http module from nodeJS

const http = require("http");

const server = http.createServer((request, response) => {
        response.end("Response string sent");
        } );

//listen for a port number IP - check availability of ports for your stuff
server.listen(5500, () => {console.log("server is now listening on port 5500")});
