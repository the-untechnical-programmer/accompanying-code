01 - Clone this project (accompanying code) onto your computer.<br/>
02 - Navigate in a terminal to '/04-routes/'.<br/>
03 - Enter 'npm install' and press enter to install dependencies.</br>
04 - To start the server type 'node index' and press enter.<br/>
05 - Go to your browser and enter 'http://localhost:3000/' to see the result of the home route.<br/>
06 - Book titles can be found in /database/books-database.js.<br/>
07 - Go to your browser and enter 'http://localhost:3000/books/nameofbook' to see the result of searching for a book.<br/>

Notes:<br/>
<br/>

This project presumes that you have Node and NPM already installed.</br>

Book titles are in snake case (all lowercase, words seperated by hyphens) to make the url look as simple as possible.<br/>
If they had spaces, urls would look like this: 'http://localhost:3000/books/how%20to%20code', which is less readable.<br/>
