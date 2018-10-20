const Sequelize = require ('sequelize')

const sequelize = new Sequelize (
	'demodb',
	'demodb',
	'demodb',
	{
		host: 'localhost',
		dialect: 'postgres',
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		},
		logging: console.log
	}
)

module.exports = sequelize
