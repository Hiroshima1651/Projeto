// Função para verificar se o usuário está logado
function checkLoginStatus() {
    const username = localStorage.getItem('username');
    if (username) {
        // Se o usuário estiver logado, redireciona para a homepage
        window.location.href = 'homepage.html';
    }
}

// Função para cadastro de usuário
document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username-signup').value;
    const password = document.getElementById('password-signup').value;

    // Armazenando no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html'; // Redireciona para a página de login
});

// Função para realizar login
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username-login').value;
    const password = document.getElementById('password-login').value;

    // Verificando as credenciais no localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login bem-sucedido!');
        window.location.href = 'homepage.html'; // Redireciona para a homepage
    } else {
        alert('Usuário ou senha incorretos!');
    }
});

// Função para logout
function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.href = 'index.html'; // Redireciona de volta para a página de cadastro
}

// Verifica se o usuário está logado ao carregar a página de homepage
if (window.location.pathname === '/homepage.html') {
    checkLoginStatus();
}
