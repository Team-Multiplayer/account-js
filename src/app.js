// Pages
import Home from './views/pages/Home.js';
import Login from './views/pages/Login.js';
import SignUp from './views/pages/SignUp.js';
import Dash from './views/pages/Dash.js';
import Error404 from './views/pages/Error404.js';
// Components
import Header from './views/components/Nav.js';
import Footer from './views/components/Footer.js';
// Funções úteis
import Utils from './service/Utils.js';

// rotas da aplicação
let routes = {
  '/': Home,
  '/signup': SignUp,
  '/login': Login,
  '/dashboard': Dash
}

const router = async () => {

  // monta o header
  const header = null || document.getElementById('header');
  header.innerHTML = await Header.render();
  await Header.after_render();

  // monta a página de acordo com a url
  let request = Utils.parseRequestURL();
  let parseURL = (request.resource ? '/' + request.resource : '/') + (request.verb ? '/' + request.verb : '')
  let page = routes[parseURL] ? routes[parseURL] : Error404;
  const content = null || document.getElementById('container');
  content.innerHTML = await page.render();
  await page.after_render();

  // monta o footer
  const footer = null || document.getElementById('footer');
  await Home.after_render();
  footer.innerHTML = await Footer.render();

}

// Observar as mudanças na URL
window.addEventListener('hashchange', router);

// carregamento da página
window.addEventListener('load', router);
