const jwt = require('jsonwebtoken');

exports.createToken = (payload) => {
	const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
		expiresIn: 60,
	});
	return authToken;
};

exports.verifyToken = (token) => {
	// if can be verified return true

	// if cannot be verified return false

	try {
		const verified = jwt.verify(token);
		return true;
	} catch (err) {
		return false;
	}
};
