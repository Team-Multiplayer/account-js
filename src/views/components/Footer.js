let Footer = {
  render: async () => {
    const currentPage = window.location.href;
    const path = currentPage.split('/').slice(-1)[0];
    const show = path === '#' || path === '' || path === 'login'? 'absolute' : 'relative';

    let view = `
    <footer class="footer" style="position: ${show}">
      <h6 class="footer--title text-white">Account CopyRight 2021.</h6>
    </footer>
    `;
    return view;
  },
  after_render: async () => {
  }
}

export default Footer;

