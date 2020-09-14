const mongoose = require("mongoose");
const marked = require("marked");
const slugify = require("slugify");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  markdown: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    required: true,
    unique: true
  }
});

// some model pre-validations before saving to DB
// this func will run everytime we save, update, create, delete etc.
articleSchema.pre("validate", function (next) {
  // create slug from title
  if (this.title) {
    // strict = true options gets rid of chars that don't meet the requirements of a URL
    this.slug = slugify(this.title, { lower: true, strict: true });
  }

  next();
});

// this will eventually make a table in the DB called Article with all those "columns"
module.exports = mongoose.model("Article", articleSchema);
