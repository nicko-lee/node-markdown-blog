const mongoose = require("mongoose");
const marked = require("marked");
const slugify = require("slugify");
const createDomPurify = require("dompurify"); // returns a function
const { JSDOM } = require("jsdom"); // return only the portion of what we want
const dompurify = createDomPurify(new JSDOM().window);

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
  },
  sanitizedHtml: {
    type: String,
    required: true
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

  // convert markdown to HTML + sanitize = sanitized HTML
  if (this.markdown) {
    this.sanitizedHtml = dompurify.sanitize(marked(this.markdown));
  }

  next();
});

// this will eventually make a table in the DB called Article with all those "columns"
module.exports = mongoose.model("Article", articleSchema);
