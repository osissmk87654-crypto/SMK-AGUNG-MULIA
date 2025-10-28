document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === 'admin' && password === 'admin') {
        localStorage.setItem('loggedInUser', username);
        message.style.color = 'green';
        message.textContent = 'Login berhasil!';
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 800);
    } else {
        message.style.color = 'red';
        message.textContent = 'Username atau password salah!';
    }
});
