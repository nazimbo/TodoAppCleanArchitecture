// src/interfaces/cli.ts
import { Task } from "../domain/Task";
import { InMemoryTaskRepository } from "../adapters/InMemoryTaskRepository";
console.log("Backend connected");
var taskRepository = new InMemoryTaskRepository();
var createTaskUseCase = {
    execute: function (task) { return taskRepository.create(task); },
};
var getTasksUseCase = {
    execute: function () { return taskRepository.getTasks(); },
};
// Exemple d'utilisation
// Création d'une tâche
var newTask = new Task("1", "Nouvelle tâche", "Description", new Date(), false);
createTaskUseCase.execute(newTask);
console.log("Tâches:", getTasksUseCase.execute());
// Mise à jour d'une tâche
var taskToUpdate = taskRepository.getTasks()[0];
//@ts-ignore
taskToUpdate.title = "Tâche mise à jour";
var updateTaskUseCase = {
    execute: function (task) { return taskRepository.update(task); },
};
//@ts-ignore
updateTaskUseCase.execute(taskToUpdate);
console.log("Tâches:", getTasksUseCase.execute());
