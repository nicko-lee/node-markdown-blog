const express = require("express");
const Article = require("./../models/article");
const router = express.Router();

// Page route
router.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});

// Page route
router.get("/:id", async (req, res) => {
  // query database search by id
  const article = await Article.findById(req.params.id); // is an async func

  // before rendering check if our article is null (i.e. cannot find an article)
  if (article == null) res.redirect("/");
  res.render("articles/show", { article: article });
});

// API route
router.post("/", async (req, res) => {
  // accessing user input and preparing an object to save to Mongo
  let article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
  });

  try {
    article = await article.save(); // this will return the article just saved to Mongo
    res.redirect(`/articles/${article.id}`);
  } catch (e) {
    res.render("articles/new", { articles: article });
  }
});

module.exports = router;
