const isAuth = async (auth, route) => {
  if ( !auth ) {
    location.replace(`/#/${route}`);
  }
  return auth;
}

// limpa os dados da aplicação
const clearStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
}

// redireciona para a página especificada
const redirectTo = (path) => {
  window.location.replace(`/#/${path}`);
}

// guarda os dados da aplicação
const storeData = (userData) => {
  console.log(userData)
  const {token, conta, usuario} = userData;
  localStorage.setItem('usuario', JSON.stringify(usuario));
  localStorage.setItem('conta', JSON.stringify(conta));
  localStorage.setItem('@token', token);
}

// verifica se está logado
const isAuthenticated = () => {
  // se tiver a token então está logado senão não está
  return (localStorage.getItem("@token")) ? true : false;
}

export { isAuth, clearStorage, redirectTo, storeData, isAuthenticated };