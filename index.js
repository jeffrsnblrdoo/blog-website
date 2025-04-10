import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const date = `${month}-${day}-${year}`;
    const post = {
        username: req.body.username,
        date,
        message: req.body.message,
    };

    res.render("index.ejs", post);
});

app.listen(port, () => {
    console.log(`Port running on server ${port}.`);
});
