var overlay = document.querySelector(".overlay");
var submit = document.getElementById("submit");
var list = document.getElementById("list");
var duration = document.getElementById("duration");

submit.addEventListener("click", function () {
    var div = document.createElement("div");
    div.setAttribute("class", "boxcontainer text");
    div.innerHTML = `<p>
        <span class="list-text">${list.value}</span> : 
        <span class="duration-text">${duration.value}</span> 
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    </p>`;
    overlay.append(div);
});

// Use event delegation to handle dynamically created buttons
overlay.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        remove(e.target);
    } else if (e.target.classList.contains("edit")) {
        edit(e.target);
    }
});

function remove(button) {
    var parentDiv = button.closest(".boxcontainer");
    if (parentDiv) {
        parentDiv.remove();
    }
}

function edit(button) {
    var parentDiv = button.closest(".boxcontainer");
    if (parentDiv) {
        // Select the text spans for list and duration
        var listText = parentDiv.querySelector(".list-text");
        var durationText = parentDiv.querySelector(".duration-text");

        // Prompt the user to enter new values
        var newListValue = prompt("Edit List Item:", listText.textContent);
        var newDurationValue = prompt("Edit Duration:", durationText.textContent);

        // Update the text content if values are provided
        if (newListValue !== null) {
            listText.textContent = newListValue;
        }
        if (newDurationValue !== null) {
            durationText.textContent = newDurationValue;
        }
    }
}
