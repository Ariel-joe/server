const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    let filePath = "./pages";

    if(req.url === "/" || req.url === "/home"){
        filePath += "/index.html";
    }
    else if(req.url === "/about"){
        filePath += "/about.html";
    }
    else if (req.url === "/contact"){
        filePath += "/contact.html";
    }
    else {
        filePath += "/404.html";
    }


    fs.readFile(filePath, "utf-8", (err, data) => {
        if(err){
            res.writeHead(500, {"Content-Type": "text/html"});
            res.end("<h1>Internal server error</h1>");
        }
        else {
            res.writeHead(200, {"Content-type": "text/html"})
            res.end(data)
        }
    })

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


