document.addEventListener("DOMContentLoaded", () => {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data
        })
        .catch(error => console.error("Erro ao carregar footer:", error));
})