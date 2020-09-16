const express = require("express");
const Article = require("./../models/article");
const router = express.Router();

// Page route
router.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});

// Page route
router.get("/edit/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render("articles/edit", { article: article });
});

// Page route
router.get("/:slug", async (req, res) => {
  // query database search by id
  const article = await Article.findOne({ slug: req.params.slug }); // is an async func

  // before rendering check if our article is null (i.e. cannot find an article)
  if (article == null) res.redirect("/");
  res.render("articles/show", { article: article });
});

// API route
router.post(
  "/",
  async (req, res, next) => {
    req.article = new Article(); // create an article and save it to our request
    next(); // calls the saveArticle function below
  },
  saveArticleAndRedirect("new")
);

router.put(
  "/:id",
  async (req, res, next) => {
    req.article = await Article.findById(req.params.id);
    next();
  },
  saveArticleAndRedirect("edit")
);

// API route
router.delete("/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

// reusable function across POST and PUT (both are a form of saving)
// this will return to us a set of middleware
function saveArticleAndRedirect(path) {
  return async (req, res) => {
    // get article from our request instead of creating a new article - see previous commits
    // and why do we have this because we did it in the step inside POST and PUT before calling next()
    let article = req.article;
    article.title = req.body.title;
    article.description = req.body.description;
    article.markdown = req.body.markdown;

    try {
      // save an article
      article = await article.save(); // this will return the article just saved to Mongo
      // redirect if successful
      res.redirect(`/articles/${article.slug}`);
    } catch (e) {
      // if not successful just send back to the prior page
      res.render(`articles/${path}`, { articles: article });
    }
  };
}

module.exports = router;
