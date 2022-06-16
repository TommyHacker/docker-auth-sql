const bcrypt = require('bcrypt');
const saltRounds = 12;

exports.hashPassword = (password) => {
	return bcrypt.hashSync(password, saltRounds);
};
exports.verifyPassword = (password, hash) => {
	const verified = bcrypt.compareSync(password, hash);
	if (!verified) return false;
	return true;
};
