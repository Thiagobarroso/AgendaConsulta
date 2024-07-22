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
      <strong>${especialidade.nome}</strong>
      <button class="removerBtn btn-remove" >Remover</button>
      <hr>
  `;
      especialidadesList.appendChild(li);

      // Adicionar event listener para cada botão de remover
      const removerBtn = li.querySelector('.removerBtn');
      removerBtn.addEventListener('click', async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/especialidade/${especialidade._id}`,
            {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            },
          );

          const responseData = await response.json();
          console.log(responseData);
          li.remove();
          window.location.reload();
        } catch (error) {
          console.error('Erro ao excluir especialidade:', error.message);
          alert(`Erro ao excluir especialidade: ${error.message}`);
        }
      });
    });
  } catch (error) {
    console.error('Erro');
  }
});
