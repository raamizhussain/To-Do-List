const todoList = [
    
];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];

        const html = `
            <div>${todo.name}</div>
            <div>${todo.dueDate}</div>
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            " class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    }

    $(".js-todo-list").html(todoListHTML); // Use .html() instead of .text()
}

function addTodo() {
    const inputElement = $(".js-name-input");
    const name = inputElement.val();

    const dateInputElement = $(".js-due-date-input");
    const dueDate = dateInputElement.val();

    if (name && dueDate) {  // Ensure both fields are filled
        todoList.push({ name, dueDate });

        inputElement.val('');  // Corrected assignment
        dateInputElement.val('');

        renderTodoList();
    } else {
        alert("Please enter both a task and a due date.");
    }
}
