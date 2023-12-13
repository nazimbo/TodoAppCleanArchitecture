"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
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
exports.Task = Task;
