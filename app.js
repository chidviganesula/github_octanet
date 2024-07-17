document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskName = document.getElementById('task-name').value;
        const deadline = document.getElementById('deadline').value;
        const priority = document.getElementById('priority').value;
        const label = document.getElementById('label').value;

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.classList.add(`priority-${priority.toLowerCase()}`);

        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');

        const taskNameSpan = document.createElement('span');
        taskNameSpan.textContent = `Task: ${taskName}`;
        taskDetails.appendChild(taskNameSpan);

        const deadlineSpan = document.createElement('span');
        deadlineSpan.textContent = `Deadline: ${deadline}`;
        taskDetails.appendChild(deadlineSpan);

        const prioritySpan = document.createElement('span');
        prioritySpan.textContent = `Priority: ${priority}`;
        taskDetails.appendChild(prioritySpan);

        const labelSpan = document.createElement('span');
        labelSpan.textContent = `Label: ${label}`;
        taskDetails.appendChild(labelSpan);

        taskItem.appendChild(taskDetails);

        taskList.appendChild(taskItem);

        taskForm.reset();
    });
});
