const { DataTypes } = require('sequelize');
const sequelize = require('../../database/sequelize');
const User = require('./User');

const SocialMedia = sequelize.define('SocialMedia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Name tidak boleh kosong', // Validasi agar name tidak kosong
            },
        },
    },
    social_media_url: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Social Media URL tidak boleh kosong', // Validasi agar social_media_url tidak kosong
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
    tableName: 'social_media',
    timestamps: false,
});

module.exports = SocialMedia;
