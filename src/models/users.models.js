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
      type: Sequelize.STRING,
     },
     sobrenome: {
      type: Sequelize.STRING,
     },
     email: {
      type: Sequelize.STRING,
     },
     idade: {
      type: Sequelize.INTEGER,
     },
     cpf: {
          type: Sequelize.STRING
     },
     password: {
          type: Sequelize.STRING
     },
     token: {
          type: Sequelize.STRING
     }
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