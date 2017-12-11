import React from 'react';
import RX from 'reactxp';
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
    const buttonStyle = RX.Styles.createButtonStyle({
      margin: 10,
      textAlign: 'center',
    });
    const { isTransitioned } = this.state;
    const source = !isTransitioned ? animationDataA : animationDataB;

    return (
      <RX.View>
        <Lottie source={source} loop height={400} width={400} />
        <RX.Button style={buttonStyle} onPress={this.clickHandlerB}>
          <RX.Text>restart</RX.Text>
        </RX.Button>
        <RX.Button style={buttonStyle} onPress={this.clickHandlerA}>
          <RX.Text>change</RX.Text>
        </RX.Button>
      </RX.View>
    );
  }
}
