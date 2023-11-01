let tasks = [];

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'text';
    input.value = task;
    input.disabled = true;
    li.appendChild(input);

    const editButton = document.createElement('button');
    editButton.appendChild(document.createTextNode('Edit'));
    editButton.onclick = function () {
      editTask(input, index);
    };
    li.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.onclick = function () {
      deleteTask(index);
    };
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();
  if (task !== '' && !tasks.includes(task)) {
    tasks.push(task);
    displayTasks();
    taskInput.value = '';
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function editTask(input, index) {
  input.disabled = false;
  input.focus();
  input.addEventListener('focusout', function () {
    input.disabled = true;
    tasks[index] = input.value;
  });
}

displayTasks();
