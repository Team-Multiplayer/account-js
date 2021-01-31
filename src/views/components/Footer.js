let Footer = {
  render: async () => {
    const currentPage = window.location.href;
    const path = currentPage.split('/').slice(-1)[0];
    const show = path === '#' || path === '' || path === 'login'? 'absolute' : 'relative';

    let view = `
    <footer class="footer">
      <p class="footer--title text-white">AccountBank CopyRight 2021.</p>
      <div class="footer--logo">
        <span class="purple--text">Acc</span>ount
      </div>
    </footer>
    `;
    return view;
  },
  after_render: async () => {
  }
}

export default Footer;

