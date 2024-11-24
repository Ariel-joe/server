const http = require("http");
const server = http.createServer((req, res) => {

    if(req.url === "/" || req.url === "/home"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>Welcome to the homepage!</h1>")
    }
    else if(req.url === "/about"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>About Us</h1><p>We are awesome developers!</p>")
    }
    else if (req.url === "/contact"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end("<h1>Contact Us</h1><p>Email: contact@example.com</p>")
    }
    else {
        res.writeHead(404, {"content-Type": "text/html"});
        res.end("<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>")
    }
});

server.listen(3005, () => {
    console.log("this server runs on http://localhost:3005/");
    
})








// const fs = require("fs");

// fs.readFile("user-info.txt", "utf-8", (err, data) => {
//     if(err) {
//         console.log("Cannot read this file");
//         return;
//     }

//     console.log(data)
// });


