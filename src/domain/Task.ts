// src/domain/Task.ts
export class Task {
  constructor(public id: string, public title: string, public description: string, public dueDate: Date, public completed: boolean) {}
}
