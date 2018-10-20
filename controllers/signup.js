var exports = module.exports = {}

const User = require('../models/user');

const addUser = function(namee, agee) {
	let u = User.create({
		name: namee,
		age: agee
	})
	console.log('user_bana')
	console.log(u)
	console.log(typeof u)
	u.then((user) => {
		console.log ('User created')
		return user
	})
	.catch((err)=>{
		console.error(err)
	})
}

exports.addUser = addUser
