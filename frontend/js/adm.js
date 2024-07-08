// PAGINAS INTERNAS

const cadastraEspecialidade = document.querySelector(
  '.cadastrar-especialidade',
);
const btnEspecialidade = document.querySelector('.btn-especialidade');

btnEspecialidade.addEventListener('click', function (event) {
  event.preventDefault();
  cadastraEspecialidade.classList.add('ativo');

  if (cadastraEspecialidade.classList.contains('ativo')) {
    console.log('cadastrar especialidade esta ativo');
  } else {
    console.log('não deu certo');
  }
});
