// src/usecases/UpdateTask.ts
import { Task } from "../domain/Task";

export interface UpdateTask {
  execute(task: Task): Task | null;
}
