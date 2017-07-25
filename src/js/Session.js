class Session {
    constructor() {
        this.prevCommands = [];
        this.nextCommands = [];
    }

    addTask(task) {
        let command = new AddTaskCommand(task);
        this.addNewCommand(command);
    }

    deleteTask(task) {
        let command = new DeleteTaskCommand(task);
        this.addNewCommand(command);
    };

    checkTask(task) {
        let command = new CheckTaskCommand(task);
        this.addNewCommand(command);
    }

    uncheckTask(task) {
        let command = new UncheckTaskCommand(task);
        this.addNewCommand(command);
    }

    undo() {
        if (!this.prevCommands.length) { return; }
        let command = this.prevCommands.pop();
        this.nextCommands.push(command);
        command.undo();
    }

    do() {
        if (!this.nextCommands.length) { return; }
        let command = this.nextCommands.pop();
        this.prevCommands.push(command);
        command.execute();
    }

    addNewCommand(command) {
        this.prevCommands.push(command);
        this.nextCommands = [];
        command.execute();
    }
}

