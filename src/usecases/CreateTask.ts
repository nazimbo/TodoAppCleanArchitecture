// src/usecases/CreateTask.ts
import { Task } from "../domain/Task";

export interface CreateTask {
  execute(task: Task): Task;
}
