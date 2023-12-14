var InMemoryTaskRepository = /** @class */ (function () {
    function InMemoryTaskRepository() {
        this.tasks = [];
    }
    InMemoryTaskRepository.prototype.create = function (task) {
        this.tasks.push(task);
        return task;
    };
    InMemoryTaskRepository.prototype.getTasks = function () {
        return this.tasks;
    };
    InMemoryTaskRepository.prototype.update = function (task) {
        var existingTask = this.tasks.find(function (t) { return t.id === task.id; });
        if (existingTask) {
            Object.assign(existingTask, task);
            return existingTask;
        }
        return null;
    };
    InMemoryTaskRepository.prototype.delete = function (id) {
        var index = this.tasks.findIndex(function (t) { return t.id === id; });
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    };
    return InMemoryTaskRepository;
}());
export { InMemoryTaskRepository };
