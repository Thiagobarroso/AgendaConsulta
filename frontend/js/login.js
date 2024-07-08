/// LOGIN
document
  .getElementById('loginForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('http://localhost:3000/usuario/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ email: username, senha: password }),
      });

      const data = await response.json();

      console.log(data);

      if (data.error) {
        document.getElementById('errorMenssage').textContent = data.message;
      } else {
        window.location.href = '/frontend/adm.html';
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      document.getElementById('errorMessage').textContent =
        'Email ou senha incorreto';
    }
  });
