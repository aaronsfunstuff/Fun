
const funFacts = [
    { fact: "Honey never spoils.", category: "Food" },
    { fact: "A day on Venus is longer than a year on Venus.", category: "Space" },
    { fact: "Bananas are berries, but strawberries are not.", category: "Food" },
    { fact: "There are more stars in the universe than grains of sand on all the Earth's beaches.", category: "Space" },
    { fact: "A group of flamingos is called a 'flamboyance'.", category: "Animals" },
    { fact: "Octopuses have three hearts.", category: "Animals" },
    { fact: "Butterflies taste with their feet.", category: "Animals" },
    { fact: "The Eiffel Tower can be 15 cm taller during the summer.", category: "Buildings" },
    { fact: "Humans share 50% of their DNA with bananas.", category: "Science" },
    { fact: "There are more fake flamingos in the world than real ones.", category: "Animals" },
    { fact: "A bolt of lightning contains enough energy to toast 100,000 slices of bread.", category: "Science" },
    { fact: "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza.", category: "History" },
    { fact: "There is a species of jellyfish that is immortal.", category: "Animals" },
    { fact: "Sharks have been around longer than trees.", category: "Animals" },
    { fact: "Wombat poop is cube-shaped.", category: "Animals" },
    { fact: "The shortest war in history lasted 38 minutes.", category: "History" },
    { fact: "The Guinness World Record for the longest hiccuping spree is 68 years.", category: "Records" },
    { fact: "Hot water freezes faster than cold water.", category: "Science" },
    { fact: "A single strand of spaghetti is called a 'spaghetto'.", category: "Food" },
    { fact: "There are more stars in the universe than grains of sand on Earth.", category: "Space" },
    { fact: "A day on Venus is longer than a year on Venus.", category: "Space" },
    { fact: "Bananas are berries, but strawberries are not.", category: "Food" },
    { fact: "Humans and giraffes have the same number of neck vertebrae.", category: "Science" },
    { fact: "There is a town in Norway called Hell.", category: "Geography" },
    { fact: "The shortest commercial flight in the world lasts only 57 seconds.", category: "Records" },
    { fact: "A group of crows is called a 'murder'.", category: "Animals" },
    { fact: "The oldest known living tree is over 5,000 years old.", category: "Nature" },
    { fact: "The inventor of the Pringles can is buried in one.", category: "Trivia" },
    { fact: "A group of porcupines is called a 'prickle'.", category: "Animals" },
    { fact: "There is a planet made entirely of diamonds.", category: "Space" },
    { fact: "Honey is the only food that never spoils.", category: "Food" },
    { fact: "The longest recorded flight of a chicken is 13 seconds.", category: "Animals" },
    { fact: "The inventor of the frisbee was turned into a frisbee after he died.", category: "Trivia" },
    { fact: "A group of owls is called a 'parliament'.", category: "Animals" },
    { fact: "The first oranges weren’t orange.", category: "Food" },
    { fact: "There are more stars in the universe than grains of sand on Earth.", category: "Space" },
    { fact: "A crocodile cannot stick its tongue out.", category: "Animals" },
    { fact: "A group of rhinos is called a 'crash'.", category: "Animals" },
    { fact: "A shrimp's heart is in its head.", category: "Animals" },
    { fact: "The heart of a blue whale is the size of a car.", category: "Animals" },
    { fact: "Humans have more than five senses.", category: "Science" },
    { fact: "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.", category: "History" },
    { fact: "The tallest waterfall in the world is Angel Falls in Venezuela, standing at 3,212 feet (979 meters).", category: "Nature" },
    { fact: "A group of jellyfish is called a 'smack'.", category: "Animals" },
    { fact: "There are more chickens on Earth than people.", category: "Animals" },
    { fact: "Sloths can hold their breath longer than dolphins can.", category: "Animals" },
    { fact: "It’s impossible to hum while holding your nose.", category: "Trivia" },
    { fact: "The longest wedding veil was the same length as 63.5 football fields.", category: "Records" }
];

const likedFacts = JSON.parse(localStorage.getItem('likedFacts')) || [];

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const fact = funFacts[randomIndex].fact;
    document.getElementById('fun-fact').textContent = fact;
    document.getElementById('like-count').textContent = getLikeCount(fact);
    document.getElementById('fun-fact').classList.remove('fade-in');
    void document.getElementById('fun-fact').offsetWidth; // trigger reflow
    document.getElementById('fun-fact').classList.add('fade-in');
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
    resultsContainer.innerHTML = results.map