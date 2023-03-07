'use strict';

const member = [
    {
        nome: 'Pippo Bona',
        ruolo: 'Manager',
        foto: 'img/img1.png'
    },
    {
        nome: 'Pippo Bona',
        ruolo: 'Manager',
        foto: 'img/img1.png'
    },
    {
        nome: 'Pippo Bona',
        ruolo: 'Manager',
        foto: 'img/img1.png'
    },
    {
        nome: 'Pippo Bona',
        ruolo: 'Manager',
        foto: 'img/img1.png'
    },
    {
        nome: 'Pippo Bona',
        ruolo: 'Manager',
        foto: 'img/img1.png'
    },
    {
        nome: 'Pippo Bona',
        ruolo: 'Manager',
        foto: 'img/img1.png'
    }
]

for (let i = 0; i < member.length; i++) {
    const oggetto = member[i];
    console.log('ECCO LE INFORMAZIONI DI: ' + oggetto.nome);
    for (let key in oggetto) {
        console.log(oggetto[key]);
    }
    console.log('');
}