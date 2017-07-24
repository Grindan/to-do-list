class AddTaskCommand extends Command {
    constructor(task) {
        super();
        this.task = task;
    }

    execute() {
        addNewTaskElement(this.task);
        addTaskToDB(this.task);
    }

    undo() {
        var node = document.getElementById(this.task.name.split(' ').join('-'));
        deleteNode(node, 'fadeOutLeft');
        deleteTaskFromDB(this.task);
    }
}