var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should render countdown', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    //use done since we are using async call
    it('should set state', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        //handle async call in mocha
        done();
      },1001);
    });

    it('should not print negative', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout(() =>{
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001)
    });
  });
});
