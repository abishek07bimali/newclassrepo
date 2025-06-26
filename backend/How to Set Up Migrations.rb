How to Set Up Migrations
Step 1: Install Sequelize CLI

npm install --save sequelize-cli


Step 2: Initialize Sequelize Project Structure
npx sequelize-cli init
This creates folders like:

/migrations     <- Migration files go here
/models         <- Sequelize models
/seeders        <- Optional: dummy data
/config         <- DB connection settings


Step 3: Create a Migration File

npx sequelize-cli migration:generate --name create-users-table

This creates a file like xxxxxx-create-users-table.js. Inside, you define what changes to apply:


// migrations/xxxxx-create-users-table.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      username: { type: Sequelize.STRING, allowNull: false, unique: true },
      email: { type: Sequelize.STRING, allowNull: false },
      password: { type: Sequelize.STRING, allowNull: false },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Users');
  }
};


Step 4: Run the Migration

npx sequelize-cli db:migrate
This runs your migration and updates the database.