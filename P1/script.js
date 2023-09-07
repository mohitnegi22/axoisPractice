document.addEventListener("DOMContentLoaded", function () {
    const bookForm = document.getElementById("bookForm");
    const bookTableBody = document.getElementById("bookTableBody");

    bookForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get values from form inputs
        const bookId = document.getElementById("bookId").value;
        const bookName = document.getElementById("bookName").value;
        const bookSubject = document.getElementById("bookSubject").value;
        const bookAuthor = document.getElementById("bookAuthor").value;
        const price = document.getElementById("price").value;

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
                <button >Edit</button>
            </td>
        `;

        // Append the new row to the table body
        bookTableBody.appendChild(newRow);

        // Clear form inputs
        bookForm.reset();
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
