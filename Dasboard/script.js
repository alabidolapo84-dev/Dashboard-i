function addTask() {
  const input = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    li.onclick = () => li.remove(); // Click to delete
    taskList.appendChild(li);
    input.value = "";
  }
}

let focusHours = 0;
function increaseTime() {
  focusHours++;
  document.getElementById("focus-time").textContent = focusHours;
}
