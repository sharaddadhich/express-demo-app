const User = require('../models/user');

const addUser = function(namee, agee) {
	User.create({
		name: namee,
		age: agee
	})
	.complete((err, user) => {
		if (err) {
			console.error (err)
		} else {
			console.log ('User created')
			return user
		}
	})
}

module.exports = addUser
