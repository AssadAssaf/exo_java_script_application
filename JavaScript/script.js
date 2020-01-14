
let tab = ["Bob","Julien","Roger"];
let i;
function afficherListe(){
    document.getElementById("liste").innerHTML ="";
    for (i=0; i<tab.length; i++){
    document.getElementById("liste").innerHTML +=`<li>${tab[i]}</li>`;
    }
}
afficherListe();
afficherListe();

function ajoutPers(){
    tab.push('Bobi');
    tab.push("C'est qui Bobi?", "C'est quoi ca?");

    
}
ajoutPers();


afficherListe();

function ajouterElement(){
    let userInput = document.getElementById('texte').value;
    tab.push(userInput);
    afficherListe()
}

function supprimerElement(){
    tab.pop();
    afficherListe()
}

var player = document.querySelector('#audioPlayer');