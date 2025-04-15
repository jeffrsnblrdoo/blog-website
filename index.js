import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const year = new Date().getFullYear();
const month = new Date().getMonth();
const day = new Date().getDate();
const date = `${month}-${day}-${year}`;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { posts });
});

app.post("/submit", (req, res) => {
    // { username: 'test', message: 'test' }
    const newPost = {
        id: posts.length + 1,
        date,
        username: req.body.username,
        message: req.body.message,
    };
    posts.push(newPost);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Port running on server ${port}.`);
});

let posts = [
    {
        id: 1,
        date: "3-15-2025",
        username: "Test",
        message: "Test",
    },
];
