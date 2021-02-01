import { 
  getDashboard, 
  getPlanosConta, 
  fazTransferencia, 
  fazPagamento, 
  getProfile, 
  successMessage,
 } from '../../service/dashFunctions.js';
import { modalPagamentos, modalTransferencias } from '../components/modal.js';
import profileImg from '../../img/profile.png';

let Dash = {
  render: async () => {
    let tableContent = await getDashboard();
    let tabelaPlanos = await getPlanosConta();
    let profileInfo = getProfile();
    let view = `
      ${modalPagamentos}
      ${modalTransferencias}
      <!-- box de Profile -->
      <div class="profile d-flex">
        <img src="${profileImg}" width="70" height="80" alt="User Profile">
        <div class="">
          <h5 class="ms-3" id="welcomeMessage">
            <!-- content from API -->
            Olá ${profileInfo.nome}!
          </h5>
          <div class="d-flex me-2">
            <p class="my-0 mx-3" id="contaNumero">
              <!-- content from API -->
              Conta nº: ${profileInfo.id}.
            </p>
            <p class="my-0">
              Saldo: <span class="green--text" id="saldo">${tableContent.tabelas.saldo}</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Tabela de Lançamentos -->
      <section class="container top--offset information area-150">

        <div class="text-center information--title">
          <h1 class="fw-bold"><span class="marine--text">Dash</span>Board</h1>
        </div>

        <div class="information--wrapper">
          <div class="information--table col-md-6">
            <table class="table table-striped table-hover caption-top">
              <caption class="fw-bold purple--text">Lançamentos Futuros(Planos Conta)</caption>
              <thead>
                <tr>
                  <th scope="col">Data</th>
                  <th scope="col">Descrição</th>
                  <th scope="col">Tipo</th>
                </tr>
              </thead>
              <tbody id="tableBody">
              <!-- conteúdo dinâmico -->
              ${tabelaPlanos}
              </tbody>
            </table>
          </div>

          <div class="information--general col-md-7">
            <!-- Button trigger modal -->
            <div class="payments">
              <h3 clas="payments--title">Ações</h3>
              <div class="payments--wrapper">
                <div class="payments--pay me-5">
                  <p class="payments--pay-text">O Pix já está disponível, registre sua chave e já começe a usar.</p>
                  <button type="button" class="payments--button" id="paymentButton">
                    Pagar Contas
                    <i class="far fa-credit-card"></i>
                  </button>
                </div>
                <div class="payments--transferencias">
                  <p class="payments--transferencias-text">TED, DOC e Pix e Criptomoedas, tudo em um só lugar.</p>
                  <button type="button" class="payments--button" id="transferButton">
                    Transferências
                    <i class="fas fa-random"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- Tabela de Contas (Banco && Crédito) -->
      <section class="account container">
        <table class="table table-striped table-hover caption-top me-4">
          <caption class="fw-bold purple--text">Conta Banco</caption>
          <thead>
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Descrição</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody id="tableBodyBank">
            <!-- conteúdo dinâmico -->
            ${tableContent.tabelas.tabelaBanco}
          </tbody>
        </table>

        <table class="table table-striped table-hover caption-top">
          <caption class="fw-bold purple--text">Conta Crédito</caption>
          <thead>
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Descrição</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody id="tableBodyCredit">
            <!-- conteúdo dinâmico -->
            ${tableContent.tabelas.tabelaCredito}
          </tbody>
        </table>
      </section>

      
      <!-- Seção de Cartões disponíveis -->
      <section class="container-fluid your-cards bg-light py-5">
        <div class="text-center your-cards--title">
          <h1>Seus cartões</h1>
        </div>

        <div class="d-flex your-cards">
          <div class="creditCard-body your-cards--card">
            <div class="creditCard-inner">
              <div class="creditCard-front silver-bg-front">
                <h5 class="creditCard-title text-dark">Silver</h5>
                <div class="creditCard-middle">
                  <div class="creditCard-chip">
                    <div class="creditCard-circuit"></div>
                  </div>
                  <p class="creditCard-text text-dark">Business</p>
                </div>
              </div>
              <div class="creditCard-back silver-bg-back">
                <div class="creditCard-back--line"></div>
                <div class="creditCard-back--line light-bg text-end pe-2 pt-1 w-75">318</div>
                <h5 class="creditCard-back--title text-dark mt-2 ms-2">4865 1567 9841 3549</h5>
              </div>
            </div>
          </div>

          <div class="creditCard-body your-cards--card mx-4">
            <div class="creditCard-inner">
              <div class="creditCard-front gold-bg-front">
                <h5 class="creditCard-title gold-text">Gold</h5>
                <div class="creditCard-middle">
                  <div class="creditCard-chip">
                    <div class="creditCard-circuit"></div>
                  </div>
                  <p class="creditCard-text gold-text">Platinum</p>
                </div>
              </div>
              <div class="creditCard-back gold-bg-back">
                <div class="creditCard-back--line"></div>
                <div class="creditCard-back--line light-bg text-end w-75 pe-2 pt-1">318</div>
                <h5 class="creditCard-back--title gold-text mt-2 ms-2">4865 1567 9841 3549</h5>
              </div>
            </div>
          </div>

          <div class="creditCard-body your-cards--card">
            <div class="creditCard-inner">
              <div class="creditCard-front dark-bg-front">
                <h5 class="creditCard-title silver-text">Black</h5>
                <div class="creditCard-middle">
                  <div class="creditCard-chip">
                    <div class="creditCard-circuit">
                    </div>
                  </div>
                  <p class="creditCard-text silver-text">Unlimited</p>
                </div>
              </div>
              <div class="creditCard-back dark-bg-back">
                <div class="creditCard-back--line bg-dark"></div>
                <div class="creditCard-back--line light-bg text-end pe-2 pt-1 w-75">318</div>
                <h5 class="creditCard-back--title mt-2 ms-2">4865 1567 9841 3549</h5>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- Tabela de Transações -->
      <section class="container transactions">

        <div class="text-center transactions--title">
          <h1>Transações</h1>
        </div>

        <div class="transactions--wrapper">
          <div class="transactions--table">
            <table class="table table-striped table-hover caption-top">
              <caption class="fw-bold">Entradas</caption>
              <thead>
                <tr>
                  <th scope="col">Data</th>
                  <th scope="col">Descrição</th>
                  <th scope="col">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">01/02/2021</th>
                  <td>Conta de luz</td>
                  <td class="green--text">R$ 153,85</td>
                </tr>
                <tr>
                  <th scope="row">03/02/2021</th>
                  <td>Fatura cartão de crédito</td>
                  <td class="green--text">R$ 2.598,14</td>
                </tr>
                <tr>
                  <th scope="row">09/02/2021</th>
                  <td>Transferencia para Douglas</td>
                  <td class="green--text">R$ 546,71</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="transactions--table">
            <table class="table table-striped caption-top">
              <caption class="fw-bold">Saídas</caption>
              <thead>
                <tr>
                  <th scope="col">Data</th>
                  <th scope="col">Descrição</th>
                  <th scope="col">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">01/02/2021</th>
                  <td>Conta de luz</td>
                  <td class="red--text">R$ -153,85</td>
                </tr>
                <tr>
                  <th scope="row">03/02/2021</th>
                  <td>Fatura cartão de crédito</td>
                  <td class="red--text">R$ -2.598,14</td>
                </tr>
                <tr>
                  <th scope="row">09/02/2021</th>
                  <td>Transferencia para Douglas</td>
                  <td class="red--text">R$ -546,71</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </section>


    `;
    return view;

  },
  after_render: async () => {

    const botaoPagar = document.getElementById('paymentButton');
    botaoPagar.addEventListener('click', () => {
      const filter = document.getElementById('paymentFilter');
      const modal = document.getElementById('paymentModal');
      filter.classList.add('show-filter');
      modal.classList.add('show-modal');
    })

    // verifica se o clique foi no filtro e fecha o modal caso tenha sido.
    function fechaModal(tipo, filtro, classe, event) {
      // o primeiro if será utilizado para o botão cancelar.
      if (!classe && !event) {
        document.getElementById(filtro).classList.remove('show-filter');
        document.getElementById(tipo).classList.remove('show-modal');
      } else {
        if (event.target.className.includes(classe)) {
          document.getElementById(filtro).classList.remove('show-filter');
          document.getElementById(tipo).classList.remove('show-modal');
        }
      }
    }

    const fechaModalPagamentos = document.getElementById('paymentFilter')
    .addEventListener('click', (event) => {
        fechaModal('paymentModal', 'paymentFilter', 'show-filter', event);
    })

    const botaoCancelarPagamentos = document.getElementById('cancelPayment')
    .addEventListener('click', () => {
      fechaModal('paymentModal', 'paymentFilter');
    })

    const botaoTransferir = document.getElementById('transferButton');
    botaoTransferir.addEventListener('click', () => {
      // Abre o modal.
      const filter = document.getElementById('filter');
      const modal = document.getElementById('transferModal');
      filter.classList.add('show-filter');
      modal.classList.add('show-modal');
    })

    // trata a transfêrencia.
    const confirmaTransferencia = document.getElementById('confirmTransfer')
    .addEventListener('click', () => {
      const payload = {
         conta :         document.getElementById('transferenciaConta').value,
         contaDestino:   document.getElementById('transferenciaDestino').value,
         data:           document.getElementById('transferenciaData').value,
         descricao:      document.getElementById('transferenciaDescricao').value,
         login:          document.getElementById('transferenciaLogin').value,
         planoConta:     document.getElementById('transferenciaPlano').value,
         valor:          document.getElementById('transferenciaValor').value
 
      }

      fazTransferencia(payload);
      successMessage('spanTransferir', 'confirmTransfer', 'okIcon');
      setTimeout(() => {
        window.location.reload();
      }, 300);
    })

    // Fecha o modal de transf.;
    const fechaModalTransferencias = document.getElementById('filter')
    .addEventListener('click', (event) => {
      fechaModal('transferModal', 'filter', 'filter', event);
    })

    // Botão Cancelar do modal de Transferências.
    const botaoCancelarTransferecias = document.getElementById('cancelButton')
    .addEventListener('click', () => {
      document.getElementById('filter').classList.remove('show-filter');
      document.getElementById('transferModal').classList.remove('show-modal');
    })

    // realiza um pagamento.
    const confirmaPagamento = document.getElementById('confirmPayment');

    confirmaPagamento.addEventListener('click', () => {
      const payload = {
        descricao:      document.getElementById('pagamentoDescricao').value,
        id:             document.getElementById('pagamentoId').value,
        login:          document.getElementById('pagamentoLogin').value,
        padrao:         document.getElementById('pagamentoPadrao').value,
        tipoMovimento:  document.getElementById('pagamentoTipo').value
      }
      
      fazPagamento(payload);
      successMessage('spanPagar', 'confirmPayment', 'okIcon');
      setTimeout(() => {
        window.location.reload();
      }, 300);
    });
  }
}

export default Dash;