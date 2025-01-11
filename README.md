# Unhandled Error in Async Express.js Middleware

This repository demonstrates a common error in Express.js applications where errors thrown within asynchronous middleware are not properly handled, leading to server crashes.  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version.

## Problem

The `bug.js` example shows an asynchronous POST route that processes incoming data.  If the incoming data contains a specific property ('error' in this case), an error is thrown within the `setTimeout` callback. Because this error is not caught, it causes the server to crash.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle errors in asynchronous middleware. It uses a `try...catch` block to wrap the asynchronous operation, ensuring that any errors are caught and handled gracefully, preventing server crashes.  The solution also includes error handling to send an appropriate response to the client.

## How to Reproduce the Bug

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Send a POST request to `http://localhost:3000/data` with a JSON body containing the property `someProperty` set to `'error'`.  For example: `{"someProperty": "error"}`
5. Observe that the server crashes.

## How to See the Solution

1. Run `node bugSolution.js`.
2. Send the same POST request as before.
3. Observe that the server does not crash and responds with an error message (status code 500).