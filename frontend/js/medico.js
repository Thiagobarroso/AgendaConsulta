document.addEventListener('DOMContentLoaded', async function () {
  const selectEspecialidades = document.getElementById('selectEspecialidades');

  try {
    // Busca as especialidades da API
    const response = await fetch('http://localhost:3000/especialidades');
    const especialidades = await response.json();

    // Limpa quaisquer opções existentes no select
    selectEspecialidades.innerHTML = '';

    // Adiciona uma opção vazia (opcional, se desejar)
    const optionVazia = document.createElement('option');
    optionVazia.value = '';
    optionVazia.textContent = 'Selecione uma especialidade';
    selectEspecialidades.appendChild(optionVazia);

    // Adiciona opções para cada especialidade
    especialidades.forEach((especialidade) => {
      const option = document.createElement('option');
      option.value = especialidade._id;
      option.textContent = especialidade.nome;
      selectEspecialidades.appendChild(option);
    });
  } catch (error) {
    console.error('Erro ao carregar especialidades:', error.message);
    // Tratar o erro aqui, por exemplo, exibindo uma mensagem de erro ao usuário
  }
});
