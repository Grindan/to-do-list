class Task {
    constructor(name, description = '', isDone = false) {
        this.name = name;
        this.description = description;
        this.isDone = isDone;
    }

    toString () {
        return 'Task: ' + this.name + ', isDone: ' + this.isDone;
    }
}