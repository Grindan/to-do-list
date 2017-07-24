class Session {
    constructor() {
        this.prevCommands = [];
        this.nextCommands = [];
    }

    addTask(task) {
        let command = new AddTaskCommand(task);
        this.prevCommands.push(command);
        this.nextCommands = [];
        command.execute();
    }

    deleteTask(task) {
        let command = new DeleteTaskCommand(task);
        this.prevCommands.push(command);
        this.nextCommands = [];
        command.execute();
    };

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
}

