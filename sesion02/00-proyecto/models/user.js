const { DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

module.exports = sequelize.define('users', {
    username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate: {
            len: [8, 150]
        }
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
});