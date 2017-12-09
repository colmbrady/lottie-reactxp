import React from 'react';
import Lottie from '../index';
import * as animationDataA from './pinjump.json';

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isStopped: false,
      speed: 1,
    };
  }

  render() {
    const centerStyle = {
      display: 'block',
      margin: '10px auto',
      textAlign: 'center',
    };
    const { isStopped, speed } = this.state;
    return (
      <div>
        <Lottie
          source={animationDataA}
          isStopped={isStopped}
          height={400}
          width={400}
          speed={speed}
        />

        <p style={centerStyle}>Speed: x{speed}</p>
        <input
          style={centerStyle}
          type="range"
          value={speed}
          min="0"
          max="3"
          step="0.5"
          onChange={e => this.setState({ speed: Number(e.currentTarget.value) })}
        />
        <button style={centerStyle} onClick={() => this.setState({ isStopped: true })}>
          stop
        </button>
        <button style={centerStyle} onClick={() => this.setState({ isStopped: false })}>
          play
        </button>
      </div>
    );
  }
}
