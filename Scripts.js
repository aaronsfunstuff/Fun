const funFacts = [
    { fact: "Honey never spoils.", category: "Food" },
    { fact: "A day on Venus is longer than a year on Venus.", category: "Space" },
    { fact: "Bananas are berries, but strawberries are not.", category: "Food" },
    { fact: "There are more stars in the universe than grains of sand on all the Earth's beaches.", category: "Space" },
    { fact: "A group of flamingos is called a 'flamboyance'.", category: "Animals" }
];

const likedFacts = JSON.parse(localStorage.getItem('likedFacts')) || [];

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const fact = funFacts[randomIndex].fact;
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

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function shareFact() {
    const fact = document.getElementById('fun-fact').textContent;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(fact)}`;
    window.open(url, '_blank');
}

function searchFacts() {
    const query = document.getElementById('search').value.toLowerCase();
    const results = funFacts.filter(f => f.fact.toLowerCase().includes(query));
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = results.map(r => `<p>${r.fact}</p>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    displayRandomFact();
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('share-button').addEventListener('click', shareFact);
});