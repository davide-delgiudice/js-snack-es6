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

console.log(bikes);

let lightBike = bikes[0].weight;
let lighter;

for(let i=0; i<bikes.length; i++){

    if(lightBike > bikes[i].weight){
        lighter = bikes[i];
        lightBike = bikes[i].weight;
    }

}

console.log(lighter);