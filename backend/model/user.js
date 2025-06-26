const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/database");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.ENUM('user', 'admin'),
      defaultValue: 'user',
    },
    addressID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
      references: {
        model: "addresss",
        key: "id",
      },
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);
const Address = require("./address");
Address.hasMany(User, { foreignKey: "addressID" });
User.belongsTo(Address, { foreignKey: "addressID" });

module.exports = User;

