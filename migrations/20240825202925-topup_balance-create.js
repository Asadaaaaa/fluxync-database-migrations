'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('topup_balances', {
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
      balance: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      tax: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total_price: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('Pending', 'Paid', 'Done', 'Rejected', 'Expired'),
        allowNull: false,
      },
      approve_by_admin_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: 'admin_accounts',
          key: 'id'
        }
      },
      expired_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      paid_at: {
        type: Sequelize.DATE,
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('topup_balances');
  }
};