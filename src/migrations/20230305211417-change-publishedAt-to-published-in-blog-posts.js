'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('blog_posts', 'publishedAt', 'published');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('blog_posts', 'published', 'publishedAt');
  }
};
