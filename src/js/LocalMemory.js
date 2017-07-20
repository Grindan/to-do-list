class LocalMemory {
    constructor() {
        this.activeTasks = localStorage['activeTasks'] ? JSON.parse(localStorage['activeTasks']) : [];
        this.completedTasks = localStorage['completedTasks'] ? JSON.parse(localStorage['completedTasks']) : [];
    }

    save() {
        localStorage['activeTasks'] = JSON.stringify(this.activeTasks);
        localStorage['completedTasks'] = JSON.stringify(this.completedTasks);
    }

}