const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');

tasksAdd.addEventListener('click', (event) => {
    event.preventDefault();
    if ((taskInput.value)) {
        // создаем html элемент
        const task = document.createElement('div');
        task.className = 'task';
        document.getElementById('tasks__list').appendChild(task);

        const taskTitle = document.createElement('div');
        taskTitle.className = 'task__title';
        taskTitle.textContent = taskInput.value;
        task.appendChild(taskTitle);

        const taskRemove = document.createElement('a');
        taskRemove.className = 'task__remove';
        taskRemove.href = '#';
        taskRemove.innerHTML = '&times;';
        task.appendChild(taskRemove);

        // чиаем поле ввода
        taskInput.value = '';

        // добавляем обработчик для удаления
        taskRemove.addEventListener('click', () => {
            task.remove();
        });
    } 
});

