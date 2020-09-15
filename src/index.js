const express = require("express");
const mongoose = require("mongoose");
const Article = require("../models/article");
const articleRouter = require("../routes/articles");
const methodOverride = require("method-override");
const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use("/articles", articleRouter);

app.get("/", async (req, res) => {
  // get back an array of articles from Mongo
  const articles = await Article.find().sort({ createdAt: "desc" }); // this gets everything in Article collection

  res.render("articles/index", {
    articles: articles
  });
});

app.get("/foo", (req, res) => {
  res.send("bar");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Listening on port ", PORT));
