class UncheckTaskCommand extends Command {
    constructor(task) {
        super();
        this.task = task;
    }

    execute() {
        var node = document.getElementById(this.task.name.split(' ').join('-'));
        deleteNode(node, 'fadeOutRight');
        undoTaskInDB(this.task);
        addNewTaskElement(this.task);
    }

    undo() {
        var node = document.getElementById(this.task.name.split(' ').join('-'));
        deleteNode(node, 'fadeOutRight');
        executeTaskInDB(this.task);
        addCompletedTaskElement(this.task);
    }
}