class DeleteTaskCommand extends Command {
    constructor(task) {
        super();
        this.task = task;
    }

    execute() {
        // taskList.splice(taskList.indexOf(this.task.name), 1);
        var node = document.getElementById(this.task.name.split(' ').join('-'));
        deleteNode(node, 'fadeOutLeft');
        deleteTaskFromDB(this.task);
    }

    undo() {
        // taskList.push(this.task);
        // addNewTaskElement(this.task.name); // change task.name to task
        addNewTaskElement(this.task);
        addTaskToDB(this.task);
    }
}

