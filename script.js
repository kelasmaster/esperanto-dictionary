// script.js

// Sample dictionary data
const dictionary = {
    "hello": "saluton",
    "world": "mondo",
    "book": "libro",
    "cat": "kato",
    "dog": "hundo",
    "house": "domo",
    "car": "aŭto",
    "tree": "arbo",
    "water": "akvo",
    "fire": "fajro",
    "saluton": "hello",
    "mondo": "world",
    "libro": "book",
    "kato": "cat",
    "hundo": "dog",
    "domo": "house",
    "aŭto": "car",
    "arbo": "tree",
    "akvo": "water",
    "fajro": "fire"
};

// Function to handle the search
document.getElementById('search-btn').addEventListener('click', function() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    if (dictionary[input]) {
        resultDiv.textContent = `Translation: ${dictionary[input]}`;
    } else {
        resultDiv.textContent = "Word not found.";
    }
});
