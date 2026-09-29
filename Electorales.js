const prompt = require("prompt-sync")();
const candidats = [
    {
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Indépendant",
        age: 40,
        electeurs: ["IJ567890", "KL234567"]
    },
    {
        cin: "CD789012",
        nom: "El Amrani",
        prenom: "Yasmine",
        partiPolitique: "PJD",
        age: 45,
        electeurs: ["GH901234"]
    },
    {
        cin: "EF345678",
        nom: "Bennani",
        prenom: "Omar",
        partiPolitique: "RNI",
        age: 52,
        electeurs: []
    },
    {
        cin: "GH901234",
        nom: "Tazi",
        prenom: "Salma",
        partiPolitique: "Istiqlal",
        age: 38,
        electeurs: ["AB123456", "CD789012", "EF345678"]
    },
    {
        cin: "IJ567890",
        nom: "Alaoui",
        prenom: "Karim",
        partiPolitique: "USFP",
        age: 47,
        electeurs: []
    },
    {
        cin: "KL234567",
        nom: "Chraibi",
        prenom: "Nadia",
        partiPolitique: "Indépendant",
        age: 33,
        electeurs: []
    },
    {
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Indépendant",
        age: 40,
        electeurs: []
    }
];


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
    if (age < 18) {
        console.log("Sorry your age is not legel!");

        return
    }
    const newCandidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: []
    };
    candidats.push(newCandidat)

    console.log(newCandidat);


}

function addMultipleCandidats() {
    const n = Number(prompt("How many candidates to add? "));
    for (let i = 0; i < n; i++) {
        console.log(`\n-- Candidate ${i + 1} --`);
        addCandidat();
    }
}

function displayOneCandidat(candidat) {
    console.log(
        "CIN:", candidat.cin,
        "Name:", candidat.nom,
        "First name:", candidat.prenom,
        "Party:", candidat.partiPolitique,
        "Age:", candidat.age,
        "Votes:", candidat.electeurs.length
    );
}

function DisplayCandidats() {

    console.log("1. Display all candidates");
    console.log("2. Sort by votes");
    console.log("3. Filter by party");

    const choix = prompt("Choose an option: ");
    if (choix === "1") {
        for (let i = 0; i < candidats.length; i++) {
            displayOneCandidat(candidats[i]);
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
            displayOneCandidat(candidats[i]);
        }
    }
    else if (choix === "3") {

        const party = prompt("Enter political party: ");

        for (let i = 0; i < candidats.length; i++) {

            if (candidats[i].partiPolitique === party) {
                displayOneCandidat(candidats[i]);
            }
        }
    }
    else {
        console.log("Invalid option!");
    }
}

function voter() {

    const cinElecteur = prompt("Enter your CIN: ");


    for (let i = 0; i < candidats.length; i++) {

        for (let j = 0; j < candidats[i].electeurs.length; j++) {

            if (candidats[i].electeurs[j] === cinElecteur) {

                console.log("You have already voted!.");

                return;
            }
        }
    }

    const cinCandidat = prompt("Enter candidate CIN: ");
    let candidat = null;
    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].cin === cinCandidat) {
            candidat = candidats[i];
            break;
        }
    }

    if (candidat === null) {
        console.log("Candidate not found!");
        return;
    }
    candidat.electeurs.push(cinElecteur);

    console.log("Your vote has been registered successfully!");
}

function ModifyCandidat() {

    const cin = prompt("Enter candidate CIN: ");

    let candidat = null;

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].cin === cin) {
            candidat = candidats[i];
            break;
        }
    }

    if (candidat === null) {
        console.log("Candidate not found!");
        return;
    }

    console.log("\n1. Modify political party");
    console.log("2. Modify age");

    const choix = prompt("Choose an option: ");

    if (choix === "1") {

        const newParty = prompt("Enter new political party: ");

        candidat.partiPolitique = newParty;

        console.log("Political party modified successfully!");
    }

    else if (choix === "2") {

        const newAge = Number(prompt("Enter new age: "));

        candidat.age = newAge;

        console.log("Age modified successfully!");
    }

    else {
        console.log("Invalid option!");
    }
}

function DeleteCandidat() {

    const cin = prompt("Enter candidate CIN to delete: ");

    let index = -1;

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].cin === cin) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        console.log("Candidate not found!");
        return;
    }

    candidats.splice(index, 1);

    console.log("Candidate deleted successfully!");
}

function rechercherCandidat() {

    const cinRecherche = prompt("Enter candidate CIN: ");

    let found = false;

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].cin === cinRecherche) {

            displayOneCandidat(candidats[i]);

            found = true;
        }
    }

    if (!found) {
        console.log("No candidate found.");
    }
}




function afficherStatistiques() {

    console.log("\n========== ELECTION STATISTICS ==========");

    console.log("Total candidates:", candidats.length);

    let totalVotes = 0;

    for (let i = 0; i < candidats.length; i++) {

        totalVotes += candidats[i].electeurs.length;
    }

    console.log("Total votes:", totalVotes);

    console.log("\n========== TOP 3 ==========");

    const classement = [...candidats];

    for (let i = 0; i < classement.length; i++) {

        let max = i;

        for (let j = i + 1; j < classement.length; j++) {

            if (
                classement[j].electeurs.length >
                classement[max].electeurs.length
            ) {
                max = j;
            }
        }

        let temp = classement[i];

        classement[i] = classement[max];

        classement[max] = temp;
    }

    let limite = 3;

    if (classement.length < 3) {
        limite = classement.length;
    }

    for (let i = 0; i < limite; i++) {

        console.log(
            `${i + 1}. ${classement[i].prenom} ${classement[i].nom} - ${classement[i].electeurs.length} votes`
        );
    }

    console.log("\n========== CANDIDATES PER PARTY ==========");

    const partis = [];

    for (let i = 0; i < candidats.length; i++) {

        let partyExists = false;

        for (let j = 0; j < partis.length; j++) {

            if (partis[j].nom === candidats[i].partiPolitique) {

                partis[j].nombre++;

                partyExists = true;

                break;
            }
        }

        if (!partyExists) {

            partis.push({
                nom: candidats[i].partiPolitique,
                nombre: 1
            });
        }
    }

    for (let i = 0; i < partis.length; i++) {

        console.log(
            partis[i].nom + " : " + partis[i].nombre + " candidats"
        );
    }
}

function menu() {

    let EXIT = false;

    while (!EXIT) {

        console.log("\n========== ELECTION MANAGEMENT ==========");
        console.log("1. Ajouter un candidat");
        console.log("2. Ajouter plusieurs candidats");
        console.log("3. Afficher les candidats");
        console.log("4. Voter");
        console.log("5. Modifier un candidat");
        console.log("6. Supprimer un candidat");
        console.log("7. Rechercher un candidat");
        console.log("8. Statistiques");
        console.log("0. Quitter");

        console.log("==========================================");

        const choix = prompt("Choose an option: ");

        if (choix === "1") {
            addCandidat();
        }

        else if (choix === "2") {
            addMultipleCandidats();
        }

        else if (choix === "3") {
            DisplayCandidats();
        }

        else if (choix === "4") {
            voter();
        }

        else if (choix === "5") {
            ModifyCandidat();
        }

        else if (choix === "6") {
            DeleteCandidat();
        }

        else if (choix === "7") {
            rechercherCandidat();
        }

        else if (choix === "8") {
            afficherStatistiques();
        }

        else if (choix === "0") {
            console.log("Exiting...");
            EXIT = true;
        }

        else {
            console.log("Invalid option!");
        }
    }
}

menu();