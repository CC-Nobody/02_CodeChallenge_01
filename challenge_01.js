
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

// Var. frei definiert
let eingabe1;
let eingabe2;
let zahl1;
let zahl2;
let summe;

// Eingabe Prompts
eingabe1 = prompt("Bitte eine Zahl eingeben:");
eingabe2 = prompt("Bitte eine weitere Zahl eingeben:");

//Rechnung + Umwandlung
zahl1 = parseInt(eingabe1);
zahl2 = parseInt(eingabe2);
summe = zahl1 + zahl2;

//Ausgabe
console.log(typeof zahl1);
console.log("Erster Wert:",zahl1);
console.log(typeof zahl2);
console.log("Zweiter Wert:",zahl2);
console.log ("Die Summer der Zahlen ist: summe");