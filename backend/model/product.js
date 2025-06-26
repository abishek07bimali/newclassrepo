const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/database");

const Products = sequelize.define(
  "Products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique:true,
      references: {
        model: "Users", 
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    address: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "products",
    timestamps: true,
  }
);

// Define relationships
const User = require("./user");
User.hasMany(Products, { foreignKey: "userId" });
Products.belongsTo(User, { foreignKey: "userId" });

module.exports = Products;
