const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "public")))

app.get("/" || "/home", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "index.html"))
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "index.html"))
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "about.html"))
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "contact.html"))
})

// form handling in express;
app.get("/submit-contact", (req, res) => {
    const name = req.query.name || "Anonymous";
    const message = req.query.message || "NO message provided"


    res.send(
`        <h1>Thank You, ${name}!</h1>
        <p>Your message: ${message}</p>`
    )
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "pages", "404.html"))
})


app.listen(3010, () => {
        console.log("server running at port http://localhost:3010/");
})

console.log();
