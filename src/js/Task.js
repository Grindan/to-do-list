class Task {
    constructor(name, isDone = 0) {
        this.name = name;
        this.isDone = isDone;
    }

    toString () {
        return 'Task: ' + this.name + ', isDone: ' + this.isDone;
    }
}
