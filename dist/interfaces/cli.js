"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/interfaces/cli.ts
const Task_1 = require("../domain/Task");
const InMemoryTaskRepository_1 = require("../adapters/InMemoryTaskRepository");
console.log("Backend connected");
const taskRepository = new InMemoryTaskRepository_1.InMemoryTaskRepository();
const createTaskUseCase = {
    execute: (task) => taskRepository.create(task),
};
const getTasksUseCase = {
    execute: () => taskRepository.getTasks(),
};
// Exemple d'utilisation
// Création d'une tâche
const newTask = new Task_1.Task("1", "Nouvelle tâche", "Description", new Date(), false);
createTaskUseCase.execute(newTask);
console.log("Tâches:", getTasksUseCase.execute());
// Mise à jour d'une tâche
const taskToUpdate = taskRepository.getTasks()[0];
taskToUpdate.title = "Tâche mise à jour";
const updateTaskUseCase = {
    execute: (task) => taskRepository.update(task),
};
updateTaskUseCase.execute(taskToUpdate);
console.log("Tâches:", getTasksUseCase.execute());
