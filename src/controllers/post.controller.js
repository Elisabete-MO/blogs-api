const { PostService } = require('../services');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    const blogPost = await PostService.createPost(title, content, id);
    const postCategories = categoryIds.map(el => ({
      postId: blogPost.id,
      categoryId: el
    }));
    await PostService.createPostCategories(postCategories);
    const data = {
      id: blogPost.id,
      title: blogPost.title,
      content: blogPost.content,
      userId: id,
      updated: blogPost.updated,
      published: blogPost.published,
    }
    res.status(201).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  createPost,
};