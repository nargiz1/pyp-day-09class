const addBtn = document.getElementById("add-button");
const saveBtn = document.getElementById("save-button");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
let deleteBtns = document.querySelectorAll(".delete-button");

addBtn.disabled = true;
// saveBtn.disabled = true;
let current;

input.addEventListener("keyup", function () {
  if (input.value !== "") {
    addBtn.disabled = false;
  }
  // else if(input.value != current.firstElementChild.innerText){
  //     saveBtn.disabled = false;
  //     console.log(current);

  // }
});

addBtn.addEventListener("click", function () {
  let todo = document.createElement("li");
  let todoContent = document.createElement("h2");
  todoContent.innerText = input.value;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.classList.add("delete-button");
  let updateBtn = document.createElement("button");
  updateBtn.classList.add("update-button");
  updateBtn.innerText = "Updt";
  todo.append(todoContent);
  todo.append(updateBtn);
  todo.append(deleteBtn);
  todoList.append(todo);
  input.value = "";
  addBtn.disabled = true;

  deleteBtn.addEventListener("click", function () {
    input.value = "";
    saveBtn.style.display = "none";
    addBtn.style.display = "inline-block";
    addBtn.disabled = true;
    current = undefined;
    todoList.removeChild(todo);
  });
  updateBtn.addEventListener("click", function () {
    if(current === undefined){
        input.value = this.previousElementSibling.innerText;
        addBtn.style.display = "none";
        saveBtn.style.display = "inline-block";
        current = this.parentElement;
        this.style.display = "none";
        let cancelBtn = document.createElement("button");
        cancelBtn.innerText = "Cancel";
        this.parentElement.append(cancelBtn);
        cancelBtn.addEventListener("click", function () {
          input.value = "";
          saveBtn.style.display = "none";
          addBtn.style.display = "inline-block";
          addBtn.disabled = true;
          current = undefined;
          cancelBtn.style.display = "none";
          updateBtn.style.display = "inline-block";
        });
    }else{
        alert("Edit this first");
    }
  });
});
saveBtn.addEventListener("click", function () {
    if(input.value !== ''){

        current.firstElementChild.innerText = input.value;
        input.value = "";
        saveBtn.style.display = "none";
        addBtn.style.display = "inline-block";
        addBtn.disabled = true;
        current.firstElementChild.nextElementSibling.style.display = "inline-block";
        current.lastElementChild.style.display = "none";
        current = undefined;
    }else{
        alert("cannot be empty")
    }
});
