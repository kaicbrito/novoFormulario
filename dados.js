const userInfo = document.getElementById("user-info");
const userString = localStorage.getItem("users");

if (userString) {
  const users = JSON.parse(userString);
  let html = `
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Sexo</th>
          <th>Data de nascimento</th>
          <th>Profissão</th>
          <th>CEP</th>
          <th>Rua</th>
          <th>Bairro</th>
          <th>Cidade</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
  `;
  users.forEach((user) => {
    html += `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.sexo}</td>
        <td>${user.dataNascimento}</td>
        <td>${user.profissao}</td>
        <td>${user.cep}</td>
        <td>${user.street}</td>
        <td>${user.neighborhood}</td>
        <td>${user.city}</td>
        <td>${user.state}</td>
      </tr>
      <tr>
        <td colspan="10"><hr /></td>
      </tr>
      `;
  });
  html += `
      </tbody>
    </table>
  `;
  userInfo.innerHTML = html;
} else {
  userInfo.innerHTML = "<p>Nenhum dado encontrado.</p>";
}

const form = document.getElementById("user-form");
const cepInput = document.getElementById("cep");
const sexoInput = document.getElementById("sexo");
const dataNascimento = document.getElementById("dataNascimento");
const profissaoInput = document.getElementById("profissao");
const streetInput = document.getElementById("logradouro");
const neighborhoodInput = document.getElementById("bairro");
const cityInput = document.getElementById("localidade");
const stateInput = document.getElementById("uf");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Cria um objeto com as informações do usuário
  const user = {
    name: form.name.value,
    email: form.email.value,
    sexo: form.sexo.value,
    data: form.data.value,
    profissao: form.profissao.value,
    cep: cepInput.value.replace(/\D/g, ""),
    street: streetInput.value,
    neighborhood: neighborhoodInput.value,
    city: cityInput.value,
    state: stateInput.value
  };

  // Adiciona o novo usuário ao array de usuários
  let users = [];
  const userString = localStorage.getItem("users");
  if (userString) {
    users = JSON.parse(userString);
  }
  users.push(user);

  // Salva o array de usuários no localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // Aqui você pode adicionar código para enviar o formulário para o servidor

  // Exibe mensagem de sucesso
  alert("Usuário adicionado com sucesso!");
});
