
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

// Hier werden die Variablen Definiert
let eingabe1;
let eingabe2;
let zahl1;
let zahl2;
let summe;

// Dieser Abschnitt erstellt die Eingabeprompts
eingabe1 = prompt("Bitte eine Zahl eingeben:");
eingabe2 = prompt("Bitte eine weitere Zahl eingeben:");

// Hier findet die Umwandlung + Rechnung statt
zahl1 = parseInt(eingabe1);
zahl2 = parseInt(eingabe2);
summe = zahl1+zahl2;


/* Extra logs zur Kontrolle & Problemlösung
console.log(typeof zahl1);
console.log("Erster Wert:",zahl1);
console.log(typeof zahl2);
console.log("Zweiter Wert:",zahl2);
console.log ("Der Datentyp von Summe ist:",typeof summe);
*/

// Ausgabe der Summe in einem if-else-Befehl
if (isNaN(summe)) {
    console.log("Eine Ihrer Eingaben war keine Zahl bitte versuchen Sie es erneut!")
} else {
    console.log("Die Summe der Zahlen ist:", summe)
}