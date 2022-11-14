// Start with an array of strings. 
// Print only the words that include 
// the letter combination "ing".

var words = ["Playing", "Feeling", "Working", "Noodling"]

for (var i = 0; i < words.length; i++) {
    if (words[i].includes("ing")) {
        console.log(words[i])
    }
}

// use a for statement to set arrays
// use a method "includes to add my "ing"
// console the words with log