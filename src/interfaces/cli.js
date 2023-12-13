"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/interfaces/cli.ts
var Task_1 = require("../domain/Task");
var InMemoryTaskRepository_1 = require("../adapters/InMemoryTaskRepository");
var taskRepository = new InMemoryTaskRepository_1.InMemoryTaskRepository();
var createTaskUseCase = {
    execute: function (task) { return taskRepository.create(task); },
};
var getTasksUseCase = {
    execute: function () { return taskRepository.getTasks(); },
};
// Exemple d'utilisation
var newTask = new Task_1.Task("1", "Nouvelle tâche", "Description", new Date(), false);
createTaskUseCase.execute(newTask);
console.log("Tâches:", getTasksUseCase.execute());
