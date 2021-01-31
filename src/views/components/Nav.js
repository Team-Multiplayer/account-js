import { redirectTo, clearStorage, isAuthenticated } from '../../service/Auth.js';

let Header = {
  render: async () => {

    let view = `
    <!-- Header Section -->
    <header class="header container-fluid">
      <div class="header--wrapper">
        <a class="header--logo ms-5" id="homeLink">
          <span class="purple--text">Acc</span>ount
          <!-- <div class="header--logo">Account</div> -->
        </a>
        <div class="header--nav">
          ${ // exibe os menus quando não está logado
            (!isAuthenticated()) ?
            `
            <a class="navbar-link text-dark" id="loginLink">Login</a>
            <a class="navbar-link text-dark" id="registerLink">Cadastrar</a>
            ` : ``
          }
          ${ // exibe os menus quando está logado
            (isAuthenticated()) ?
            `
            <a class="navbar-link text-dark" id="dashButton">DashBoard</a>
            <a class="navbar-link text-dark" id="logoutLink">Logout</a>
            ` : ``
          }
        </div>
      </div>
    </header>
    `;

    return view;
  },
  after_render: async () => {

    // pega os elementos link
    const homeLink =        null || document.getElementById('homeLink');
    const dashboardButton = null || document.getElementById('dashButton');
    const registerButton =  null || document.getElementById('registerLink');
    const logoutButton =    null || document.getElementById('logoutLink');
    const loginButton =     null || document.getElementById('loginLink');

    // se encontrou o elemento link, adiciona o evento de click
    homeLink && homeLink.addEventListener('click', () => {
      // direciona para a home
      redirectTo('');
    })

    // se encontrou o elemento link, adiciona o evento de click
    dashboardButton && dashboardButton.addEventListener('click', () => {
      // direciona para o dashboard
      redirectTo('dashboard');
    })

    // se encontrou o elemento link, adiciona o evento de click
    logoutButton && logoutButton.addEventListener('click', () => {
      // apaga os dados guadados
      clearStorage();
      // direciona para a home
      redirectTo('login');
    })

    // se encontrou o elemento link, adiciona o evento de click
    registerButton && registerButton.addEventListener('click', () => {
      // direciona para o signup
      redirectTo('signup');
    })

    // se encontrou o elemento link, adiciona o evento de click
    loginButton && loginButton.addEventListener('click', () => {
      // direciona para o login
      redirectTo('login');
    })
  }
}

export default Header;

