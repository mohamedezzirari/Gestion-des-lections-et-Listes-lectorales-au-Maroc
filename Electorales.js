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
    const candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: []
    }
    console.log("Candidate added successfully!");
    candidat.push(candidat);


}



function DisplayCandidats() { }


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
