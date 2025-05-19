document. getElementById("loginForm"). addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    window.location.href = "especialidades.html"
});