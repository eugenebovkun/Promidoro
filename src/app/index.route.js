export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/old',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('timer', {
      url: '/timer',
      templateUrl: 'app/promdr-timer/promdr-timer-layout.html',
      controller: 'promdrTimerController',
      controllerAs: 'promdrTimerCtrl'
    })
    .state('taskTimer', {
      url: '/timer/task/:index',
      templateUrl: 'app/promdr-timer/promdr-timer-layout.html',
      controller: 'promdrTimerController',
      controllerAs: 'promdrTimerCtrl'
    })
    .state('tasks', {
      url: '/',
      templateUrl: 'app/promdr-task-list/promdr-task-list-layout.html',
      controller: 'promdrTaskListController',
      controllerAs: 'promdrTaskListCtrl'
    });

  $urlRouterProvider.otherwise('/');
}
