class CheckTaskCommand extends Command {
    constructor(task) {
        super();
        this.task = task;
    }

    execute() {
        taskList.push(this.task);
        addNewTaskElement(this.task.name);
    }

    undo() {
        taskList.splice(taskList.indexOf(this.task.name), 1);
    }
}