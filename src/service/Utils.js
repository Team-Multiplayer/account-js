const parseRequestURL = () => {
  let url = location.hash.slice(1).toLocaleLowerCase() || '/';
  let r = url.split('/')
  let request = {
    resource: null,
    id: null,
    verb: null
  }

  request.resource = r[1]
  request.id = r[2]
  request.verb = r[3]

  return request;
}

// muda as classes css para um input válido
const inputValid = (obj) => {
  obj.classList.remove('is-invalid');
  obj.classList.add('is-valid');
}

// muda as classes css para um input inválido
const inputInvalid = (obj) => {
  obj.classList.remove('is-valid');
  obj.classList.add('is-invalid');
}

  export {
    parseRequestURL,
    inputValid,
    inputInvalid,
  };