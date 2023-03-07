const { BlogPost, PostCategory, User, Category } = require('../models');

const createPost = async (title, content, userId) => BlogPost.create({ userId, title, content });

const createPostCategories = async (postCategories) => PostCategory.bulkCreate(postCategories);

const getAllPosts = async () => BlogPost.findAll({
  include: [
    { model: User, 
      attributes: ['id', 'displayName', 'email', 'image'],
      as: 'user',
    },
    { model: Category, 
      attributes: ['id', 'name'], 
      through: { attributes: [] },
      as: 'categories',
    },
  ],
  attributes: { exclude: ['UserId', 'createdAt', 'updatedAt'] },
});

const getByPostId = (postId) => BlogPost.findByPk(postId, {  
  include: [
    { model: User, 
      attributes: ['id', 'displayName', 'email', 'image'],
      as: 'user',
    },
    { model: Category, 
      attributes: ['id', 'name'], 
      through: { attributes: [] },
      as: 'categories',
    },
  ],
  attributes: { exclude: ['UserId', 'createdAt', 'updatedAt'] },
});

module.exports = {
  createPost,
  createPostCategories,
  getAllPosts,
  getByPostId,
};
