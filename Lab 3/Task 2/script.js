const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

const createTodoItem = (text) => {
  const listItem = document.createElement('li');

  const leftContainer = document.createElement('div');
  leftContainer.className = 'todo-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const todoText = document.createElement('span');
  todoText.textContent = text;
  todoText.className = 'todo-text';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-button';

  checkbox.addEventListener('change', () => {
    todoText.classList.toggle('done');
  });

  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });

  leftContainer.appendChild(checkbox);
  leftContainer.appendChild(todoText);

  listItem.appendChild(leftContainer);
  listItem.appendChild(deleteButton);

  return listItem;
};

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const todoValue = todoInput.value.trim();
  if (!todoValue) {
    return;
  }

  const todoItem = createTodoItem(todoValue);
  todoList.appendChild(todoItem);

  todoInput.value = '';
  todoInput.focus();
});
