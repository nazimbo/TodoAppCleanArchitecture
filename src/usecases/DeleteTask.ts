// src/usecases/DeleteTask.ts
export interface DeleteTask {
  execute(id: string): boolean;
}
