'use strict';
// FUNCTION 

// funzione che crea una card e la appende nel dom 
function myCreateCard(cardClass, htmlElement, doveInserire) {
    const element = document.createElement(htmlElement);
    element.classList.add(cardClass);
    doveInserire.append(element);
}

// Funzione che scorre un array di oggetti
function createDOM(arrayName) {
    for (let i = 0; i < arrayName.length; i++) {
        const oggetto = arrayName[i];
        // richiamo la funzione per creare le card 
        myCreateCard('card', 'div', container);

        // esegue un azione ad ogni informazione di ogni oggetto
        console.log('ECCO LE INFORMAZIONI DI: ' + oggetto.nome);
        for (let key in oggetto) {
            console.log(key + ':  ' + oggetto[key]);
        }
        console.log('');
    }
}



// MAIN 
const container = document.getElementById('container');

const member = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        urlFoto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        urlFoto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        urlFoto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        urlFoto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        urlFoto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        urlFoto: 'barbara-ramos-graphic-designer.jpg'
    }
]

createDOM(member);