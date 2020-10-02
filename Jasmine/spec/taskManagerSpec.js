describe("Add task", () => {
  describe("When adding a new task", () => {
    it("should add new task to the tasks array", () => {
      const taskManager = new TaskManager();

      const taskToAdd = {
        id: taskManager.currentId,
        name: "test",
        description: "test",
        assignedTo: "test",
        date: Date.now(),
        status: "TO DO",
      };

      taskManager.addTask(
        taskToAdd.name,
        taskToAdd.description,
        taskToAdd.assignedTo,
        taskToAdd.date,
        taskToAdd.status
      );

      expect(taskManager.tasks[0]).toEqual(taskToAdd);
    });
  });

  describe("When a new task is added to the tasks array", () => {
    it("should increment the id by one", () => {
      const taskManager = new TaskManager(0);

      const newTask = {
        id: taskManager.currentId,
        name: "test",
        description: "test",
        assignedTo: "test",
        dueDate: Date.now(),
        status: "TO DO",
      };

      taskManager.addTask(
        newTask.name,
        newTask.description,
        newTask.assignedTo,
        newTask.dueDate
      );

      expect(taskManager.currentId).toBe(1);
    });
  });
});

describe("Delete Task", () => {
  describe("When deleting an existing task", () => {
    it("should delete the expected task from the tasks array", () => {
      const taskManager = new TaskManager();

      const taskToDelete = {
        id: taskManager.currentId,
        name: "test",
        description: "test",
        assignedTo: "test",
        dueDate: Date.now(),
        status: "TO DO",
      };

      const secondTask = {
        name: "test1",
        description: "test1",
        assignedTo: "test1",
        dueDate: Date.now(),
        status: "TODO",
      };

      taskManager.addTask(
        taskToDelete.name,
        taskToDelete.description,
        taskToDelete.assignedTo,
        taskToDelete.dueDate
      );
      taskManager.addTask(
        secondTask.name,
        secondTask.description,
        secondTask.assignedTo,
        secondTask.dueDate
      );

      taskManager.deleteTask(taskToDelete.id);
      expect(taskManager.tasks).not.toContain(taskToDelete);
    });
  });
});

describe("Get task by Id", () => {
  describe("When calling an Id", () => {
    it("should bring up current task", () => {
      const taskManager = new TaskManager();

      const taskId = {
        id: taskManager.currentId,
        name: "test1",
        description: "test1",
        assignedTo: "test1",
        dueDate: Date.now(),
        status: "TODO",
      };

      taskManager.getTaskById(
        taskId.id,
        taskId.name,
        taskId.description,
        taskId.assignedTo,
        taskId.dueDate
      );
      expect(taskId.id).toBe(0);
    });
  });

  // describe("When calling an Id that does not exist", () => {
  //   it("should throw an error", () => {
  //     const taskManager = new TaskManager();

  //     const task = {
  //       id: taskManager.currentId,
  //       name: "test1",
  //       description: "test1",
  //       assignedTo: "test1",
  //       dueDate: Date.now(),
  //       status: "TODO",
  //     };

  //     taskManager.addTask(
  //       task.id,
  //       task.name,
  //       task.description,
  //       task.assignedTo,
  //       task.dueDate
  //     );

  //     const result = taskManager.getTaskById(50);

  //     expect(() => result).toThrow();

  //     console.log(result);
  //   });
  // });
});

describe("New task manager", () => {
  describe("When task manager is initialised", () => {
    it("should set id to 0", () => {
      const taskManager = new TaskManager();

      expect(taskManager.currentId).toBe(0);
    });

    it("should contain an empty array", () => {
      const taskManager = new TaskManager();

      expect(taskManager.tasks).toEqual([]);
    });
  });
});
