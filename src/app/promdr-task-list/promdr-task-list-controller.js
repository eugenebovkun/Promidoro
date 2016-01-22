import { PromdrTaks } from './promdr-task'

export class PromdrTaskListController {
  constructor () {
    'ngInject';

    this.taskList = [{
      name: 'task X',
      status: 'new'
    }];
  }
    addTask() {
      const newTask = {
        name: 'task X',
        status: 'new'
      };
        this.taskList.push(newTask);
    }
}
