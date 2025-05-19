const horariosDisponiveis = [
  "07:00","08:00", "09:00", "10:00", "11:00",
  "13:00", "14:00", "15:00", "16:00", "17:00"
];

document.addEventListener("DOMContentLoaded", () => {
  const dataInput = document.getElementById("data");
  const hoje = new Date();
  const hojeFormatado = hoje.toISOString().split("T")[0];
  dataInput.min = hojeFormatado;
});

function atualizarHorarios() {
  const dataSelecionada = document.getElementById("data").value;
  const horaSelect = document.getElementById("hora");
  horaSelect.innerHTML = "";

  if (!dataSelecionada) return;

  const hoje = new Date();
  const selecionada = new Date(dataSelecionada + "T00:00");

  let horariosValidos = [...horariosDisponiveis];

  if (selecionada.toDateString() === hoje.toDateString()) {
    const horaAtual = hoje.getHours();
    const minutoAtual = hoje.getMinutes();

    horariosValidos = horariosValidos.filter(horario => {
      const [h, m] = horario.split(":").map(Number);
      return h > horaAtual || (h === horaAtual && m > minutoAtual);
    });
  }

  if (horariosValidos.length === 0) {
    horaSelect.innerHTML = "<option>Nenhum horário disponível</option>";
    return;
  }

  horaSelect.innerHTML = "<option value=''>Selecione um horário</option>";
  horariosValidos.forEach(horario => {
    const option = document.createElement("option");
    option.value = horario;
    option.textContent = horario;
    horaSelect.appendChild(option);
  });
}

function confirmarConsulta(event) {
  event.preventDefault();

  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  if (!data || !hora) {
    alert("Selecione data e horário válidos!");
    return;
  }

  localStorage.setItem("consultaData", data);
  localStorage.setItem("consultaHora", hora);
  window.location.href = "confirmacao.html"; 
}