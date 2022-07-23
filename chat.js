const { time } = require("console");
const fs = require('fs').promises;
const http = require("http");


const host = 'localhost';
const port = 8080;

var messages = [];

const requestListener = function (req, res) {
    console.log("Incoming request: ", req.url, req.method);
    console.log("body", req.body);
    console.log("search params", req.url);







    if (req.url == "/messages" && req.method=="GET") {
        res.writeHead(200);
        res.write(JSON.stringify(messages));
        res.end();
    } else if (req.url == "/messages" && req.method=="POST") {
      
      
        var body = "";
        req.on('data', function (data) {
            body = body + data;
        });

        req.on('end', function () {
            //var post = qs.parse(body);
            // use post['blah'], etc.
            console.log(body);
            res.writeHead(200);
            res.end(body);

            const parsedData = new URLSearchParams(body);
            console.log(parsedData);
            console.log(parsedData.get("message"));

            messages.push({
                author: "demid4 test author",
                text: parsedData.get("message"),
                createdAt: new Date(),
            })

            console.log(messages);
        });    
    
    
    
    
    }
    


    else if (req.url == "/create") {
        messages.push({
            author: "demid1",
            text: "bla-blaasasdas",
            createdAt: new Date(),
        })
        res.writeHead(200);
        res.end("ok");
    } else {
        fs.readFile(__dirname + "/index.html")
            .then(contents => {
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.write(contents)
                res.end();
            })
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is 1111 running on http://${host}:${port}`);
});