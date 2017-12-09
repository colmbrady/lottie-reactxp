import React from 'react';
import Lottie from '../index';
import * as animationDataA from './twitter-heart.json';
import * as animationDataB from './preloader.json';

export default class TransitionLoop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTransitioned: false,
    };

    this.clickHandlerA = this.clickHandlerA.bind(this);
    this.clickHandlerB = this.clickHandlerB.bind(this);
  }

  clickHandlerA() {
    this.setState({ isTransitioned: true });
  }

  clickHandlerB = () => {
    this.setState({ isTransitioned: false });
  };

  render() {
    const centerStyle = {
      display: 'block',
      margin: '10px auto',
      textAlign: 'center',
    };
    const { isTransitioned } = this.state;
    const source = !isTransitioned ? animationDataA : animationDataB;

    return (
      <div>
        <Lottie source={source} loop height={400} width={400} />
        <button style={centerStyle} onClick={this.clickHandlerB}>
          restart
        </button>
        <button style={centerStyle} onClick={this.clickHandlerA}>
          change
        </button>
      </div>
    );
  }
}
