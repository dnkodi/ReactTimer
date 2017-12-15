var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

//wow im the 1st comment
var Timer = React.createClass({
  
  getInitialState: function(){
    return {
      timerStatus: 'stopped',
      timer: 0
    }
  },

  componentDidUpdate: function(prevProps, prevState){
    if(this.state.timerStatus!== prevState.timerStatus){
      switch(this.state.timerStatus){
        case 'started':
        this.startClock();
        break;
        case 'stopped':
        this.setState({
          timer:0,

        });

        case 'paused':
        clearInterval(this.timer);
        break;
      }
    }
  },

  startClock: function(){
    this.timer = setInterval(() => {
      var newTime = this.state.timer + 1;
      this.setState({
        timer: newTime
      });


    }, 1000);
  },

  handleStatusChange: function(newStatus){
    this.setState({
      timerStatus: newStatus
    });
  },
  render: function(){
    var {timer, timerStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={timer}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>

    );
  }
});

module.exports = Timer;
