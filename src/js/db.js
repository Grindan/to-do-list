var db = openDatabase('toDoList', '1.0', 'tasks database', 2 * 1024 * 1024);
    // db.transaction(tx => tx.executeSql('Drop TABLE IF EXISTS TASKS'));
    // localStorage.clear();

if (!localStorage.wasInited) {
    db.transaction(tx => tx.executeSql('CREATE TABLE IF NOT EXISTS TASKS (name TEXT, isDone INTEGER)'));
    addTaskToDB(new Task('Initial task (just delete it)'));
    localStorage.wasInited = 1;
}

db.transaction(tx => tx.executeSql('SELECT * FROM TASKS WHERE isDone=?;', [0],
    (tx, results) => {
        for(var i = 0; i < results.rows.length; i++) {
            addNewTaskElement(new Task(results.rows.item(i)['name'], 0));
        }
    }
));

db.transaction(tx => tx.executeSql('SELECT * FROM TASKS WHERE isDone=?', [1],
    (tx, results) => {
        for(var i = 0; i < results.rows.length; i++) {
            addCompletedTaskElement(new Task(results.rows.item(i)['name'], 1));
        }
    }
));

function addTaskToDB(task) {
    db.transaction(tx => tx.executeSql('INSERT INTO TASKS (name, isDone) VALUES (?, ?)', [task.name, task.isDone]));
}

function deleteTaskFromDB(task) {
    db.transaction(tx => tx.executeSql('DELETE FROM TASKS WHERE name = ?', [task.name]));
}

function executeTaskInDB(task) {
    db.transaction(tx => tx.executeSql('UPDATE TASKS SET isDone=1 WHERE name=?', [task.name]));
}

function undoTaskInDB(task) {
    db.transaction(tx => tx.executeSql('UPDATE TASKS SET isDone=0 WHERE name=?', [task.name]));
}
