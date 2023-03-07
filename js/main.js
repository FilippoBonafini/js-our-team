'use strict';

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

for (let i = 0; i < member.length; i++) {
    const oggetto = member[i];
    console.log('ECCO LE INFORMAZIONI DI: ' + oggetto.nome);
    for (let key in oggetto) {
        console.log(key+':  '+oggetto[key]);
    }
    console.log('');
}