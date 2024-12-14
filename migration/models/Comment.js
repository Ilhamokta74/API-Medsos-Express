const { DataTypes } = require('sequelize');
const sequelize = require('../../database/sequelize');
const User = require('./User');
const Photo = require('./Photo');

const Comment = sequelize.define('Comment', {
    uuid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Validasi agar username menjadi unique
        validate: {
            notEmpty: {
                msg: 'UUID tidak boleh kosong',
            },
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    photo_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Photo,
            key: 'id',
        },
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Message tidak boleh kosong', // Validasi agar message tidak kosong
            },
        },
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'comments',
    timestamps: false,
});

module.exports = Comment;
