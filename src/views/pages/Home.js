import { redirectTo } from '../../service/Auth.js';
import imgProfit from "../../img/home-3.png";

let Home = {
  render: async () => {
    let view = `
    <section class="banner top--offset">
      <div class="banner--box">
        <h1 class="text-white">O melhor banco para você.</h1>
        <a class="banner--button" id="homeRegisterLink">Cadastrar Agora!</a>
      </div>
    </section>

    <!-- About section -->
    <section class="about area-100">
      <h1 class="about--title mb-5">Moderno</h1>
      <div class="about--row">
        <div class="about--wrapper">
          <h3>Seguro</h3>
          <p class="about--row-text">
            Nossos servidores são referência no quesito segurança. Possuímos uma
            equipe dedicada 24h nos sete dias da semana, para garantir que sua conta
            estará livre de qualquer acesso não permitido.
          </p>
        </div>
        <div class="about--image-left">
        </div>
      </div>
      <div class="about--row">
        <div class="about--image-right"></div>
        <div class="about--wrapper">
          <h3>Prático</h3>
          <p class="about--row-text">
            Está em casa? Naquele dia que não existe motivo para sair? Não se preocupe,
            ainda assim nossos serviços estão na palma da sua mão disponíveis
            dia e noite em qualquer momento.
          </p>
        </div>
      </div>
    </section>

    <section class="commitment area-100">
      <div class="commitment--box">
        <div>
          <h1 class="commitment--box-title dark--text">Nosso Objetivo</h1>
          <p class="commitment--box-text">
            Com a missão de cuidar bem do seu dinheiro, também estamos dispostos
            a inserir você ao que há de mais novo no mundo financeiro. Temos disponível
            a opção de criptomoedas, além de uma gama de serviços para fazer com que
            sua conta sempre opere no positivo e evolua à cada dia.
            Cadastre-se agora mesmo e já começe a ver seu dinheiro rendendo.
          </p>
        </div>
        <img class="img-fluid" src=${imgProfit} width="400" height="270" alt="Big coin" />
      </div>
    </section>
    <section class="gallery" id="services">
      <div class="gallery--box text-center">
        <h1 class="gallery--box-title mt-3">Serviços</h1>
        <p class="gallery--box-text">
          Tudo que você precisa em um só lugar? Sim, aqui isso é possível.
        </p>
        <div class="gallery--services mt-5">
          <div class="gallery--card col-md-3">
            <h3 class="gallery--card-title">Transferências</h3>
            <p class="gallery--card-text">TED, DOC e Pix.</p>
            <a class="gallery--card-button loginLink">
              <span>Acessar</span>
            </a>
          </div>
          <div class="gallery--card col-md-3">
            <h3 class="gallery--card-title">Depósitos</h3>
            <p class="gallery--card-text">Dia e Noite disponível para você.</p>
            <a class="gallery--card-button loginLink">
              <span>Acessar</span>
            </a>
          </div>
          <div class="gallery--card col-md-3">
            <h3 class="gallery--card-title">Pagamentos</h3>
            <p class="gallery--card-text">Disponibilidade na palma da sua mão.</p>
            <a class="gallery--card-button loginLink">
              <span>Acessar</span>
            </a>
          </div>
          <div class="gallery--card col-md-3">
            <h3 class="gallery--card-title">Recargas</h3>
            <p class="gallery--card-text">Todas as operadoras sem custo adicional.</p>
            <a class="gallery--card-button loginLink">
              <span>Acessar</span>
            </a>
          </div>
          <div class="gallery--card col-md-3">
            <h3 class="gallery--card-title">Investimentos</h3>
            <p class="gallery--card-text">Seu dinheiro rendendo mais que a poupança sem esforço.</p>
            <a class="gallery--card-button loginLink">
              <span>Acessar</span>
            </a>
          </div>
          <div class="gallery--card col-md-3">
            <h3 class="gallery--card-title">CriptoMoedas</h3>
            <p class="gallery--card-text">O futuro do dinheiro junto com você.</p>
            <a class="gallery--card-button loginLink">
              <span>Acessar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    `;

    return view;
  },
  after_render: async () => {

    const registerButton =  '' || document.getElementById('homeRegisterLink');
    registerButton && registerButton.addEventListener('click', () => {
      redirectTo('signup');
    })

    const loginLinks =     '' || document.querySelectorAll('.loginLink');
    loginLinks.forEach(loginLink => {
      loginLink.addEventListener('click', () => {
        redirectTo('login');
      })
    });
  }
}

export default Home;