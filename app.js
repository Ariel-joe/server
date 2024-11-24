const express = require("express");

const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "index.html"))
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "about.html"))
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "contact.html"))
})


app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "pages", "404.html"))
})


app.listen(3010, () => {
        console.log("server running at port http://localhost:3010/");
})

console.log();
