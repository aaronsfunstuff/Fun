const funFacts = [
    "Honey never spoils.",
    "A day on Venus is longer than a year on Venus.",
    "Bananas are berries, but strawberries are not.",
    "There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "A group of flamingos is called a 'flamboyance'."
];

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    document.getElementById('fun-fact').textContent = funFacts[randomIndex];
}
