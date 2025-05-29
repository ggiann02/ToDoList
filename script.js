
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function addTask() {
    // trim removes whitespace from beginning and end
    const task = inputBox.value.trim();

    if (!task) {
        alert("Please add a task");
        return;
    }

    const li = document.createElement("li");

    // HTML content of list item
    li.innerHTML = `
        <label>
            <input type="checkbox">
            <span>${task}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>`;

    listContainer.appendChild(li);

    // clears input box before new input
    inputBox.value = "";

    const checkbox = li.querySelector("input");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("span");
    const deleteBtn = li.querySelector(".delete-btn");

    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked)
        updateCounters();
    });

    editBtn.addEventListener("click", function () {
        const update = prompt("Edit task:", taskSpan.textContent);
        if (update !== null) {
          taskSpan.textContent = update;
          li.classList.remove("completed");

          checkbox.checked = false;
          updateCounters();
        }
    });

    deleteBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this task?")) {
          li.remove();
          updateCounters();
        }
      });

    li.classList.remove("completed");
}


function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
}

updateCounters();
