function consultaEndereco() {
  let cep = document.querySelector('#cep').value

  if (cep.length !== 8) {
    alert('CEP Invalido')
    return
  }

  let url = `https://viacep.com.br/ws/${cep}/json/`

  fetch(url).then(function (response) {
    response.json().then(mostrarEndereco)
  })
}

function mostrarEndereco(dados) {
  let resultado = document.querySelector('#resultado')
  if (dados.erro) {
    resultado.innerHTML = 'Não é Possivel Localizar Endereço filho!!'
  } else {
    resultado.innerHTML = `<p> Cidade: ${dados.localidade} - ${dados.uf}</p>`
  }
}
