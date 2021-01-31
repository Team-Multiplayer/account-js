let Header = {
  render: async () => {

    let view = `
    <!-- Header Section -->
    <header class="header container-fluid">
      <div class="header--wrapper">
        <a class="header--logo ms-5" href="index.html">
          <span class="purple--text">Acc</span>ount
          <!-- <div class="header--logo">Account</div> -->
        </a>
        <div class="header--nav">
          <a class="navbar-link text-dark" href="dash.html" id="dashButton">DashBoard</a>
          <a class="navbar-link text-dark" href="#services">Serviços</a>
          <a class="navbar-link text-dark" href="login.html">Login</a>
          <a class="navbar-link text-dark" href="signup.html">Cadastrar</a>
        </div>
      </div>
    </header>
    `;

    return view;
  },
  after_render: async () => {
  }
}

export default Header;

