const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const bcrypt = require('bcrypt');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,  
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING, 
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING, 
      unique: true, 
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        len: [8]
      }
    }
  },
  {
    hooks: {  
      async beforeCreate(newUser) {
        newUser.password = await bcrypt.hash(newUser.password, 10);
        return newUser;
      },
      async beforeUpdate(updatedUser) {
        updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
        return updatedUser;
      }
    },
    sequelize,
    modelName: 'user',
    timestamps: false,
    freezeTableName: true,
    underscored: true
  }
);

module.exports = User;