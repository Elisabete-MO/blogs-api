const { BlogPost, PostCategory } = require('../models');

const createPost = async (title, content, userId) => BlogPost.create({ userId, title, content });

const createPostCategories = async (postCategories) => PostCategory.bulkCreate(postCategories);

// const getAllPosts = async () => BlogPost.findAll();

module.exports = {
  createPost,
  createPostCategories,
};
