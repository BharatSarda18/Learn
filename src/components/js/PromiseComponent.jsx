import React from 'react'

const PromiseComponent = () => {

    const myPromise = new Promise((resolve, reject) => {
        const success = true; // Simulate success or failure
        if (success) {
            resolve("Operation successful!"); // Fulfill the promise
        } else {
            reject("Operation failed!"); // Reject the promise
        }
    });

    // Using the promise
    myPromise
        .then((result) => {
            console.log(result); // Logs: "Operation successful!"
        })
        .catch((error) => {
            console.error(error); // Logs: "Operation failed!"
        })
        .finally(() => {
            console.log("Promise settled!"); // Always runs
        });


    //   Promise Methods

    // 1) Promise.resolve(value)
    Promise.resolve("Resolved!").then((value) => console.log(value));

    // 2) Promise.reject(reason)
    Promise.reject("Rejected!").catch((reason) => console.error(reason));

    // 3) Promise.all(promises)
    Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
        .then((values) => console.log(values)) // Logs: [1, 2, 3]
        .catch((error) => console.error(error));

    // 4) Promise.allSettled(promises)
    Promise.allSettled([Promise.resolve(1), Promise.reject("Error!")])
        .then((results) => console.log(results));

    // 5) Promise.race(promises)
    Promise.race([
        new Promise((resolve) => setTimeout(() => resolve("Fast"), 100)),
        new Promise((resolve) => setTimeout(() => resolve("Slow"), 200)),
    ]).then((value) => console.log("race", value)); // Logs: "Fast"

    // 6) Promise.any(promises)
    Promise.any([Promise.reject("Error!"), Promise.resolve("Success!")])
        .then((value) => console.log("any",value)) // Logs: "Success!"
        .catch((error) => console.error("any",error));


    return (
        <div>PromiseComponent</div>
    )
}

export default PromiseComponent