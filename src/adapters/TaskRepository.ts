// src/adapters/TaskRepository.ts
import { Task } from "../domain/Task";

export interface TaskRepository {
  create(task: Task): Task;
  getTasks(): Task[];
  update(task: Task): Task | null;
  delete(id: string): boolean;
}
