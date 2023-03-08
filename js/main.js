'use strict';
// FUNCTION 

// funzione che crea un elemento e lo appende nel dom 
function myCreateElement(classe, htmlElement, doveInserire) {
    const element = document.createElement(htmlElement);
    element.classList.add(classe);
    doveInserire.append(element);
    return element;
}

// Funzione che crea un bottone delete (serve font awesome!!!)
function deleteCreate(doveInserirlo, arrayName) {
    const element = document.createElement('a');
    element.classList.add('fa-solid');
    element.classList.add('fa-trash');
    element.classList.add('buttonDelete');
    doveInserirlo.append(element);
    element.addEventListener('click', function () {
        const elementInner = doveInserirlo.querySelector('div').innerHTML
        // eliminamo l'oggetto dall'array 
        for (let i = 0; i < arrayName.length; i++) {
            const oggetto = arrayName[i];
            // Eliminamo dall'array lo stiano
            for (let key in oggetto) {
                if (oggetto[key] === elementInner) {
                    arrayName.splice(i, 1);
                    console.log(elementInner + " eliminato dall'array e dall'html")
                }
            }
            // eliminiamo l'elemento html
            doveInserirlo.remove();
        }
    })
}

// funzione che crea la struttura delle card 
function myCreateCard(componente, chiave, contenuto) {
    if (chiave === 'urlFoto') {
        // NEL CASO DELLE IMMAGINI IMPOSTO L'SRC
        const element = myCreateElement('fotoCard', 'img', componente);
        element.src = ('img/' + contenuto)
        element.alt = (contenuto)
    } else if (chiave === 'nome') {
        const element = myCreateElement('nomeCard', 'div', componente)
        element.innerHTML = (contenuto)
    } else if (chiave === 'ruolo') {
        const element = myCreateElement('ruoloCard', 'div', componente)
        element.innerHTML = (contenuto)
    }
}

// Funzione che crea il dom
function createDOM(arrayName) {
    myReset()
    for (let i = 0; i < arrayName.length; i++) {
        const oggetto = arrayName[i];

        // richiamo la funzione per creare le card 
        const element = myCreateElement('card', 'div', container);
        deleteCreate(element, member);
        console.log(element)

        // esegue un azione ad ogni informazione di ogni oggetto
        console.log('ECCO LE INFORMAZIONI DI: ' + oggetto.nome);
        for (let key in oggetto) {
            console.log(key + ':  ' + oggetto[key]);
            myCreateCard(element, key, oggetto[key])
        }
        console.log('');
    }
}

// reset dom 
function myReset() {
    container.innerHTML = ('')
}

// MAIN 
const container = document.getElementById('container');

// MIO BONUS PERSONALE 
const hiddenScreen = document.getElementById('hiddenForm');
const userInputName = document.getElementById('nome');
const userInputRole = document.getElementById('ruolo');
const userConfermeButton = document.getElementById('addButton');
const userCloseScreen = document.querySelector('.close')
const userAddButton = document.getElementById('addMember')

let member = [
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


// MIO BONUS PERSONALE
userAddButton.addEventListener('click', function () {
    hiddenScreen.classList.remove('hidden');

    // RESETTO I CAMPI 
    userInputName.value = '';
    userInputRole.value = '';
    userInputName.classList.remove('wrong');
})

userCloseScreen.addEventListener('click', function () {
    hiddenScreen.classList.add('hidden');
})

userConfermeButton.addEventListener('click', function () {
    const newObject = {
        nome: userInputName.value,
        ruolo: userInputRole.value,
        urlFoto: 'default.png'
    }
    const newName = newObject.nome;
    let presenza = false;
    // VALIDAZIONE DATI 
    for (let i = 0; i < member.length; i++) {

        if (newName === member[i].nome || newName === '') {
            presenza = true;
            console.log('utente già presente o assente');
            userInputName.classList.add('wrong');
            i = member.length;
        } else {
            presenza = false;
        }
    }
    if (presenza === false) {
        member.push(newObject);
        hiddenScreen.classList.add('hidden');
        createDOM(member);
    }
})