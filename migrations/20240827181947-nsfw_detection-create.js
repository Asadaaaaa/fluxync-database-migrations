'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('nsfw_detection', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.literal('uuid()')
      },
      integrated_application_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'integrated_applications',
          key: 'id'
        }
      },
      image_path: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      image_label: {
        type: Sequelize.ENUM('Porn', 'Neutral'),
        allowNull: false
      },
      image_score: {
        type: Sequelize.DOUBLE,
        allowNull: false
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('nsfw_detection');
  }
};
