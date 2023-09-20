// con squlite 3

const { Sequelize, DataTypes } = require('sequelize');

// MySQL

const sequelize = new Sequelize({
   dialect: 'mysql',
    // Host de la DB
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'sequelize_example'

});

// SQLite 
// const sequelize = new Sequelize({
//     // Indicamos que vamos a conectarnos a Sqlite
//    dialect: 'sqlite',
// //    Donde se va almacenar la DB
//    storage: './example.db' 
// });

async function connect() {
    try {
        await sequelize.authenticate();
        console.log("Conectado a la DB");
    } catch(e) {
        console.error("No se pudo conectar: " + e);
    }
}

connect();

/* 
    CREATE TABLE tasks {
        id INTEGER PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(255) NOT NULL,
        views INTEGER NOT NULL
    }
*/

// el id se omite ya que sequelize lo crea
const Task = sequelize.define("tasks", {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    views: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
    isActive: {
        field: "is_active",
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    }
},
// {
//     timestamps: false,
// }
);


const User = sequelize.define("users", {
    username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

// En la tabla tasks se agrega llave foranea de la tabla users
// Un usuario puede crear varias tareas
User.hasMany(Task);
Task.belongsTo(User); // relacion contraria

// Muchos usuarios pueden estar a muchas tareas
User.belongsToMany(Task, { through: 'assignments', timestamps: false });
Task.belongsToMany(User, { through: 'assignments', timestamps: false });

async function sync() {
    try {
        await sequelize.sync({ force: true });

        console.log("> DB actualizada!");
    } catch (error) {
        console.error(">>> No se puede actualizar la DB: " + error);
    }
}

sync();