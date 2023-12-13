// src/adapters/InMemoryTaskRepository.ts
import { Task } from "../domain/Task";
import { TaskRepository } from "./TaskRepository";

export class InMemoryTaskRepository implements TaskRepository {
  private tasks: Task[] = [];

  create(task: Task): Task {
    this.tasks.push(task);
    return task;
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  update(task: Task): Task | null {
    const existingTask = this.tasks.find((t) => t.id === task.id);
    if (existingTask) {
      Object.assign(existingTask, task);
      return existingTask;
    }
    return null;
  }

  delete(id: string): boolean {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      return true;
    }
    return false;
  }
}
