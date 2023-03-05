'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('blog_posts', 'updatedAt', 'updated');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('blog_posts', 'updated', 'updatedAt');
  }
};
