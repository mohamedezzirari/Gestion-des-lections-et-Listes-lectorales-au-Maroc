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
    if (choix === "1") {
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
    else if (choix === "2") {

        for (let i = 0; i < candidats.length; i++) {

            let max = i;

            for (let j = i + 1; j < candidats.length; j++) {

                if (candidats[j].electeurs.length > candidats[max].electeurs.length) {
                    max = j;
                }
            }

            let temp = candidats[i];
            candidats[i] = candidats[max];
            candidats[max] = temp;
        }

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
    else if (choix === "3") {

        const party = prompt("Enter political party: ");

        for (let i = 0; i < candidats.length; i++) {

            if (candidats[i].partiPolitique === party) {

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
}

function vote() {

    const cinElecteur = prompt("Enter your CIN: ");
    for (let i = 0; i < candidats.length; i++) {

        for (let j = 0; j < candidats[i].electeurs.length; j++) {

            if (candidats[i].electeurs[j] === cinElecteur) {

                console.log(
                    "You have already voted and you cannot modify your vote or vote again."
                );

                return;
            }
        }
    }
    const cinCandidat = prompt("Enter candidate CIN: ");
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cinCandidat) {
            candidats[i].electeurs.push(cinElecteur);

            console.log("Vote registered successfully!");
            return;
        }
    }

    console.log("Candidate not found.");
}


function ModifyCandidat() { 
const cin = prompt("Enter candidate CIN to modify: ");

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].cin === cin) {

            console.log("\nCandidate found.");

            const nom = prompt(
                `Enter new last name (${candidats[i].nom}): `
            );

            const prenom = prompt(
                `Enter new first name (${candidats[i].prenom}): `
            );

            const partiPolitique = prompt(
                `Enter new political party (${candidats[i].partiPolitique}): `
            );

            const age = Number(
                prompt(`Enter new age (${candidats[i].age}): `)
            );

            if (nom !== "") {
                candidats[i].nom = nom;
            }

            if (prenom !== "") {
                candidats[i].prenom = prenom;
            }

            if (partiPolitique !== "") {
                candidats[i].partiPolitique = partiPolitique;
            }

            if (!isNaN(age) && age > 0) {
                candidats[i].age = age;
            }

            console.log("Candidate modified successfully!");
            return;
        }
    }

    console.log("Candidate not found.");
}

function DeleteCandidat() { }
// Delete a candidate

function rechercherCandidat() { }
//  Search for a candidate

function afficherStatistiques() { }
// Display election statistics

function menu() { }
// Main menu

















