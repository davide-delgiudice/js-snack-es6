// creo un array di oggetti contenente una serie di squadre di calcio, con parametri il loro nome, punti fatti e falli subiti
// punti e falli saranno di base 0
const teams = [
    {
        name: "Juventus",
        points: 0,
        foul: 0
    },
    {
        name: "Milan",
        points: 0,
        foul: 0
    },
    {
        name: "Inter",
        points: 0,
        foul: 0
    },
    {
        name: "Sampdoria",
        points: 0,
        foul: 0
    },
    {
        name: "Lazio",
        points: 0,
        foul: 0
    },
    {
        name: "Atalanta",
        points: 0,
        foul: 0
    }
]

// creo due funzioni per generare numeri randomici
const generateRandomPoints = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const generateRandomFoul = () => {
    return Math.floor(Math.random() * 30) + 1;
}

// tramite un ciclo for assegno i valori randomici ad ogni parametro points e foul dei team
for (let i=0; i<teams.length; i++){
    teams[i].points = generateRandomPoints();
    teams[i].foul = generateRandomFoul();
}

// stampo l'array teams
console.log(teams);

// creo un array vuoto che dovrà contenere solo i nomi e i falli subiti dei team
const detailsTeams = [];

// tramite un ciclo for assegno i valori name e foul ad una variabile di appoggio per poi inserirli nel nuovo array vuoto
for (let i=0; i<teams.length; i++){
    
    // creo la variabile di appoggio con all'interno i valori
    let nameAndFoul = {
        name: teams[i].name,
        foul: teams[i].foul,
    };

    // pusho i valori nell'array
    detailsTeams.push(nameAndFoul);
}

// stampo il nuovo array
console.log(detailsTeams);