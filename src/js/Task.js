class Task {
    constructor(name, isDone = false) {
        this.name = name;
        this.isDone = isDone;
    }

    toString () {
        return "Task: " + this.name + ", isDone: " + this.isDone;
    }
}