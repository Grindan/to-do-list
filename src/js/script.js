var session = new Session();


$('#btnAdditionModalClose').click(() => $('#video')[0].pause());

$('#btnAddTask')[0].addEventListener('click', function() {
    var taskName = $('#inputTaskName')[0].value.trim().replace( /\s\s+/g, ' ').toLocaleLowerCase();
    taskName = (taskName.length) ? (taskName[0].toUpperCase() + taskName.slice(1)) : taskName;
    if (!taskName) {
        $('#taskNameForm').addClass('has-error');
    } else {
        var newTask = new Task(taskName);
        session.addTask(newTask);

        $('#taskNameForm').removeClass('has-error');
        $('#inputTaskName')[0].value = '';
        $('#addTaskModal').modal('toggle');
    }
});

function addNewTaskElement(task) {
    var taskName = task.name;
    var taskID = taskName.split(' ').join('-');
    var newLi = document.createElement('li');
    newLi.id = taskID;
    newLi.classList.add('list-group-item');
    newLi.classList.add('animated');
    newLi.classList.add('fadeInUp');
    newLi.innerHTML = '<input type="checkbox">'
                    + '<p class="taskName">' + taskName + '</p>'
                    + '<span class="glyphicon glyphicon-remove deleteTask"></span>';
    var ul = document.getElementById('activeTasksList');
    ul.appendChild(newLi);
}

function addCompletedTaskElement(task) {
    var taskName = task.name;
    var taskID = taskName.split(' ').join('-');
    var newLi = document.createElement('li');
    newLi.id = taskID;
    newLi.classList.add('list-group-item');
    newLi.classList.add('animated');
    newLi.classList.add('fadeInUp');
    newLi.innerHTML = '<input type="checkbox" checked>'
                    + '<p class="taskName">' + taskName + '</p>'
                    + '<span class="glyphicon glyphicon-remove deleteTask"></span>';
    var ul = document.getElementById('completedTasksList');
    ul.appendChild(newLi);
}

function deleteNode(node, animationType) {
    node.classList.add('animated');
    node.classList.add(animationType);
    setTimeout(() => node.remove(), 500);
}


const CHECK_ELEMENT = 'INPUT';
const DELETE_ELEMENT = 'SPAN';

$('#activeTasksList').click(function(event) {
    event.stopPropagation();
    if (event.target.nodeName == CHECK_ELEMENT) {
        var taskName = event.target.parentElement.id.split('-').join(' ');
        var task = new Task(taskName, 0);
        session.checkTask(task);
    } else if (event.target.nodeName == DELETE_ELEMENT) {
        var newTask = new Task(event.target.parentElement.id.split('-').join(' '));
        session.deleteTask(newTask);
    }
});


$('#completedTasksList').click(function(event) {
    event.stopPropagation();
    if (event.target.nodeName == CHECK_ELEMENT) {
        var taskName = event.target.parentElement.id.split('-').join(' ');
        var task = new Task(taskName, 1);
        session.uncheckTask(task);
    } else if (event.target.nodeName == DELETE_ELEMENT) {
        var taskName = event.target.parentElement.id.split('-').join(' ');
        var task = new Task(taskName, 1);
        session.deleteTask(task);
    }
});


$(document).keydown(function(e){
    if (e.which === 90 && e.ctrlKey){
        session.undo();
    } else if(e.which === 89 && e.ctrlKey){
        session.do();
    }
});

