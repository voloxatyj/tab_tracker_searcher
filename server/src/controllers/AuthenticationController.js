const {User} = require('../models')

module.exports = {
	async register(req, res) { 
		try {
			const user = await User.create(req.body)
			res.send(user.toJSON())		
		} catch (error) {
			res.status(400).send({
				error: 'email is already exist'
			})
		}},
	async login(req, res) { 
		try {
			const {email, password} = req.body
			const user = await User.findOne({
				where: {
					email
				}
			})
			if(!user) res.status(403).send({
				error: 'Email is incorrect'
			})
			const isValidatePassword = password === user.password
			if(!isValidatePassword) {
				return res.status(403).send({
					error: 'Password is incorrect'
				})
			}
			const userJson = user.toJSON()
			res.send({
				user: userJson
			})		
		} catch (error) {
			res.status(500).send({
				fatality: 'An error has occured trying to log in'
			})
		}}
	}