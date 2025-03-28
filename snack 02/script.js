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

const generateRandomPoints = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const generateRandomFoul = () => {
    return Math.floor(Math.random() * 30) + 1;
}

for (let i=0; i<teams.length; i++){
    teams[i].points = generateRandomPoints();
    teams[i].foul = generateRandomFoul();
}

console.log(teams);


let detailTeams = [];

for (let i=0; i<teams.length; i++){
    
}

console.log(detailTeams);