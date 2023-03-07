'use strict';
// FUNCTION 

// funzione che crea un elemento e lo appende nel dom 
function myCreateElement(classe, htmlElement, doveInserire) {
    const element = document.createElement(htmlElement);
    element.classList.add(classe);
    doveInserire.append(element);
    return element;
}

// funzione che crea la struttura delle card 
function myCreateCard(componente,chiave,contenuto){
   if (chiave === 'nome'){
    const element = myCreateElement('nomeCard', 'div', componente);
    element.innerHTML = (contenuto)
   } else if (chiave === 'ruolo'){
    const element = myCreateElement('ruoloCard', 'div', componente)
    element.innerHTML = (contenuto)
   } else if(chiave === 'urlFoto'){
    const element = myCreateElement('fotoCard', 'div', componente)
    element.innerHTML = (contenuto)
   }
}

// Funzione che crea il dom
function createDOM(arrayName) {
    for (let i = 0; i < arrayName.length; i++) {
        const oggetto = arrayName[i];

        // richiamo la funzione per creare le card 
        const element = myCreateElement('card', 'div', container);
        console.log(element)

        // esegue un azione ad ogni informazione di ogni oggetto
        console.log('ECCO LE INFORMAZIONI DI: ' + oggetto.nome);
        for (let key in oggetto) {
            console.log(key + ':  ' + oggetto[key]);
            myCreateCard(element,key, oggetto[key])
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