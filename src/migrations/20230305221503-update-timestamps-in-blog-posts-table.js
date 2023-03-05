'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('posts_categories', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    });
    await queryInterface.changeColumn('posts_categories', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('posts_categories', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false
    });
    await queryInterface.changeColumn('posts_categories', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false
    });
  }
};
