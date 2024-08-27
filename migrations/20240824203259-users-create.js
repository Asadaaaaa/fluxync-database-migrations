'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      username: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      hashing_salt: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      profile_picture_path: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });

    // Indexing
    await queryInterface.addIndex('users', [
      'uuid'
    ]);
    await queryInterface.addIndex('users', [
      'username'
    ]);
    await queryInterface.addIndex('users', [
      'email'
    ]);

    return;
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('users');
  }
};
