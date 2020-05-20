const path = require('path')

module.exports = {
	port: process.env.PORT || 8081,
	db: {
		database: process.env.DB_NAME || 'database',
		user: process.env.DB_USER || 'email',
		password: process.env.DB_PASSWORD || 'password',
		options: {
			dialect: process.env.DIALECT || 'sqlite',
			host: process.env.HOST || 'localhost',
			storage: path.resolve(__dirname, '../../tabtracker.sqlite')
		}
	}
}