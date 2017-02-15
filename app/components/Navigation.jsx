var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <IndexLink to="#/">Timer</IndexLink>
          </li>
          <li>
            <Link to="#/">Stop Watch</Link>
          </li>

        </ul>

      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="#">Dulip</a>
          </li>
        </ul>
      </div>

    </div>
  );

};

module.exports = Navigation;
