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

// Récupérer la valeur depuis le localStorage
const storedDateTimeValue = localStorage.getItem('dateTimeValue');

// Afficher la valeur dans la page HTML
document.getElementById('displayDateTimeValue').textContent = storedDateTimeValue;




// ***************************************************************************


// document.getElementById('displayDate').textContent = dateObject.toLocaleDateString();
// document.getElementById('displayDay').textContent = dateObject.toLocaleString('en', { weekday: 'long' });

// // document.getElementById('displayEntry').textContent = dateObject.toLocaleTimeString();
// // document.getElementById('displayWeek').textContent = dateObject.getWeek();
// // document.getElementById('displayMealEnd').textContent = dateObject.toLocaleTimeString();
// // document.getElementById('displayExit').textContent = dateObject.toLocaleTimeString();


// function saveOption() {
//     var selectedOption = document.getElementById('mySelect').value;
//     localStorage.setItem('selectedOption', selectedOption);

//     if (selectedOption === 'option1') {
//         document.getElementById('displayEntry').textContent = dateObject.toLocaleTimeString();

//     } else if (selectedOption === 'option2') {
//         document.getElementById('displayWeek').textContent = dateObject.getWeek();

//     } else if (selectedOption === 'option3') {
//         document.getElementById('displayMealEnd').textContent = dateObject.toLocaleTimeString();
//     } else {
//         document.getElementById('displayExit').textContent = dateObject.toLocaleTimeString();

//     }
// }



