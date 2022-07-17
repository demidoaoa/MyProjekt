const { time } = require("console");
const fs = require('fs').promises;
const http = require("http");

const host = 'localhost';
const port = 8080;


const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.write(contents)
            res.end();
        })


    /* messages = [
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
    res.writeHead(200);
    res.write(JSON.stringify(messages));
    res.end(); */
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is 1111 running on http://${host}:${port}`);
});