const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  addComment: async (req, res) => {
    const { author, text, _newsId } = req.body;
    try {
      const comment = await Comment.create({
        author,
        text,
        _newsId,
      });
      res.json("Комментарий успешно добавлен");
    } catch (error) {
      res.json(error);
    }
  },
  deleteComment: async (req, res) => {
    await Comment.findByIdAndRemove(req.params.id).then(() => {
      res.json("Комментарий удален");
    });
  },
  getCommentsByNews: async (req, res) => {
    try {
      const comments = await Comment.find({ _newsId: req.params.id }).populate(
        "_newsId"
      );
      res.json(comments);
    } catch (e) {
      res.json(e);
    }
  },
};
