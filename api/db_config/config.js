const { Pool } = rquire('pg');

const pool = new Pool();

function run(q, values, callback) {
	return pool.query(q, value, callback);
}

module.exports = { run };
