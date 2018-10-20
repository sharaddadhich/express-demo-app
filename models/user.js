const db = require('../utils/sequelize');
const Sequelize = require('sequelize');

const User = db.define('users', {
	id: {type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true},
	name: Sequelize.STRING,
	age: Sequelize.BIGINT
});

module.exports = User;
