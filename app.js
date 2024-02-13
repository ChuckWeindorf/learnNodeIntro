// Exercise 1 tried on pokedexproject ./src/components/objectBoiler.js

// Exercise 2: HTTP RESPONSE throught server on port 5501
const http = require("http");

const server = http.createServer((request, response) => {
    response.end(
        "<HTML><BODY><DIV>" + 
        '<h1 style="color:blue">Chuck Baby HTTP Server</h1>' + 
        "<p>Response with HTML syntax from server</p>" + 
        "</DIV><TABLE><TBODY><TR><TD>Cell1</TD><TD>Cell2</TD></TR></TABLE>" + 
        "</BODY></HTML>");
    } );

//listen for a port number IP - check availability of ports for your stuff
server.listen(5501, () => 
   {console.log("Exercise 2 server is running on port 5501")});
