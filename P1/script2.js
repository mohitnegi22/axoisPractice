document.addEventListener("DOMContentLoaded", async function () {
    const bookForm = document.getElementById("bookForm");
    const bookTableBody = document.getElementById("bookTableBody");

    // Function to load data from books.json
    async function loadDataFromJson() {
        try {
            const response = await axios.get('books.json');
            return response.data;
        } catch (error) {
            console.error('Error loading data:', error);
            return [];
        }
    }

    // Function to add a new row to the table
    async function addRowToTable(bookId, bookName, bookSubject, bookAuthor, price) {
        try {
            // Simulate an asynchronous operation, e.g., making an API request
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay for demonstration

            // Create a new table row
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${bookId}</td>
                <td>${bookName}</td>
                <td>${bookSubject}</td>
                <td>${bookAuthor}</td>
                <td>${price}</td>
                <td>
                    <button class="delete-btn">Delete</button>
                    <button>Edit</button>
                </td>
            `;

            // Append the new row to the table body
            bookTableBody.appendChild(newRow);

            // Clear form inputs
            bookForm.reset();

            console.log("Row added successfully.");
        } catch (error) {
            console.error("Error adding row:", error);
        }
    }

    bookForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        // Get values from form inputs
        const bookId = document.getElementById("bookId").value;
        const bookName = document.getElementById("bookName").value;
        const bookSubject = document.getElementById("bookSubject").value;
        const bookAuthor = document.getElementById("bookAuthor").value;
        const price = document.getElementById("price").value;

        // Add a new row to the table using async/await
        await addRowToTable(bookId, bookName, bookSubject, bookAuthor, price);
    });

    // Load data from books.json and populate the table
    const jsonData = await loadDataFromJson();
    jsonData.forEach((book) => {
        addRowToTable(book.bookId, book.bookName, book.bookSubject, book.bookAuthor, book.price);
    });

    // Add event listeners to delete buttons
    bookTableBody.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-btn")) {
            // Find the parent row and remove it
            const rowToDelete = e.target.closest("tr");
            rowToDelete.remove();
        }
    });
});
