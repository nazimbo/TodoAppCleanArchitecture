import { Task } from "../domain/Task";
import { InMemoryTaskRepository } from "../adapters/InMemoryTaskRepository";
console.log("Backend connected");
const taskRepository = new InMemoryTaskRepository();
const createTaskUseCase = {
    execute: (task) => taskRepository.create(task),
};
const getTasksUseCase = {
    execute: () => taskRepository.getTasks(),
};
const newTask = new Task("1", "Nouvelle tâche", "Description", new Date(), false);
createTaskUseCase.execute(newTask);
console.log("Tâches:", getTasksUseCase.execute());
const taskToUpdate = taskRepository.getTasks()[0];
taskToUpdate.title = "Tâche mise à jour";
const updateTaskUseCase = {
    execute: (task) => taskRepository.update(task),
};
updateTaskUseCase.execute(taskToUpdate);
console.log("Tâches:", getTasksUseCase.execute());
//# sourceMappingURL=cli.js.map