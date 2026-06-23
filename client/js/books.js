const API = "http://localhost:5000/api/books";

let books = [];

/* =========================
   LOADER
========================= */

function showLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "flex";
    }
}

function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
}

/* =========================
   ELEMENTS
========================= */

const modal = document.getElementById("bookModal");
const addBookBtn = document.getElementById("addBookBtn");
const closeModal = document.getElementById("closeModal");
const saveBook = document.getElementById("saveBook");
const searchInput = document.getElementById("searchInput");

/* =========================
   MODAL
========================= */

if (addBookBtn) {
    addBookBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });
}

if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

/* =========================
   LOAD BOOKS
========================= */

async function loadBooks() {

    showLoader();

    try {

        const response = await fetch(API);

        const result = await response.json();

        books = result.data || [];

        displayBooks(books);

    } catch (error) {

        console.log(error);

        Swal.fire(
            "Error",
            "Failed to load books",
            "error"
        );

    } finally {

        hideLoader();

    }

}

/* =========================
   DISPLAY BOOKS
========================= */

function displayBooks(bookList) {

    const tableBody =
        document.getElementById("bookTableBody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (bookList.length === 0) {

        tableBody.innerHTML = `
        <tr>
            <td colspan="7">
                No Books Found
            </td>
        </tr>
        `;

        return;
    }

    bookList.forEach(book => {

        tableBody.innerHTML += `

        <tr>

            <td>${book.id}</td>

            <td>${book.title}</td>

            <td>${book.author}</td>

            <td>${book.category}</td>

            <td>${book.publishedYear}</td>

            <td>
                ${book.available
                    ? '<span class="available">Available</span>'
                    : '<span class="unavailable">Unavailable</span>'
                }
            </td>

            <td>

                <button
                    class="delete-btn"
                    onclick="removeBook(${book.id})">

                    Delete

                </button>

            </td>

        </tr>

        `;
    });

}

/* =========================
   ADD BOOK
========================= */

if (saveBook) {

    saveBook.addEventListener(
        "click",
        async () => {

            const title =
                document.getElementById("title").value;

            const author =
                document.getElementById("author").value;

            const category =
                document.getElementById("category").value;

            const publishedYear =
                document.getElementById("publishedYear").value;

            const available =
                document.getElementById("available").value === "true";

            if (
                !title ||
                !author ||
                !category ||
                !publishedYear
            ) {

                Swal.fire(
                    "Error",
                    "Please fill all fields",
                    "error"
                );

                return;
            }

            showLoader();

            try {

                await fetch(API, {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        title,
                        author,
                        category,
                        publishedYear,
                        available
                    })

                });

                Swal.fire(
                    "Success",
                    "Book Added Successfully",
                    "success"
                );

                modal.style.display = "none";

                loadBooks();

            } catch (error) {

                console.log(error);

            } finally {

                hideLoader();

            }

        }
    );

}

/* =========================
   DELETE BOOK
========================= */

async function removeBook(id) {

    const result = await Swal.fire({

        title: "Delete Book?",

        text: "This action cannot be undone",

        icon: "warning",

        showCancelButton: true,

        confirmButtonColor: "#ef4444"

    });

    if (!result.isConfirmed) return;

    showLoader();

    try {

        await fetch(
            `${API}/${id}`,
            {
                method: "DELETE"
            }
        );

        Swal.fire(
            "Deleted!",
            "Book removed successfully",
            "success"
        );

        loadBooks();

    } catch (error) {

        console.log(error);

    } finally {

        hideLoader();

    }

}

window.removeBook = removeBook;

/* =========================
   SEARCH
========================= */

if (searchInput) {

    searchInput.addEventListener(
        "keyup",
        function () {

            const keyword =
                this.value.toLowerCase();

            const filtered =
                books.filter(book =>

                    book.title
                        .toLowerCase()
                        .includes(keyword)

                    ||

                    book.author
                        .toLowerCase()
                        .includes(keyword)

                    ||

                    book.category
                        .toLowerCase()
                        .includes(keyword)

                );

            displayBooks(filtered);

        }
    );

}

/* =========================
   START
========================= */

loadBooks();