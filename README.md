## Second Weekend Challenge at Prime: Calculator

In this weekend assignment, we were tasked with building a calculator application using jQuery, Node and Express. The client side would take in 2 numerical values in input fields values and the type of mathematical operation (selected using a button on the DOM). Each of the numerical values and type of mathematical operation would be bundled up in an object and then sent to the server via a POST. The logic for the calculator was housed on the server. I built out logic to compute the numbers in addition, subraction, mulitplication, or division. Once the calcutation was complete, the result was sent back to the client and displayed on the DOM.

This assignment was our second weekend challenge. At this point in the program, we had worked with jQuery just a bit, and had just learned server-side Javascript with Express and Node.

---
## Technologies Used:

- jQuery
- Node.js
- Express
- HTML 5
- CSS 3
---

## Local Installation

### Requirements

[Git](https://git-scm.com/), which allows the files to be brought down to the computer;
[npm](https://nodejs.org/en/download/), which comes included with Node;

### Instructions

There are three quick steps described individually below:

- **First**, create a git repository on your computer.
    - Create a new folder for the project.
    - Open a terminal window on Mac by right clicking on the folder and selecting "New Terminal at Folder".
    - In the terminal window, type `git init`, and hit enter.
    - Next, type `git remote add origin ` and add the web address for the Github repository the code is located on, with `.git` added to the end of that web address without a space in between, and hit enter.
    - Finally, type `git pull origin master`, and watch the as the files are brought down to the computer.

- **Second**, install the dependencies.
    - In order for the program to run, some other programs that it needs in order to work have to be installed. This is done in one step by typing `npm install` in the same terminal window and hitting enter. Again, the terminal window will show the files being brought into the project folder.
    - Watch the terminal display as it makes changes, and then type `^c` to turn it off and allow the server to be started.

- **Third**, start the server.
    - In the same terminal window, type `npm start`, and the terminal will display "Listening on port 5000".
    - Type "localhost:5000" in the address bar of your browser, and now the application is running, without a need for internet access! However, this means the application also cannot make changes to the real database, so local installation is only useful for testing.
    - When done using the application locally, type `^c` again to turn the server off.

---
## Acknowledgments

- The instructors and staff at [Prime Digital Academy](https://primeacademy.io/)

---
