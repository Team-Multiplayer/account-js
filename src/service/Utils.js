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

const inputValid =  (obj) => {
  obj.classList.remove('is-invalid');
  obj.classList.add('is-valid');
}

const inputInvalid = (obj) => {
  obj.classList.remove('is-valid');
  obj.classList.add('is-invalid');
}

  export {
    parseRequestURL,
    inputValid,
    inputInvalid,
  };