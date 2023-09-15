// script.js
document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            const span = document.createElement('span');
            const deleteButton = document.createElement('button');

            span.textContent = todoText;
            deleteButton.textContent = 'Delete';

            li.appendChild(span);
            li.appendChild(deleteButton);
            todoList.appendChild(li);

            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const li = event.target.parentNode;
            todoList.removeChild(li);
        } else if (event.target.tagName === 'SPAN') {
            event.target.classList.toggle('completed');
        }
    });
});