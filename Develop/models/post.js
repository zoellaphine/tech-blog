const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Post extends Model {}

Post.init( 
  {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,  
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT, 
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: "user",
        key: "id"
      }
    }
  },
  {
    sequelize,
    modelName: "post",
    timestamps: true,
    freezeTableName: true,
    underscored: true
  }
);

module.exports = Post;