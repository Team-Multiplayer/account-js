let Header = {
  render: async () => {

    let view = `
    <!-- Header Section -->
    <header class="header container-fluid">
      <div class="header--wrapper">
        <a class="header--logo" href="index.html">
          Account
          <!-- <div class="header--logo">Account</div> -->
        </a>
        <div class="header--nav">
          <a class="navbar-link text-dark" href="#services">Serviços</a>
          <a class="navbar-link text-dark" href="login.html">Login</a>
          <a class="navbar-link text-dark" href="signup.html">Register</a>
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

