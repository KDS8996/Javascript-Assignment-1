let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords() {
    for (let i = 0; i < dog_names.length; i++) {
        if (dog_string.includes(dog_names[i])) {
            console.log(`Matched ${dog_names[i]}`);
        } else {
            console.log("No Matches");
        }
    }
}

findWords();


function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) { // Check if index is even
            arr.splice(i, 1, "even index"); // Replace element at even index with "even index"
        }
    }
    return arr;
}

let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
console.log(replaceEvens(arr)); 