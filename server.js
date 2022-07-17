const { time } = require("console");
const fs = require('fs').promises;
const http = require("http");

const host = 'localhost';
const port = 8080;

var messages = [
    {
        author: "demid1",
        text: "bla-bla",
        createdAt: new Date(),
    },
    {
        author: "demid2",
        text: "bla-bla-oaoao",
        createdAt: new Date(),
    },
    {
        author: "demid3",
        text: "bla-bla-ooaao",
        createdAt: new Date(),
    }
]

const requestListener = function (req, res) {
    if (req.url == "/messages") {
        res.writeHead(200);
        res.write(JSON.stringify(messages));
        res.end();
    } else if (req.url == "/create") {
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