import baseURL from './baseURL.js';
import {dashBoardParam, planosContaParam, pagamentoParam, transferenciaParam } from './params.js';

const userData = JSON.parse(localStorage.getItem('@usuario'));
const token = localStorage.getItem('@token');
// console.log(userData);
let defaultHeader = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": token
  }
}

export const getProfile = () => {
  const userInfo = {
    nome: userData.nome,
    id: userData.id,
    saldo: userData.saldo
  }
  return userData;
}

// get request para lancamentos/planos-conta
export const getPlanosConta = async () => {
  const response = await axios.get(`${baseURL}${planosContaParam}${userData.login}`, defaultHeader);
  console.log(response.data)

  const conteudo = response.data.map(plano => {
    return (
      `
      <tr>
        <th scope="row">01/02/2021</th>
        <td>${plano.descricao}</td>
        <td class="red--text">${plano.tipoMovimento}</td>
      </tr>
      `
    )
  }).join('');

  return conteudo;
}


// GET request para Dashboard endpoint.
export const getDashboard = async () => {
const response = await axios.get(`${baseURL}${dashBoardParam}${userData.login}`, defaultHeader);
console.log(response.data);
  const {contaBanco, contaCredito} = response.data;
  const saldo = contaBanco.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const tabelaBanco = contaBanco.lancamentos.map(element => {
    return (
      `
      <tr>
        <th scope="row">01/02/2021</th>
        <td>${element.descricao}</td>
        <td class="green--text">${element.valor}</td>
      </tr>
      `
    )

    
  }).join('');

  const tabelaCredito = contaCredito.lancamentos.length > 0 ? contaCredito.lancamentos.map(element => {
    return (
      `
      <tr>
        <th scope="row">01/02/2021</th>
        <td>${element.descricao}</td>
        <td class="green--text">${element.valor}</td>
      </tr>
      `
    )
  }).join('') : '<tr><td>Sem movimentações</td></tr>';

  return {tabelas: {tabelaBanco, tabelaCredito, saldo}};
}


// ******************* Pagamentos e Transferências ******************

// PAGAMENTOS

export const fazTransferencia = async (data) => {
  await axios.post(`${baseURL}${transferenciaParam}`, data, defaultHeader);

  console.log('Transferencia realizada com sucesso!');

}

export const fazPagamento = async (data) => {
  await axios.post(`${baseURL}${pagamentoParam}`, data, defaultHeader)

  console.log('Pagamento realizando com sucesso!');
}




