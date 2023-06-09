const { Op } = require('sequelize');
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

const editByPostId = async (id, updatedPostData) => {
  await BlogPost.update(updatedPostData, { where: { id } });
};

const deleteByPostId = async (id) => BlogPost.destroy({ where: { id } });

const searchPosts = async (searchTerm) => BlogPost.findAll({
  where: {
    [Op.or]: [
      { title: { [Op.like]: `%${searchTerm}%` } },
      { content: { [Op.like]: `%${searchTerm}%` } },
    ],
  },
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
  editByPostId,
  deleteByPostId,
  searchPosts,
};
