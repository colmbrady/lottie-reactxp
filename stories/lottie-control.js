import React from 'react';
import RX from 'reactxp';
import Lottie from '../index';
import * as animationDataA from './pinjump.json';

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isStopped: false,
      speed: '1',
    };
  }

  render() {
    const textStyle = RX.Styles.createTextStyle({
      margin: 10,
      textAlign: 'center',
    });
    const textInputStyle = RX.Styles.createTextInputStyle({
      margin: 8,
      height: 32,
      fontSize: 20,
      alignSelf: 'stretch',
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: 1,
    });
    const buttonStyle = RX.Styles.createButtonStyle({
      margin: 10,
    });
    const { isStopped, speed } = this.state;
    return (
      <RX.View>
        <Lottie
          source={animationDataA}
          isStopped={isStopped}
          height={400}
          width={400}
          speed={Number(speed)}
          onLoopComplete={() => { console.log('onLoopComplete'); }}
          onComplete={() => { console.log('onComplete'); }}
        />
        <RX.Text style={textStyle}>Speed: x{speed}</RX.Text>
        <RX.TextInput
          style={textInputStyle}
          value={speed}
          editable
          onChangeText={value => this.setState({ speed: value })}
        />
        <RX.Button style={buttonStyle} onPress={() => this.setState({ isStopped: true })}>
          <RX.Text>stop</RX.Text>
        </RX.Button>
        <RX.Button style={buttonStyle} onPress={() => this.setState({ isStopped: false })}>
          <RX.Text>play</RX.Text>
        </RX.Button>
      </RX.View>
    );
  }
}
