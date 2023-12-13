// src/usecases/GetTasks.ts
import { Task } from "../domain/Task";

export interface GetTasks {
  execute(): Task[];
}
