window.onload = function () {
  const especialidade = localStorage.getItem("especialidade");
  const especialista = localStorage.getItem("especialista");
  const data = localStorage.getItem("data");
  const hora = localStorage.getItem("hora");

  document.getElementById("especialidade").textContent = especialidade || "Não definido";
  document.getElementById("especialista").textContent = especialista || "Não definido";
  document.getElementById("data").textContent = data || "Não definido";
  document.getElementById("horario").textContent = hora || "Não definido";
};

function confirmarConsulta() {
  alert("Consulta confirmada com sucesso!");
  localStorage.clear(); // Limpa os dados após confirmar
  window.location.href = "login.html";
}
