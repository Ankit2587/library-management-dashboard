async function loadStatistics(){

const response =
await fetch(
"http://localhost:5000/api/books/stats"
);

const data =
await response.json();

document.getElementById(
"totalBooks"
).textContent =
data.totalBooks;

document.getElementById(
"availableBooks"
).textContent =
data.availableBooks;

document.getElementById(
"unavailableBooks"
).textContent =
data.unavailableBooks;

document.getElementById(
"categories"
).textContent =
data.categories;

}

loadStatistics();