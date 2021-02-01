let modalPagamentos = `

  <!-- Modal de Pagamentos -->
  <div class="filter-hidden" id="paymentFilter">
  
  <div class="transfer--modal" id="paymentModal">
      <h3 class="fw-bold">Pagamento</h3>
      <form>
        <div class="mb-3">
          <label for="pagamentoDescricao" class="form-label">Descrição</label>
          <input type="text" class="form-control" id="pagamentoDescricao" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="pagamentoId" class="form-label">ID</label>
          <input type="text" class="form-control" id="pagamentoId">
        </div>
        <div class="mb-3">
          <label for="pagamentoLogin" class="form-label">Login</label>
          <input type="text" class="form-control" id="pagamentoLogin">
        </div>
        <div class="mb-3">
          <label for="pagamentoPadrao" class="form-label">Padrão</label>
          <input type="text" class="form-control" id="pagamentoPadrao">
        </div>
        <div class="mb-3">
          <label for="pagamentoTipo" class="form-label">Tipo de Movimentação</label>
          <input type="text" class="form-control" id="pagamentoTipo">
        </div>
      </form>
      <div class="d-flex justify-content-end mt-5">
        <button type="button" class="modal--button-cancel me-4" id="cancelPayment">
          <span class="text-danger fw-bold">Cancelar</span>
        </button>
        <button type="button" class="modal--button-ok" id="confirmPayment">
          <span class="text-success fw-bold" id="spanPagar">Pagar</span>
          </button>
          <i class="fas fa-check hide-icon" id="okIcon"></i>
      </div>
    </div>
  </div>
`;

let modalTransferencias = `

  <!-- Modal de transferência -->
  <div class="filter-hidden" id="filter">
    <div class="transfer--modal" id="transferModal">
      <h3 class="fw-bold">transferir</h3>
      <form class="form">
        <section class="d-flex">
          <div class="mb-3 me-3">
            <label for="transferenciaConta" class="form-label">Conta</label>
            <input type="text" class="form-control" id="transferenciaConta">
          </div>
          <div class="mb-3">
            <label for="transferenciaDestino" class="form-label">Conta Destino</label>
            <input type="text" class="form-control" id="transferenciaDestino">
          </div>
        </section>
        <section class="d-flex">
          <div class="mb-3 me-3">
            <label for="transferenciaData" class="form-label">Data</label>
            <input type="text" class="form-control" id="transferenciaData">
          </div>
          <div class="mb-3">
            <label for="transferenciaDescricao" class="form-label">Descrição</label>
            <input type="text" class="form-control" id="transferenciaDescricao">
          </div>
        </section>
        <div class="mb-3">
          <label for="transferenciaLogin" class="form-label">Login</label>
          <input type="text" class="form-control" id="transferenciaLogin">
        </div>
        <div class="mb-3">
          <label for="transferenciaPlano" class="form-label">Plano de Conta</label>
          <input type="text" class="form-control" id="transferenciaPlano">
        </div>
        <div class="mb-3">
          <label for="transferenciaValor" class="form-label">Valor</label>
          <input type="text" class="form-control" id="transferenciaValor">
        </div>
        <div class="d-flex justify-content-end pt-5">
          <button class="modal--button-cancel" type="button" id="cancelButton">
            <span class="text-danger fw-bold">Cancelar</span>
          </button>
          <button class="modal--button-ok ms-3" type="button" id="confirmTransfer">
            <span class="text-success fw-bold" id="spanTransferir">Transferir</span>
          </button>
        </div>
      </form>
    </div>
  </div>

`;

export {modalPagamentos, modalTransferencias};