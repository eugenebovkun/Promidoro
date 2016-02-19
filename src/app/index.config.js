export function config ($logProvider, toastrConfig, BackandProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  BackandProvider.setAppName('promidoro');
  BackandProvider.setSignUpToken('80bf6129-d590-11e5-b112-0ed7053426cb');
  BackandProvider.setAnonymousToken('fa42d237-f5d4-43ae-8110-85b435533478');
}
