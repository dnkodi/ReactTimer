var React = require('react');

var CountdownForm = React.createClass({

  onSubmit: function(e){
    e.preventDefault();

    console.log('input value', $('input').length); 
    var strSeconds = this.refs.seconds.value;
    if(strSeconds.match(/^[0-9]*$/)){
      this.refs.seconds.value = '';
      //pass
      //alert('seconds');
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },

  render:function(){
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
