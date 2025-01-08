import React from 'react'

const MathAndString = () => {
    console.log("min", Math.min(1, 2, 2));
    console.log("max", Math.max(1, 2, 2));
    console.log("pow", Math.pow(4, 2));
    // Returns the greatest integer less than or equal to its numeric argument.
    // @param x — A numeric expression.  
    console.log("pow", Math.floor(4.8));
    // Returns a supplied numeric expression rounded to the nearest integer.
    //@param x — The value to be rounded to the nearest integer.
    console.log("pow", Math.round(4.8));
    //Returns the smallest integer greater than or equal to its numeric argument.
    //@param x — A numeric expression.
    console.log("pow", Math.ceil(4.8));
    console.log("pow", Math.floor(4.4));
    console.log("pow", Math.round(4.4));
    console.log("pow", Math.ceil(4.4));
    console.log("abs", Math.abs(-5.6), Math.abs(5.6));
    console.log("random", Math.random() * 10);
    const num = Number("12a");
    console.log("12.45", Number("12.45"), num.toFixed(1));
    console.log("str", String(123));
    console.log("str", String(123).slice(0, 2));
    console.log("str", String(123).substring(0, 2));
    console.log("str", String(123456789).substr(4, 4));

    const obj = { "a": 1, "b": 2, "c": 3 };

    console.log("obj", obj.hasOwnProperty('a'), Object.entries(obj), Object.keys(obj), Object.values(obj));
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    const returnedTarget = Object.assign(target, source);

    console.log(returnedTarget, "returnedTarget");

    const inventory = [
        { name: "asparagus", type: "vegetables", quantity: 5 },
        { name: "bananas", type: "fruit", quantity: 0 },
        { name: "goat", type: "meat", quantity: 23 },
        { name: "cherries", type: "fruit", quantity: 5 },
        { name: "fish", type: "meat", quantity: 22 },
    ];
    const result = Object.groupBy(inventory, ({ type }) => type);
    console.log("result", result);


    return (
        <div>MathAndString</div>
    )
}

export default MathAndString