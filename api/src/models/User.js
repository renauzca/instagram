const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombreUsuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagenPerfil: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 
      "https://th.bing.com/th?q=User+Jpg&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=es-AR&cc=AR&setlang=es&adlt=moderate&t=1&mw=247"
    },
    rol:{},
    numeroCelular:{
      type: DataTypes.INTERGER,
      allowNull: true
    }


  });
};
