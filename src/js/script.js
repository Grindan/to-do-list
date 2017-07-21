// var arr = [];
// arr.push(new Task("eat"));
// arr.push(new Task("sleep"));
// arr.push(new Task("code"));

// var activeTasks = document.getElementById("activeTasks");
// let timeInterval = 1;
// arr.forEach(function(task) {
//     setTimeout(function addTask() {
//                     var tmp = document.createElement('p');
//                     addClasses(tmp, 'animated fadeInUp')
//                     tmp.innerText = task.name;
//                     activeTasks.appendChild(tmp);
//     }, 200 * timeInterval++);
// });


// let tasks = window.localStorage['tasks']
//             ? JSON.parse(window.localStorage['tasks'])
//             : initLocalStorage();



$('#btnAddTask')[0].addEventListener('click', function() {
    let taskName = $('#inputTaskName')[0].value.trim();
    if (!taskName) {
        $('#taskNameForm').addClass('has-error');
    } else {
        $('#taskNameForm').removeClass('has-error');
        $('#inputTaskName')[0].value = '';
        $('#addTaskModal').modal('toggle');
        addNewTaskElement(taskName);
    }
});

const ACTIVE_TASKS = 0;
const COMPLETED_TASKS = 1;
let currentState = ACTIVE_TASKS;

let tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];

let activeTasksDiv = document.getElementById('activeTasks')

function addNewTask() {

}

function addNewTaskElement(taskName) {
    let taskID = taskName.split(' ').join('-');
    let newLi = document.createElement('li');
    newLi.id = taskID;
    newLi.classList.add('list-group-item');
    newLi.innerHTML = '<input type="checkbox">'
                    + '<p class="taskName">' + taskName + '</p>'
                    + '<div id="btnDeleteTask">'
                    + '<span class="glyphicon glyphicon-remove"></span>'
                    + '</div>';
    let ul = document.getElementById('activeTasksList');
    ul.appendChild(newLi);
}

const CHECK_ELEMENT = 'INPUT';
const DELETE_ELEMENT = 'SPAN';

$('#activeTasksList').click(function(event) {
    event.stopPropagation();
    if (event.target.nodeName == CHECK_ELEMENT) {
        // let nodeToDelete = event.target.parentElement;
        // nodeToDelete.classList.add('animated');
        // nodeToDelete.classList.add('fadeOutRight');
        // setTimeout(() => {
        //     // let currentElement = nodeToDelete;
        //     // let i = 10;
        //     // while (currentElement && i-- >= 0) {
        //     //     console.log("i = " + i);
        //     //     currentElement.classList.add('animated');
        //     //     currentElement.classList.add('fadeInUp');
        //     //     currentElement = currentElement.nextSibling;
        //     // }
        //     nodeToDelete.remove();
        // }, 500);
        
        deleteNode(event.target.parentElement, 'fadeOutRight');
    } else if (event.target.nodeName == DELETE_ELEMENT) {
        deleteNode(event.target.parentElement, 'fadeOutLeft');
    }
    console.log(event.target.parentElement.id);
});


$('#completedTasksList').click(function(event) {
    event.stopPropagation();
    if (event.target.nodeName == CHECK_ELEMENT) {
        deleteNode(event.target.parentElement, 'fadeOutRight');
    } else if (event.target.nodeName == DELETE_ELEMENT) {
        deleteNode(event.target.parentElement, 'fadeOutLeft');
    }
    console.log(event.target.parentElement.id);
});


function deleteNode(node, animationType) {
    node.classList.add('animated');
    node.classList.add(animationType);
    setTimeout(() => node.remove(), 500);
}
