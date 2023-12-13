// src/interfaces/cli.ts
import { Task } from "../domain/Task";
import { CreateTask } from "../usecases/CreateTask";
import { GetTasks } from "../usecases/GetTasks";
import { InMemoryTaskRepository } from "../adapters/InMemoryTaskRepository";

const taskRepository = new InMemoryTaskRepository();
const createTaskUseCase: CreateTask = {
  execute: (task: Task) => taskRepository.create(task),
};
const getTasksUseCase: GetTasks = {
  execute: () => taskRepository.getTasks(),
};

// Exemple d'utilisation
const newTask = new Task("1", "Nouvelle tâche", "Description", new Date(), false);
createTaskUseCase.execute(newTask);
console.log("Tâches:", getTasksUseCase.execute());
