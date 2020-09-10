const express = require("express");
const articleRouter = require("../routes/articles");
const app = express();

app.set("view engine", "ejs");
app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test description"
    },
    {
      title: "Test Article 2",
      createdAt: new Date(),
      description: "Test description"
    }
  ];
  res.render("articles/index", { articles: articles, text: "apple" });
});

app.get("/foo", (req, res) => {
  res.send("bar");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Listening on port ", PORT));
