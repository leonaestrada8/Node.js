// 4.1 TaskManager

class TaskManager {
    constructor() {
      this.tasks = {}; // Simulação de um banco de dados em memória
    }
  
    addTask(id, description) {
      this.tasks[id] = description;
      console.log(`Task added: ${description}`);
    }
  
    listTasks() {
      console.log("Listing tasks:");
      for (const [id, description] of Object.entries(this.tasks)) {
        console.log(`ID: ${id}, Description: ${description}`);
      }
    }
  
    deleteTask(id) {
      if (this.tasks[id]) {
        delete this.tasks[id];
        console.log(`Task with ID ${id} deleted`);
      } else {
        console.log("Task not found");
      }
    }
  }
  
  // Exemplo de uso
  const taskManager = new TaskManager();
  taskManager.addTask(1, "Task 1");
  taskManager.addTask(2, "Task 2");
  taskManager.listTasks();
  taskManager.deleteTask(1);
  taskManager.listTasks();

  