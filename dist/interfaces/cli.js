"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/interfaces/cli.ts
const Task_1 = require("../domain/Task");
const InMemoryTaskRepository_1 = require("../adapters/InMemoryTaskRepository");
const taskRepository = new InMemoryTaskRepository_1.InMemoryTaskRepository();
const createTaskUseCase = {
    execute: (task) => taskRepository.create(task),
};
const getTasksUseCase = {
    execute: () => taskRepository.getTasks(),
};
// Exemple d'utilisation
const newTask = new Task_1.Task("1", "Nouvelle tâche", "Description", new Date(), false);
createTaskUseCase.execute(newTask);
console.log("Tâches:", getTasksUseCase.execute());
