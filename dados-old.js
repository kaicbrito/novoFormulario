const userInfo = document.getElementById("user-info");
const userString = localStorage.getItem("user");
if (userString) {
  const user = JSON.parse(userString);
  userInfo.innerHTML = `
    <p><strong>Nome:</strong> ${user.name}</p>
    <p><strong>E-mail:</strong> ${user.email}</p>
    <p><strong>CEP:</strong> ${user.cep}</p>
    <p><strong>Rua:</strong> ${user.street}</p>
    <p><strong>Bairro:</strong> ${user.neighborhood}</p>
    <p><strong>Cidade:</strong> ${user.city}</p>
    <p><strong>Estado:</strong> ${user.state}</p>
    <hr/>
  `;
} else {
  userInfo.innerHTML = "<p>Nenhum dado encontrado.</p>";
}
