
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

// Hier werden die Variablen deklariert.
let eingabe1;
let eingabe2;
let zahl1;
let zahl2;
let summe;

// In diesem Abschnitt sind die Eingabeprompts.
eingabe1 = prompt("Bitte geben Sie eine ganze Zahl ein:");
eingabe2 = prompt("Bitte geben Sie eine weitere ganze Zahl ein:");

// Hier findet die Umwandlung + Rechnung statt
zahl1 = parseInt(eingabe1);
zahl2 = parseInt(eingabe2);
summe = zahl1+zahl2;

/* Extra logs zur Kontrolle & Problemlösung.
console.log(typeof zahl1);
console.log("Erster Wert:",zahl1);
console.log(typeof zahl2);
console.log("Zweiter Wert:",zahl2);
console.log ("Der Datentyp von Summe ist:",typeof summe);
*/

// Ausgabe der Summe in einem if-else-Befehl um die Ausgabe "Die Summe der Zahlen ist: NaN" zu vermeiden.
if (isNaN(summe)) {
    console.log("Eine oder beide Ihrer Eingaben war keine Zahl! Bitte versuchen Sie es erneut.")
} else {
    console.log("Die Summe der Zahlen ist:", summe)
}