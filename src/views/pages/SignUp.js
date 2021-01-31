import { inputValid, inputInvalid } from "../../service/Utils.js";
import { redirectTo, storeData } from '../../service/Auth.js';
import baseURL from '../../service/baseURL.js';
import imgSignup from '../../img/signup.jpg';

let SignUp = {
  render: async () => {
    let view = `
    <section>
      <div class="container area-200">
        <div class="row">
          <div class="col">
            <h1 class="about---register-title text-black">Dados Pessoais</h1>
            <form class="g-3">
              <div class="col-md-10">
                <label for="inputName" class="form-label">Nome completo</label>
                <input type="text" class="form-control" id="inputName" value="" required>
              </div>
              <div class="col-md-10">
                <label for="inputCpf" class="form-label mt-3">CPF</label>
                <div class="input-group">
                  <input type="text" class="form-control" id="inputCpf" required placeholder="Ex.: 000.000.000-00" maxlength="14">
                </div>
              </div>
              <div class="col-md-10">
                <label for="inputCity" class="form-label mt-3">Cidade</label>
                <input type="text" class="form-control" id="inputCity" required>
              </div>
              <div class="col-md-3">
                <label for="selectState" class="form-label mt-3">Estado</label>
                <select class="form-select" id="selectState" required>
                  <option selected disabled value="">Escolha</option>
                  <option>CE</option>
                  <option>PE</option>
                  <option>PB</option>
                  <option>BA</option>
                  <option>MG</option>
                  <option>RJ</option>
                  <option>SP</option>
                </select>
              </div>
              <div class="col-md-10">
                <label for="inputUsername" class="form-label mt-3">Nome de Usuário</label>
                <input type="text" class="form-control" id="inputUsername" required>
              </div>
              <div class="col-md-10">
                <label for="inputPassword" class="form-label mt-3">Senha</label>
                <input type="password" class="form-control" id="inputPassword" required>
              </div>
              <div class="col-md-10">
                <label for="inputPasswordVerify" class="form-label mt-3">Confirmar Senha</label>
                <input type="password" class="form-control" id="inputPasswordVerify" required>
              </div>
              <div class="col-12">
                <div class="form-check mt-3">
                  <input class="form-check-input input-group" type="checkbox" value="" id="checkTerms" required>
                  <label class="form-check-label" for="checkTerms">
                    Concordo com os termos e condições
                  </label>
                </div>
              </div>
              <div class="col-12">
                <div id="alert" class="alert-text mt-3 mb-1" hidden></div>
                <button type="button" class="btn btn-dark mt-3" id="submitSignup">Enviar</button>
              </div>
            </form>
          </div>
          <div class="col">
            <div class="card-product vh-100">
              <img src=${imgSignup} />
              <div class="card-product-infos">
                <h2>Sua conta</h2>
                <p>Você está dando os primeiros passos para abrir uma conta na <strong>Account</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    `;

    return view;
  },
  after_render: async () => {

    // adiciona a máscara do CPF
    VMasker(document.querySelector("#inputCpf")).maskPattern("999.999.999-99");
    // monta a lista de estados
    const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
    let optionsStates = '<option selected disabled value>Escolha</option>';
    estados.forEach(estado => {
      optionsStates += '<option value="' + estado + '">' + estado + '</option>';
    });
    // adiciona a lista de estados no select
    const selectState = document.querySelector('#selectState');
    selectState.innerHTML = optionsStates;

    // função para validar o preenchimento do formulário
    function formValidation() {
      // RegEx validação CPF com pontos e hífen
      let validCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

      // pega os inputs
      let inputName = document.querySelector('#inputName');
      let inputCpf = document.querySelector('#inputCpf');
      let inputCity = document.querySelector('#inputCity');
      let selectState = document.querySelector('#selectState');
      let inputUsername = document.querySelector('#inputUsername');
      let inputPassword = document.querySelector('#inputPassword');
      let inputPasswordVerify = document.querySelector('#inputPasswordVerify');
      let checkTerms = document.querySelector('#checkTerms');

      // inicializa a variável de controle da validação
      let validation = true;

      // se o inputName não foi preenchido
      if (inputName.value === '') {
        // muda o estilo pra input inválido
        inputInvalid(inputName);
        // muda a variável de controle
        validation = false;
      } else {
        // se foi preenchido
        // então muda o estilo pra input válido
        inputValid(inputName);
      }

      // se o inputCpf não foi preenchido
      if (inputCpf.value === '') {
        // muda o estilo pra input inválido
        inputInvalid(inputCpf);
        // muda a variável de controle
        validation = false;
      } else {
        // se foi preenchido
        // valida o cpf
        if (validCPF.test(inputCpf.value) === false) {
          // muda o estilo pra input inválido
          inputInvalid(inputCpf);
          // muda a variável de controle
          validation = false;
        } else {
          // então muda o estilo pra input válido
          inputValid(inputCpf);
        }
      }

      // se o inputCity não foi preenchido
      if (inputCity.value === '') {
        // muda o estilo pra input inválido
        inputInvalid(inputCity);
        // muda a variável de controle
        validation = false;
      } else {
        // se foi preenchido
        // então muda o estilo pra input válido
        inputValid(inputCity);
      }

      // se o selectState não foi preenchido
      if (selectState.value === '') {
        // muda o estilo pra input inválido
        inputInvalid(selectState);
        // muda a variável de controle
        validation = false;
      } else {
        // se foi preenchido
        // então muda o estilo pra input válido
        inputValid(selectState);
      }

      // se o inputUsername não foi preenchido
      if (inputUsername.value === '') {
        // muda o estilo pra input inválido
        inputInvalid(inputUsername);
        // muda a variável de controle
        validation = false;
      } else {
        // se foi preenchido
        // então muda o estilo pra input válido
        inputValid(inputUsername);
      }

      // se o inputPassword não foi preenchido
      if (inputPassword.value === '') {
        // muda o estilo pra input inválido
        inputInvalid(inputPassword);
        // muda a variável de controle
        validation = false;
      } else {
        // se foi preenchido
        // então muda o estilo pra input válido
        inputValid(inputPassword);
      }

      // se o inputPasswordVerify não foi preenchido
      if (inputPasswordVerify.value === '') {
        // muda o estilo pra input inválido
        inputInvalid(inputPasswordVerify);
        // muda a variável de controle
        validation = false;
      } else {
        // se foi preenchido
        // verifica se as senhas são iguais
        if (inputPassword.value !== inputPasswordVerify.value) {
          // muda o estilo pra input inválido
          inputInvalid(inputPasswordVerify);
          // muda a variável de controle
          validation = false;
        } else {
          // então muda o estilo pra input válido
          inputValid(inputPasswordVerify);
        }
      }

      // se o checkTerms não foi preenchido
      if (checkTerms.checked === false) {
        // muda o estilo pra input inválido
        inputInvalid(checkTerms);
        // muda a variável de controle
        validation = false;
      } else {
        // se foi preenchido
        // então muda o estilo pra input válido
        inputValid(checkTerms);
      }

      // retorna a variável de controle
      return validation;

    }

    // pega todos os inputs e select
    document.querySelectorAll('input, select').forEach(elemento => {
      // para cada elemento adiciona o evento onChange para validar o formulário
      elemento.addEventListener('change', formValidation);
      // para cada elemento adiciona o evento onKeyUp para validar o formulário
      elemento.addEventListener('keyup', formValidation);

    });

    // adiciona o evento de click no botão de Login
    document.querySelector('#submitSignup').addEventListener('click', () => {

      let alert = document.querySelector('#alert');
      alert.hidden = true;
      alert.innerHTML = '';

      // se o formulário foi preenchido corretamente
      if (formValidation()) {

        // pega os inputs
        let inputName = document.querySelector('#inputName');
        let inputUsername = document.querySelector('#inputUsername');
        let inputCpf = document.querySelector('#inputCpf');
        let inputPassword = document.querySelector('#inputPassword');

        // monta o objeto para a API
        let userSignup = {
          nome: inputName.value,
          cpf: inputCpf.value.replace(/\D/g, ''), // deixa só números
          login: inputUsername.value.toLowerCase(),
          senha: inputPassword.value,
        };

        // chama a API passando o objeto
        axios.post(`${baseURL}usuarios`, userSignup).then( res => {
          // se o POST obteve sucesso
          if (res.status == 200) { // SUCESSO 🎉

            // guarda o token no localStorage
            localStorage.setItem('@flashMessage', 'Cadastro realizado, agora faça o login.');

            // redireciona para o login
            redirectTo('login')
          }

        } ).catch( error => { // Error 😨

          if (error.response) {
            /*
            * A requisição foi feita e o servidor respondeu com
            * um código de status fora do escopo 2xx
            */
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

            // desestruturação da resposta de erro
            let { codigo, error: msgErro } = error.response.data

            alert.innerHTML = `${msgErro} (Código do erro: ${codigo})`;
            alert.hidden = false;

          } else if (error.request) {
            /*
            * A requisição foi feita mas não houve resposta
            */
            console.log(error.request);
          } else {
            /*
            * Alguma coisa aconteceu na configuração
            * da requisição e gerou um erro
            */
            console.log('Error', error.message);
          }
          /*
            * Alguma coisa aconteceu na configuração
            * da requisição e gerou um erro
            */
          console.log(error.config);
        });
      }
    });
  }
}

export default SignUp;

