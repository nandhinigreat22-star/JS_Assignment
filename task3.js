/*
  Task 3: Asynchronous JavaScript – Theory
  
  1. What is a Callback?
     - A callback is a function passed as an argument to another function, which is executed after an asynchronous task finishes.
     - Used to handle results once background operations complete.

  2. What is a Promise and its 3 States?
     - A Promise is an object that represents the eventual completion (or failure) of an async operation.
     - Three States:
       1. Pending: Initial state; the operation is still running.
       2. Fulfilled: The operation completed successfully.
       3. Rejected: The operation failed with an error.

  3. How is Async/Await used to handle Promises?
     - 'async' keyword makes a function return a Promise.
     - 'await' keyword pauses code execution until the Promise is resolved or rejected, making async code look clean and readable.

  4. Advantage of Async/Await over Traditional Callbacks:
     - It avoids "Callback Hell" (deep nesting) and allows easy error handling using standard try...catch blocks.
*/

// Simple Example of Async/Await
function getMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task completed");
        }, 1000);
    });
}

async function showMessage() {
    const message = await getMessage();
    console.log(message);
}

showMessage();
