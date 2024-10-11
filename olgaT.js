const numbers = [1, 2, 3];

const result = numbers.map((element, index, array) => {
    return `${element} + ${element}, Original Array: ${array}`;
});

console.log(result);