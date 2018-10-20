const express = require ('express');
const router = express.Router();
const Signup = require('../controllers/signup');

router.post('/signup', (req, res) => {
	console.log('yaha_aaya')
	let name = req.body.name;
	let age = req.body.age;
	console.log(name + ' ' + age)
	Signup.addUser(name,age)
		.then((res)=>{
			console.log (res)
		})
		.catch((err)=>{
			console.log ('error aaya')
			console.error (err)
		});
})

module.exports = router;
