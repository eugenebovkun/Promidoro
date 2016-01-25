import { PromdrTaks } from './promdr-task'

export class PromdrTaskListController {
  constructor (promdrTasks) {
    'ngInject';

    this.taskList = promdrTasks.list;

    this.newTask = new PromdrTaks();
  }
    addTask() {
        this.taskList.push(this.newTask);
        this.newTask = new PromdrTaks();
    }
}
