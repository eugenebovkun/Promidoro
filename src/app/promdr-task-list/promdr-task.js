export class PromdrTaks {
  constructor (taskName) {
    const taskDone = 100;
    const taskStatuses = {
      new: 'new',
      inProgress: 'in Progress',
      done: 'done'
    };

    this.taskName = taskName;
    this.partOfDone = 0;
    this.status = 'new';

  }

  renameTask(newName) {
    this.taskName = newName;
  }

  finishTask() {
    this.partOfDone = taskDone;
    this.status = taskStatuses.done;
    return this;
  }

  startTask() {
    this.status = taskStatuses.inProgress;
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

