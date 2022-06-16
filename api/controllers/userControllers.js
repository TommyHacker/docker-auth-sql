const { hashPassword, verifyPassword } = require('../helpers/passwordHelpers');
const { createToken, verifyToken } = require('../helpers/tokenHelpers');

exports.register = (req, res) => {
	try {
		const { username, password } = req.body;
		if (!username || !password)
			return res.json({
				success: false,
				message: 'username and password required.',
			});
		const hashedPassword = hashPassword(password);
		const user = new User({ username, password: hashedPassword });
		res.json({ success: true, message: 'User created successfully.' });
	} catch (err) {
		console.log(err.message);
		res.json({
			success: false,
			message: 'something went wrong while registering user.',
		});
	}
};
exports.login = (req, res) => {
	const { username, password } = req.body;
	// const user =
};
