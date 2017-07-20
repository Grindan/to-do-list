// var Task = function(name, isDone = false) {
//     this.name = name;
//     this.isDone = isDone;
// }

// function initLocalStorage() {
//     let tasks = [];
//     tasks.push(new Task('task 1'));
//     tasks.push(new Task('task 2'));
//     tasks.push(new Task('task 3'));
//     tasks.push(new Task('task 4'));
//     localStorage['tasks'] = JSON.stringify(tasks);
//     return tasks;
// }



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

let btnAddTask = document.getElementById('btnAddTask');

btnAddTask.addEventListener('click', function() {
    let taskName = document.getElementById('inputTaskName').value.trim();
    // if (!arr.includes(taskName)) (add it)
    console.log(taskName);
});

const ACTIVE_TASKS = 0;
const COMPLETED_TASKS = 1;

let currentState = ACTIVE_TASKS;

let tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];

let activeTasksDiv = document.getElementById('activeTasks')

function addNewTask() {

}

function addNewTaskElement() {
    let newCheckBox = document.createElement();
}