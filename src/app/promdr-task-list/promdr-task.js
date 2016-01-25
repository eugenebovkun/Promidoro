export class PromdrTaks {
  constructor (md5) {
    const taskDone = 100;

    this.taskStatuses = {
      new: 'new',
      inProgress: 'in Progress',
      done: 'done'
    };

    this.taskName = 'new Task';
    this.partOfDone = 0;
    this.status = 'new';

  }


  renameTask(newName) {
    this.taskName = newName;
  }

  finishTask() {
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

