import { redirectTo } from '../../service/Auth.js';

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
        <a class="navbar-link text-dark" id="loginLink">Login</a>
        <a class="navbar-link text-dark" id="registerLink">Cadastrar</a>
        <a class="navbar-link text-dark" id="dashButton">DashBoard</a>
          <a class="navbar-link text-dark" id="logoutLink">Logout</a>
        </div>
      </div>
    </header>
    `;

    return view;
  },
  after_render: async () => {
    const homeLink =        '' || document.getElementById('homeLink');
    const dashboardButton = '' || document.getElementById('dashButton');
    const registerButton =  '' || document.getElementById('registerLink');
    const logoutButton =    '' || document.getElementById('logoutLink');
    const loginButton =     '' || document.getElementById('loginLink');

    homeLink.addEventListener('click', () => {
      redirectTo('');
    })

    logoutButton && dashboardButton.addEventListener('click', () => {
      redirectTo('dashboard');
    })

    logoutButton && logoutButton.addEventListener('click', () => {
      clearStorage();
      redirectTo('');
      window.location.reload();
    })

    loginButton && registerButton.addEventListener('click', () => {
      redirectTo('signup');
    })

    loginButton && loginButton.addEventListener('click', () => {
      redirectTo('login');
    })
  }
}

export default Header;

