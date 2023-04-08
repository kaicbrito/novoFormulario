const form = document.getElementById("user-form");
const cepInput = document.getElementById("cep");
const sexoInput = document.getElementById("sexo");
const dataNascimentoInput = document.getElementById("dataNascimento");
const profissaoInput = document.getElementById("profissao");
const streetInput = document.getElementById("logradouro");
const neighborhoodInput = document.getElementById("bairro");
const cityInput = document.getElementById("localidade");
const stateInput = document.getElementById("uf");

// Adiciona o evento de submit ao formulário
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Cria um objeto com as informações do usuário
  const user = {
    name: form.name.value,
    email: form.email.value,
    cep: cepInput.value.replace(/\D/g, ""),
    sexo: form.sexo.value,
    dataNascimento: form.dataNascimento.value,
    profissao: form.profissao.value,
    street: streetInput.value,
    neighborhood: neighborhoodInput.value,
    city: cityInput.value,
    state: stateInput.value,
  };

  // Verifica se já existe algum dado salvo no localStorage
  let users = localStorage.getItem("users");
  if (users) {
    users = JSON.parse(users);
  } else {
    users = [];
  }

  // Adiciona o novo usuário ao array de usuários
  users.push(user);

  // Salva os dados dos usuários no localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // Adiciona a mensagem de sucesso ao formulário
  const successMessage = document.createElement("p");
  successMessage.textContent = "Cadastro realizado com sucesso!";
  form.appendChild(successMessage);
});

// Adiciona o evento de blur ao campo de CEP
cepInput.addEventListener("blur", () => {
  const cep = cepInput.value.replace(/\D/g, "");
  if (cep.length !== 8) {
    alert("CEP inválido");
    return;
  }
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      streetInput.value = data.logradouro;
      neighborhoodInput.value = data.bairro;
      cityInput.value = data.localidade;
      stateInput.value = data.uf;
    })
    .catch((error) => {
      console.log(error);
      alert("Erro ao buscar endereço pelo CEP");
    });
});
