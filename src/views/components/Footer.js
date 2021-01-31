let Footer = {
  render: async () => {
    let view = `
    <footer class="footer mt-5">
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

