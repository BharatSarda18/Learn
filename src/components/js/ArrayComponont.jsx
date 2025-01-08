import React from 'react'

const ArrayComponont = () => {

    const inventory = [
        { name: "asparagus", type: "vegetables", quantity: 5 },
        { name: "bananas", type: "fruit", quantity: 0 },
        { name: "goat", type: "meat", quantity: 23 },
        { name: "cherries", type: "fruit", quantity: 5 },
        { name: "fish", type: "meat", quantity: 22 },
    ];
    console.log(Array.from('foo'));
    // Expected output: Array ["f", "o", "o"]

    console.log(Array.from([1, 2, 3], (x) => x + x));
    // Expected output: Array [2, 4, 6]

    const asyncIterable = (async function* () {
        for (let i = 0; i < 5; i++) {
            await new Promise((resolve) => setTimeout(resolve, 10 * i));
            yield i;
        }
    })();

    Array.fromAsync(asyncIterable).then((array) => console.log(array));
    // [0, 1, 2, 3, 4]

    const array1 = [1, 2, 3, 4];

    const initialValue = 0;
    const sumWithInitial = array1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );

    console.log({ sumWithInitial });

    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
    // Expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
    // Expected output: Array ["camel", "duck"]

    const items = [
        { name: "Edward", value: 21 },
        { name: "Sharpe", value: 37 },
        { name: "And", value: 45 },
        { name: "The", value: -12 },
        { name: "Zeros", value: 37 },
        { name: "Magnetic", value: 13 },

    ];

    // sort by value
    const returnItems = [...items].sort((a, b) => a.value - b.value);
    console.log("itemsfirst", returnItems);

    // sort by name
    const returnItemsabc = [...items].sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
    console.log("itemsfirstsecond", returnItemsabc);

    const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    // Inserts at index 1
    console.log(months);
    // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

    months.splice(4, 1, 'May');
    // Replaces 1 element at index 4
    console.log(months);
    // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

    return (
        <div>Array</div>
    )
}

export default ArrayComponont