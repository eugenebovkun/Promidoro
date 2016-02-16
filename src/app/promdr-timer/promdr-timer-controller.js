PromdrTimerController.$inject = ['$interval', '$log', '$filter'];

export default function PromdrTimerController($interval) {
  let vm = this;

  //const WORKING_PERIOD = 25 * 60 * 1000;
  //const REST_PERIOD = 5 * 60 * 1000;
  const WORKING_PERIOD = 5 * 1000;
  const REST_PERIOD = 5 * 1000;
  let deadline;

  let workingTimer;
  let restTimer;

  Object.assign(vm, {
    activeTimer: null,
    workingTimer: {
      counter: null,
      count: 0
    },
    restTimer: {
      counter: null,
      count: 0
    },

    stopActiveTimer,
    startWorkingTimer,
    resetWorkingTimer,
    initTimers
  });

  initTimers();

  function initTimers() {
    vm.workingTimer = {
      counter: null,
      count: WORKING_PERIOD
    };
    vm.restTimer = {
      counter: null,
      count: REST_PERIOD
    };
  }

  function startWorkingTimer() {
    if (!vm.workingTimer.counter) {
      vm.workingTimer.count = WORKING_PERIOD;
      vm.activeTimer = vm.workingTimer;
      startActiveTimer();
    }
  }

  function startRestTimer() {
    if (!vm.restTimer.counter) {
      vm.restTimer.count = REST_PERIOD;
      vm.activeTimer = vm.restTimer;
      startActiveTimer();
    }
  }

  function startActiveTimer() {
      initTimer(vm.activeTimer.count);

      vm.activeTimer.counter = $interval(() => {updateTimer(vm.activeTimer)}, 1000);
  }

  function resetWorkingTimer() {
    $interval.cancel(vm.workingTimer.counter);
    initTimers();
  }

  function resetRestTimer() {
    $interval.cancel(vm.restTimer.counter);
    initTimers();
  }

  function stopActiveTimer() {
    $interval.cancel(vm.activeTimer.counter);
  }


  function initTimer(interval) {
    const currentTime = Date.parse(new Date());
    return deadline = new Date(currentTime + interval);
  }

  function getTimeRemaining(endtime) {
    return Date.parse(endtime) - Date.parse(new Date());
  }

  function updateTimer(timer) {
     if (getTimeRemaining(deadline) <= 0) {
       if (timer === vm.workingTimer){
         resetWorkingTimer();
         alert('Time to Rest!');
         startRestTimer();
       } else if (timer === vm.restTimer){
         resetRestTimer();
         alert('Time to Work!');
         startWorkingTimer();
       }
     } else {
       timer.count = getTimeRemaining(deadline);
     }
  }

  //function toggleTimer() {
  //  vm.activeTimer = (angular.equals(vm.activeTimer, vm.workingTimer)) ? vm.restTimer : vm.workingTimer;
  //  initTimers();
  //  startActiveTimer();
  //}

  return vm;
}
