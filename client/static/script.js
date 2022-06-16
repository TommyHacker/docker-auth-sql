const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');

registerForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const username = e.target.username;
	const password = e.target.password;
	const email = e.target.email;
	console.log(username, email, password);

	const loginFetch = await fetch('http://localhost:3000/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			mode: 'no-cors',
		},
		body: { username, email, password },
	});
	const results = JSON.parse(loginFetch);
	console.log(results);
});
