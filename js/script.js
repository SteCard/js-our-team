"use strict";

//ARRAY TEAM
const teamArray = [
    {
      'nome': 'Wayne Barnett',
      'ruolo': 'Founder & CEO',
      'foto': 'wayne-barnett-founder-ceo.jpg',
    },
    {
      'nome': 'Angela Caroll',
      'ruolo': 'Chief Editor',
      'foto': 'angela-caroll-chief-editor.jpg',
    },
    {
      'nome': 'Walter Gordon',
      'ruolo': 'Office Manager',
      'foto': 'walter-gordon-office-manager.jpg',
    },
    {
      'nome': 'Angela Lopez',
      'ruolo': 'Social Media Manager',
      'foto': 'angela-lopez-social-media-manager.jpg',
    },
    {
      'nome': 'Scott Estrada',
      'ruolo': 'Developer',
      'foto': 'scott-estrada-developer.jpg',
    },
    {
      'nome': 'Barbara Ramos',
      'ruolo': 'Graphic Designer',
      'foto': 'barbara-ramos-graphic-designer.jpg',
    },
];

// CICLO FOR PER GLI ELEMENTI ARRAY
for (let i = 0; i < teamArray.length; i++){
    
    // SALVO L'ELEMENTO DELL'ARRAY IN UNA VARIABILE
    let temaInfo = teamArray[i];

    // STAMPO IN CONSOLE UN INDICATORE DI OGNI OGGETTO
    console.log(`Object ${i+1}`);

    // CICLO FOR...IN CHE STAMPA IN CONSOLE I DATI DI OGNI OGGETTO
    for (let key in temaInfo){

        // CHIAVE DELL'OGGETTO
        console.log(`Key: ${key}`);

        // VALORE DELL'OGGETTO
        console.log(`Value: ${temaInfo[key]}`);
    }
}