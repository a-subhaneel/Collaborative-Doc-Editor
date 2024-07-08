import config from "../config"

export async function sendLoginInfo(email, password) {
    const response = await fetch(config.apiBaseUrl + '/login/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
        onSubmit(data);
    } else {
        console.error('Login failed:', data);
    }
}

export async function sendSignupInfo(username, email, password) {
    const response = await fetch(config.apiBaseUrl + '/login/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, email, password })
    });

    const data = await response.json();

    if (response.ok) {
        onSubmit(data);
    } else {
        console.error('Signup failed:', data);
    }
}