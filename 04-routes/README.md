To start the server, navigate in a terminal to the root directory of the project.
Type 'node index' and press enter.
Go to your browser and enter 'http://localhost:3000/' to see the result of the home route
Go to your browser and enter 'http://localhost:3000/books/<nameofbook>' to see the result of searching for a book.
Book titles can be found in /database/books.database.js.

Notes:

Book titles are in snake case (all lowercase, wors seperated by hyphens) to make the url look as simple as possible.
If they had spaces, urls would look like this: 'http://localhost:3000/books/how%20to%20code', which is less readable.