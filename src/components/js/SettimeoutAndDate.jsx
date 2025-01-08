import React, { useState } from 'react'

const Settimeout = () => {

    const [date, setDate] = useState(new Date());
    console.log(date.valueOf(), "epochdate");
    
    let myVar1 = setTimeout(() => {
        console.log("settimeout")
    }, 2000);

    let myVar2 = setInterval(() => {
        const id = console.log("setInterval");
    }, 2000);
    console.log(myVar2, myVar1, "let myVar =");
    setTimeout(() => {
        clearInterval(myVar2)
    }, 10000);

    setTimeout(() => {
        clearTimeout(myVar1)
    }, 1000);


    return (
        <>
            <div>{date.getDate()}</div>
            <div>{date.getDay()}</div>
            <div>{date.getFullYear()}</div>
            <div>{date.getHours()}</div>
            <div>{date.getMilliseconds()}</div>
            <div>{date.getMinutes()}</div>
            <div>{date.getMonth()}</div>
            <div>{date.getSeconds()}</div>
            <div>{date.getTime()}</div>
        </>
    )
}

export default Settimeout