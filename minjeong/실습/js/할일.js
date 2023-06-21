const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (e) => {
  //   submit자동으로 실행되는거 막음
  e.preventDefault();
  const task = taskInput.value;
  if (task) {
    addTask(task);
    taskInput.value = "";
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    deleteTask(e.target.parentElement);
  }
});
