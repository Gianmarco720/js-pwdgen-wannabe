// Chiedi il nome all'utente
const userName = prompt('Come ti chiami?');

// Chiedi il cognome all'utente
const userSurname = prompt('Qual è il tuo cognome?');

// Chiedi il colore preferito all'utente
const userColor = prompt('Qual è il tuo colore preferito?');

// Anno corrente
const currentYear = '22';

// Calcolo password dell'utente
const userPwd = userName + userSurname + userColor + currentYear;

// Stampa il risultato su pagina
document.getElementById("password_text").innerHTML = 'Ecco la tua insicurissima password:';
document.getElementById("password").innerHTML = userPwd;

// Output console
console.log("Il tuo nome è:" + " " + userName);
console.log(`Il tuo cognome è: ${userSurname}`);
console.log(`Il tuo colore preferito è: ${userColor}`);
console.log(`La tua password è: ${userPwd}`);