(()=>{"use strict";var t=function(){function t(){this.tasks=[]}return t.prototype.create=function(t){return this.tasks.push(t),t},t.prototype.getTasks=function(){return this.tasks},t.prototype.update=function(t){var e=this.tasks.find((function(e){return e.id===t.id}));return e?(Object.assign(e,t),e):null},t.prototype.delete=function(t){var e=this.tasks.findIndex((function(e){return e.id===t}));return-1!==e&&(this.tasks.splice(e,1),!0)},t}();console.log("Backend connected");var e,n=new t,s=function(){return n.getTasks()};e=new function(t,e,n,s,i){this.id=t,this.title=e,this.description=n,this.dueDate=s,this.completed=i}("1","Nouvelle tâche","Description",new Date,!1),n.create(e),console.log("Tâches:",s());var i=n.getTasks()[0];i.title="Tâche mise à jour",function(t){n.update(t)}(i),console.log("Tâches:",s())})();