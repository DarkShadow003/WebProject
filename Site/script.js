function searchFunction(event) {
    event.preventDefault(); // Prevent form submission

    const searchTerm = document.getElementById("searchBar").value.toLowerCase();
    const containers = document.querySelectorAll(".container");
    
    containers.forEach(container => {
        const text = container.getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (text.includes(searchTerm)) {
            container.style.display = "block";
            container.classList.add("highlight");
        } else {
            container.style.display = "none";
            container.classList.remove("highlight");
        }
    });
}
function displayDate() {
    var currentDate = new Date();
    var dateString = currentDate.toLocaleDateString(); // Format the date
    document.getElementById("dateDisplay").innerHTML = dateString; // Update the HTML
}

// Call the function when the page loads
window.onload = function() {
    displayDate(); // Display the date when the page loads
};
