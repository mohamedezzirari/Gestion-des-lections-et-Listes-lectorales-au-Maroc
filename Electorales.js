const prompt = require("prompt-sync")();
const candidats = [{
    cin: "AB123456",
    nom: "Boushaba",
    prenom: "Soufiane",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: []
}];


function addCandidat() {

    const cin = prompt("Enter candidate CIN: ");
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            console.log("This CIN already exists!");
            return;
        }
    }

    const nom = prompt("Enter candidate last name: ");
    const prenom = prompt("Enter candidate first name: ");
    const partiPolitique = prompt("Enter political party: ");
    const age = Number(prompt("Enter candidate age: "));
    const newCandidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: []
    };
    candidats.push(newCandidat)

    console.log(candidats)

}
function DisplayCandidats() {

    console.log("1. Display all candidates");
    console.log("2. Sort by votes");
    console.log("3. Filter by party");

    const choix = prompt("Choose an option: ");
    if (choix === "1"){
        for (let i = 0; i < candidats.length; i++) {
            console.log(
                "CIN:", candidats[i].cin,
                "Name:", candidats[i].nom,
                "First name:", candidats[i].prenom,
                "Party:", candidats[i].partiPolitique,
                "Age:", candidats[i].age,
                "Votes:", candidats[i].electeurs.length
            );
        }
        }

}


function voter() { }
// Vote

function ModifyCandidat() { }
// Modify a candidate

function DeleteCandidat() { }
// Delete a candidate

function rechercherCandidat() { }
//  Search for a candidate

function afficherStatistiques() { }
// Display election statistics

function menu() { }
// Main menu

















let totatl = candidats.filter(candidat => candidat.age)