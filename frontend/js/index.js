/* funcionalidade botões da pagina selecionar especialidade */

/*btn proximo*/
const proximoEspecialidade = document.querySelector('.proximoEspecialidade');
const ContainerEspecialidade = document.querySelector(
  '.selecionarEspecialidade',
);
const irDatas = document.querySelector('.selecionarData');

proximoEspecialidade.addEventListener('click', function (event) {
  event.preventDefault();
  ContainerEspecialidade.style.display = 'none';
  irDatas.style.display = 'block';
});

/* funcionalidade botões da pagina selecionar datas */

/*btn proximo*/
const proximoData = document.querySelector('.proximoData');
const containerData = document.querySelector('.selecionarData');
const irDetalhes = document.querySelector('.detalhes');

proximoData.addEventListener('click', function (event) {
  event.preventDefault();
  containerData.style.display = 'none';
  irDetalhes.style.display = 'block';
});

/*btn voltarData*/
const voltarData = document.querySelector('.voltarData');

voltarData.addEventListener('click', function (event) {
  event.preventDefault();
  ContainerEspecialidade.style.display = 'block';
  irDatas.style.display = 'none';
});

/* funcionalidade botões da pagina selecionar detalhes */
const proximoDetalhe = document.querySelector('.proximoDetalhe');
const detalheContainer = document.querySelector('.detalhes');
const irConfirmarAgendamento = document.querySelector('.confirmarAgendamento');

proximoDetalhe.addEventListener('click', function (event) {
  event.preventDefault();
  detalheContainer.style.display = 'none';
  irConfirmarAgendamento.style.display = 'block';
});

/*btn voltarDetalhes*/
const voltarDetalhe = document.querySelector('.voltarDetalhe');

voltarDetalhe.addEventListener('click', function (event) {
  event.preventDefault();
  detalheContainer.style.display = 'none';
  containerData.style.display = 'block';
});

/* funcionalidade botões da pagina confirmar */
const containerConfirmar = document.querySelector('.confirmarAgendamento');
const voltarInicio = document.querySelector('.inicio');

voltarInicio.addEventListener('click', function (event) {
  event.preventDefault();
  containerConfirmar.style.display = 'none';
  ContainerEspecialidade.style.display = 'block';
});
