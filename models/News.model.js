const mongoose = require("mongoose");

const newsSchema = mongoose.Schema(
  {
    title: String,
    content: String,
    _catId: {
      type: mongoose.SchemaTypes.ObjectId,
    },
  },
  { timestamps: true }
);

const News = mongoose.model("News", newsSchema);

module.exports = News;
