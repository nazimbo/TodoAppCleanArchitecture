// src/interfaces/cli.ts
import { Task } from "../domain/Task";
import { CreateTask } from "../usecases/CreateTask";
import { GetTasks } from "../usecases/GetTasks";
import { UpdateTask } from "usecases/UpdateTask";
import { DeleteTask } from "usecases/DeleteTask";
import { InMemoryTaskRepository } from "../adapters/InMemoryTaskRepository";

console.log("Backend connected");

const taskRepository = new InMemoryTaskRepository();
const createTaskUseCase: CreateTask = {
  execute: (task: Task) => taskRepository.create(task),
};
const getTasksUseCase: GetTasks = {
  execute: () => taskRepository.getTasks(),
};

// Exemple d'utilisation
// Création d'une tâche
const newTask = new Task("1", "Nouvelle tâche", "Description", new Date(), false);
createTaskUseCase.execute(newTask);
console.log("Tâches:", getTasksUseCase.execute());

// Mise à jour d'une tâche
const taskToUpdate = taskRepository.getTasks()[0];
taskToUpdate.title = "Tâche mise à jour";
const updateTaskUseCase: UpdateTask = {
  execute: (task: Task) => taskRepository.update(task),
};
updateTaskUseCase.execute(taskToUpdate);
console.log("Tâches:", getTasksUseCase.execute());
