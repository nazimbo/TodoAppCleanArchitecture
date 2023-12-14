// src/app.js (ou app.ts)
document.addEventListener("DOMContentLoaded", async function () {
  const taskContainer = document.getElementById("task-container");
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");

  // Fonction pour afficher les tâches
  async function displayTasks() {
    // Appel d'API pour récupérer les tâches depuis le backend
    const tasks = await fetchTasks();

    // Affichage des tâches dans le conteneur
    taskContainer.innerHTML = "";
    tasks.forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.innerHTML = `<span>${task.title}</span>`;
      taskContainer.appendChild(taskElement);
    });
  }

  // Fonction pour ajouter une tâche
  async function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      // Appel d'API pour créer une nouvelle tâche dans le backend
      await createTask({ title: taskText, description: "", dueDate: new Date(), completed: false });

      // Actualisation de l'affichage des tâches
      await displayTasks();

      // Effacer le champ de saisie
      taskInput.value = "";
    }
  }

  // Écouteur d'événement pour le bouton "Ajouter"
  addTaskBtn.addEventListener("click", addTask);

  // Initialisation de l'affichage des tâches au chargement de la page
  await displayTasks();
});

// Fonctions d'API simulées (remplacez-les par vos vraies appels d'API)
async function fetchTasks() {
  // Simulez l'appel d'API pour récupérer les tâches
  return [
    { id: "1", title: "Tâche 1", description: "", dueDate: new Date(), completed: false },
    { id: "2", title: "Tâche 2", description: "", dueDate: new Date(), completed: true },
  ];
}

async function createTask(taskData) {
  // Simulez l'appel d'API pour créer une nouvelle tâche
  console.log("Nouvelle tâche créée :", taskData);
}
