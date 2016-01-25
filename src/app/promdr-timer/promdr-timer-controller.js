PromdrTimerController.$inject = ['$interval', '$log', '$filter', '$stateParams', 'promdrTasks'];

export default function PromdrTimerController($interval, $log, $filter, $stateParams, promdrTasks, taskNumber, taskNumber2) {
  let vm = this;

  const WORKING_PERIOD = 25*60*1000;
  const REST_PERIOD = 5*60*1000;

  let workingTimer;
  let restTimer;
  vm.currentTask = promdrTasks.list[$stateParams.index];


  Object.assign(vm, {
    workingTimer: 0,
    restTimer: 0,

    startWorkingTimer,
    resetWorkingTimer,
    pauseWorkingTimer,
    startRestTimer,
    resetRestTimer
  });

  initTimers();


  function initTimers() {
    "use strict";
    vm.workingTimer = WORKING_PERIOD;
    vm.restTimer = REST_PERIOD;
  }

  function startWorkingTimer() {
      workingTimer = $interval(countDownWorkingTimer, 1000, vm.workingTimer/1000);
  }

  function startRestTimer() {
    restTimer = $interval(countDownWorkingTimer, 1000, vm.restTimer/1000);
  }

  function resetWorkingTimer () {
      $interval.cancel(workingTimer);
      initTimers();
  }

  function resetRestTimer () {
      $interval.cancel(restTimer);
      initTimers();
  }

  function pauseWorkingTimer() {
    $interval.cancel(workingTimer);
  }


  function countDownWorkingTimer() {
    vm.workingTimer -= 1000;
    if (vm.workingTimer % 10*1000 === 0) {
      $log.info('working timer now', $filter('date')(vm.workingTimer, 'mm:ss:sss'))
    }
  }

  return vm;
}
