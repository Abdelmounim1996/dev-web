document.addEventListener("DOMContentLoaded", function () {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() < 9 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
    let day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
    let hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    let minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    let dateString = `${year}-${month}-${day}T${hours}:${minutes}`;
    document.getElementById('event-time').value = dateString;
});

// Récupérer la valeur de l'input
const dateTimeValue = document.getElementById('event-time').value;
// Stocker la valeur dans le localStorage pour qu'elle soit accessible depuis un autre fichier
localStorage.setItem('dateTimeValue', dateTimeValue);

function redirectToAnotherPage(selectedValue) {
    window.location.href = "Target.html?selectedValue=" + selectedValue;
}
