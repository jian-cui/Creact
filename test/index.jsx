import { Component, render, createElement } from '../src/index';
import classNames from 'classnames';

class App extends Component {
  render() {
    return (
      <div>
        <div>testtesttest</div>
        <Button className="btn" />
      </div>
    )
  }
}

class Button extends Component {
  render() {
    const { className } = this.props;
    const classes = classNames(className, 'button');
    console.log(classes);
    return (
      <a href = "javascript;" className = { classes }>111</a>
    )
  }
}
render(<App />, document.getElementById('app'));
