import React from 'react';
import RX from 'reactxp';
import Lottie from '../index';
import * as animationDataA from './pinjump.json';

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isStopped: false,
      duration: '1',
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
    const { isStopped, duration } = this.state;
    return (
      <RX.View>
        <Lottie
          source={animationDataA}
          isStopped={isStopped}
          height={400}
          width={400}
          duration={Number(duration)}
          onLoopComplete={() => { console.log('onLoopComplete', Date.now()); }}
          onComplete={() => { console.log('onComplete'); }}
        />
        <RX.Text style={textStyle}>Speed: x{duration}</RX.Text>
        <RX.TextInput
          style={textInputStyle}
          value={duration}
          editable
          onChangeText={value => this.setState({ duration: value })}
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
