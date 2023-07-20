exports.getFullDate = async () => {
    const date = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return date.toLocaleDateString('en-BD', options);
}

// const arrayOfObjects = [
//     { "name": "John", "age": 35 },
//     { "name": "Jane", "age": 28 },
//     { "name": "Bob", "age": 47 },
//     { "name": "Alice", "age": 26 },
//     { "name": "Tom", "age": 39 },
//     { "name": "Mike", "age": 42 },
//     { "name": "David", "age": 32 },
//     { "name": "Emily", "age": 23 },
//     { "name": "Kate", "age": 31 },
//     { "name": "Mark", "age": 45 },
//     { "name": "Sara", "age": 29 },
//     { "name": "Peter", "age": 38 },
//     { "name": "Mary", "age": 33 },
//     { "name": "Lisa", "age": 25 },
//     { "name": "Olivia", "age": 22 },
//     { "name": "Lucas", "age": 37 },
//     { "name": "Alexander", "age": 43 },

// ]
exports.getRandomObjectsFromArray = async (arr, count) => {
    const shuffledArray = arr.slice(); // Make a copy of the original array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray.slice(0, count);
}


