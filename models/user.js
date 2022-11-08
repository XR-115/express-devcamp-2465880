'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: "Valores solo válidos en letras"
        },
        notEmpty: {
          args: true,
          msg: "El campo no debe de quedar vacío"
        },
        notNull: {
          args: true,
          msg: "El campo no debe de quedar vacío"
        },
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    validate:{
      notEmpty: {
        args: true,
        msg: "El campo no debe de quedar vacío"
      },
      notNull: {
        args: true,
        msg: "El campo no debe de quedar vacío"
      },
      isEmail: {
        args: true,
        msg: "Debe contener un dominio"
      } 
    },
  },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    validate:{
      notEmpty: {
        args: true,
        msg: "El campo no debe de quedar vacío"
      },
      notNull: {
        args: true,
        msg: "El campo no debe de quedar vacío"
      },
      len: {
        args: [8,100],
        msg: "El campo debe tener mínimo 8 carácteres"
      },
    }
  }

  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};