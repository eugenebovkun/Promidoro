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
      url: '/',
      templateUrl: 'app/promdr-timer/promdr-timer-layout.html',
      controller: 'promdrTimerController',
      controllerAs: 'promdrTimerCtrl'
    });

  $urlRouterProvider.otherwise('/');
}
