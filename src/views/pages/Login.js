import baseURL from '../../service/baseURL.js';
import { inputValid, inputInvalid } from "../../service/Utils.js";
import { storeData, redirectTo } from '../../service/Auth.js';
import imgLogin from "../../img/login.jpg";

let Login = {
  render: async () => {
    let view = `
    <section>
      <div class="container">
        <div class="login d-flex align-items-center justify-content-center vh-100">
          <div id="msg" class="alert alert-success success-text mt-3" role="alert" hidden>
            A simple success alert—check it out!
          </div>
          <div class="login--box">
            <h1 class="about--login-title text-black">Login</h1>
            <form class="g-3">
              <div class="col-md-10">
                <div class="form-group mt-3">
                  <label for="inputUser">Usuário</label>
                  <input type="text" class="form-control" id="inputUser" placeholder="Usuário">
                </div>
              </div>

              <div class="col-md-10">
                <div class="form-group mt-3">
                  <label for="inputPassword">Senha</label>
                  <input type="password" class="form-control" id="inputPassword" placeholder="Senha">
                </div>
              </div>
              <div id="alert" class="alert-text mt-3 mb-1" hidden></div>
              <button type="button" class="btn btn-dark mt-3" id="submitLogin">Logar</button>
            </form>
          </div>
          <img class="img-fluid" src=${imgLogin}>
        </div>
      </div>
    </section>
    `;

    return view;
  },
  after_render: async () => {

    // verifica se tem alguma msg pro usuário
    let msgText = localStorage.getItem('@flashMessage')

    // se tiver
    if (msgText) {
      // arruma a msg e exibe
      let msg = document.querySelector('#msg');
      msg.innerHTML = msgText;
      msg.hidden = false;
      localStorage.removeItem('@flashMessage');
    } else {
      // esconde a msg
      msg.innerHTML = '';
      msg.hidden = true;
    }

    // função para validar o preenchimento do formulário
    function formValidation() {

      // pega os inputs
      let inputUser = document.querySelector('#inputUser');
      let inputPassword = document.querySelector('#inputPassword');

      // inicializa a variável de controle da validação
      let validation = true;

      // se o inputUser não foi preenchido
      if (inputUser.value === '') {
        // muda o estilo pra input inválido
        inputInvalid(inputUser);
        // muda a variável de controle
        validation = false;
      } else {
        // se foi preenchido
        // então muda o estilo pra input válido
        inputValid(inputUser);
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

      // retorna a variável de controle
      return validation;

    }

    // pega todos os inputs
    document.querySelectorAll('input').forEach(input => {
      // para cada input adiciona o evento onChange para validar o formulário
      input.addEventListener('change', formValidation);
      // para cada input adiciona o evento onKeyUp para validar o formulário
      input.addEventListener('keyup', formValidation);

    });

    // adiciona o evento de click no botão de Login
    document.querySelector('#submitLogin').addEventListener('click', () => {

      let alert = document.querySelector('#alert');
      alert.hidden = true;
      alert.innerHTML = '';

      // se o formulário foi preenchido corretamente
      if (formValidation()) {

        // pega os inputs
        let usuario = document.querySelector('#inputUser');
        let senha = document.querySelector('#inputPassword');

        // monta o objeto para a API
        let userLogin = {
          usuario: usuario.value,
          senha: senha.value,
        };

        // chama a API passando o objeto
        axios.post(`${baseURL}login`, userLogin).then( res => {
          // se o POST obteve sucesso
          if (res.status == 200) { // SUCESSO 🎉

            // pega o token e o objeto usuario da resposta da API
            let { token, usuario } = res.data;

            // guarda o token no localStorage
            localStorage.setItem("@token", token);
            // guarda o usuário no localStorage em forma de string
            localStorage.setItem("@usuario", JSON.stringify(usuario));
            // redireciona para o dashboard
            redirectTo('dashboard')
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

            alert.innerHTML = 'Usuário ou senha inválidos!';
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

export default Login;