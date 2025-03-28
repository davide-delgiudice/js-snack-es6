// creo un array di oggetti contenente una serie di biciclette da corsa, con parametri il loro nome e relativo peso
const bikes = [
    {
        name: "Fiido C21",
        weight: 17.5
    },
    {
        name: "Triban",
        weight: 10.8
    },
    {
        name: "Van Rysel",
        weight: 9
    },
    {
        name: "Aeroad",
        weight: 14
    },
    {
        name: "Ultimate",
        weight: 13.4
    }
]

// stampo in console l'array
console.log(bikes);

// dichiaro due variabili, la prima contenente il peso del primo oggetto/bici dell'array, e una variabile vuota di appoggio
let lightBike = bikes[0].weight;
let lighter;

// creo un ciclo for per esaminare tutti gli oggetti dell'array
for(let i=0; i<bikes.length; i++){

    // creo un if per paragonare il peso delle bici/oggetto
    if(lightBike > bikes[i].weight){
        // assegno la bici più leggera alla variabile di appoggio
        lighter = bikes[i];
        // sostituisco il peso dell'oggetto presente nella variabile lightbike con quello più leggero trovato, per il successivo controllo
        lightBike = bikes[i].weight;
    }

}

//stampo la bici/oggetto più leggera in console
console.log(lighter);