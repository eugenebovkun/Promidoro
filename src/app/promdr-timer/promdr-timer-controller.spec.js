import PromdrTimerController from './promdr-timer-controller';

describe('PromdrTimerController', () => {
  "use strict";

  let sut;
  let $interval;

  beforeEach(inject((_$interval_) => {
    $interval = _$interval_;

    sut = new PromdrTimerController($interval);
  }));

  describe('#init', () => {

    it('should initialized with 25 minutes work timer', () => {
      expect(sut.workingTimer).toBe(25*60*1000);
    });

    it('should fail', () => {
      expect(true).toBe(false);
    });
  });
});
