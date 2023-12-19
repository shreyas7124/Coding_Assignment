const readline = require('readline');

// Create interface for reading input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function bubbleSortDescending(arr) {
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Ask user to input an array
rl.question('Enter numbers separated by space: ', (input) => {
    // Convert the user input string into an array of numbers
    let arr = input.split(' ').map(Number);

    // Sort the array in descending order using custom sorting function
    let sortedArray = bubbleSortDescending(arr);

    console.log('Sorted array in descending order:', sortedArray); // Output the sorted array
    rl.close(); // Close the readline interface
});
