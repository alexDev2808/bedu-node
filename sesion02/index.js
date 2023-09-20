// con squlite 3

const { Sequelize } = require('sequelize');

// SQLite

// const sequelize = new Sequelize({
//     // Indicamos que vamos a conectarnos a Sqlite
//    dialect: 'sqlite',
// //    Donde se va almacenar la DB
//    storage: './example.db' 
// });


// MySQL

const sequelize = new Sequelize({
   dialect: 'mysql',
    // Host de la DB
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'sequelize_example'

});

async function connect() {
    try {
        await sequelize.authenticate();
        console.log("Conectado a la DB");
    } catch(e) {
        console.error("No se pudo conectar: " + e);
    }
}

connect();