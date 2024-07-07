const funFacts = [
    "Honey never spoils.",
    "A day on Venus is longer than a year on Venus.",
    "Bananas are berries, but strawberries are not.",
    "There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "A group of flamingos is called a 'flamboyance'."
];

const likedFacts = JSON.parse(localStorage.getItem('likedFacts')) || [];

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const fact = funFacts[randomIndex];
    document.getElementById('fun-fact').textContent = fact;
    document.getElementById('like-count').textContent = getLikeCount(fact);
}

function likeFact() {
    const fact = document.getElementById('fun-fact').textContent;
    if (!likedFacts.includes(fact)) {
        likedFacts.push(fact);
        localStorage.setItem('likedFacts', JSON.stringify(likedFacts));
    }
    document.getElementById('like-count').textContent = getLikeCount(fact);
}

function getLikeCount(fact) {
    return likedFacts.filter(f => f === fact).length;
}

document.addEventListener('DOMContentLoaded', () => {
    displayRandomFact();
    document.getElementById('like-button').addEventListener('click', likeFact);
});
