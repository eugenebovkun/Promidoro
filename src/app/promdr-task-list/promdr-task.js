const taskDone = 100;
export class PromdrTaks {
  constructor () {

    this.taskStatuses = {
      new: 'new',
      inProgress: 'in Progress',
      done: 'done'
    };

    this.taskName = 'new Task';
    this.partOfDone = 0;
    this.status = 'new';
  }

  restart() {
    this.partOfDone = 0;
    this.status = this.taskStatuses.new;
  }

  done() {
    this.partOfDone = taskDone;
    this.status = this.taskStatuses.done;
    return this;
  }

  startTask() {
    this.status = this.taskStatuses.inProgress;
    return this;
  }

  updateProgress(partOfProgress) {
    if (partOfProgress > taskDone) {
      finishTask();
    } else {
      this.partOfDone = partOfProgress;
    }
  }
}

