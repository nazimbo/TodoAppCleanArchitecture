// src/domain/Task.ts
var Task = /** @class */ (function () {
    function Task(id, title, description, dueDate, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = completed;
    }
    return Task;
}());
export { Task };
