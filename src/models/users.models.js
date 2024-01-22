const Sequelize = require('sequelize')
const db = require('./conn.models')

const User = db.define('usuarios', {
     id_user: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
     },
     nome: {
      type: Sequelize.TEXT,
     },
     sobrenome: {
      type: Sequelize.TEXT,
     },
     email: {
      type: Sequelize.TEXT,
     },
     idade: {
      type: Sequelize.INTEGER,
     },
},
)

// User.sync({ alter: true })
//      .then(() => {
//           console.log('Table created successfully')
//      })
//      .catch(erro => {
//           console.log('Error creating table: ' + erro)
//      })

module.exports = User