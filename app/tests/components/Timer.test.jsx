var React = require('react');
var expect= require('expect');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');


describe('Timer', () => {
  it('should exist', () =>{
    expect(Timer).toExist();
  });

  it('should pause when timer paused', () => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({timer: 3});
    timer.handleStatusChange('paused');

    setInterval(() => {
      expect(timer.state.timer).toBe(3);
      expect(timer.state.timerStatus).toBe('paused');
    },1000);

  });
});
