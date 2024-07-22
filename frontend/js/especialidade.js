/* CRIAR NOVA ESPECIALIDADE */

const formEspecialidade = document.getElementById('formEspecialidade');
const mensagem = document.getElementById('mensagem');

formEspecialidade.addEventListener('submit', async function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;

  try {
    const response = await fetch('http://localhost:3000/especialidade', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome }),
    });

    const data = await response.json();

    if (data.error) {
      mensagem.textContent = `Erro: ${data.message}`;
    } else {
      mensagem.textContent = `Especialidade criada com sucesso: ${data.especialidade.nome}`;
      window.location.reload();
      formEspecialidade.reset();
    }
  } catch (error) {
    mensagem.textContent = `Erro na requisição: ${error.message}`;
  }
});

/*LISTAR ESPECIALIDADES CRIADA */

document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('http://localhost:3000/especialidades');
    const data = await response.json();

    const especialidadesList = document.getElementById('especialidadesList');
    data.forEach((especialidade) => {
      const li = document.createElement('li');
      li.innerHTML = `
      <strong>${especialidade.nome}</strong> - ${especialidade._id}
      <button onclick="alert('Botão clicado!')">Remover</button>
  `;
      especialidadesList.appendChild(li);
    });
  } catch (error) {
    console.error('Deu ruim');
  }
});
