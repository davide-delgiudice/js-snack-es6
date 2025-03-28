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

console.log(teams);

const generateRandomPoints = () => {
    return Math.floor(Math.random() * 30) + 1;
}

const generateRandomFoul = () => {
    return Math.floor(Math.random() * 50) + 1;
}

