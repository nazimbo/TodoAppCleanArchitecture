export class InMemoryTaskRepository {
    constructor() {
        this.tasks = [];
    }
    create(task) {
        this.tasks.push(task);
        return task;
    }
    getTasks() {
        return this.tasks;
    }
    update(task) {
        const existingTask = this.tasks.find((t) => t.id === task.id);
        if (existingTask) {
            Object.assign(existingTask, task);
            return existingTask;
        }
        return null;
    }
    delete(id) {
        const index = this.tasks.findIndex((t) => t.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=InMemoryTaskRepository.js.map