import { PromdrTaks } from './promdr-task'

export class PromdrTaskListController {
  constructor (promdrTasks) {
    'ngInject';

    this.selectedTask = null;
    this.taskList = promdrTasks.list;

    this.newTask = new PromdrTaks();
  }
    addTask() {
        this.taskList.push(this.newTask);
        this.newTask = new PromdrTaks();
    }

  selectTask(task) {
      this.selectedTask = task;
  }
}
