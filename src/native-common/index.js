import React from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

/**
 * Class acts as a simple wrapper around a React Native Lottie component.
 */
export default class Lottie extends React.Component {
  constructor(props) {
    super(props);
    this.doCallback = this.doCallback.bind(this);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentWillUpdate(nextProps) {
    // Kill current anim if we detect a new one it needed
    if (this.props.source !== nextProps.source) {
      this.stop();
    }
  }

  componentDidUpdate() {
    /* eslint-disable no-unused-expressions */
    this.props.isStopped ? this.stop() : this.startAnimation(); // TODO: maybe dont start again?
  }

  componentDidUnmount() {
    this.stop();
  }

  doCallback(event) {
    if (event.finished) {
      if (this.props.loop) {
        this.props.onLoopComplete();
        this.startAnimation();
      } else {
        this.props.onComplete();
      }
    }
  }

  startAnimation() {
    this.state.progress.setValue(0);
    // We dont use the "Animated.loop" API as it appears
    // on-complete callbacks dont get called when its used.
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: (this.props.duration * 1000), // convert to seconds to millis
      easing: Easing.linear,
      useNativeDriver: true, // to dispatch on native thread so UI does not block
    }).start(this.doCallback);
  }

  stop() {
    Animated.timing(this.state.progress).stop();
  }

  render() {
    const {
      source, loop, isStopped, style,
    } = this.props;
    style.width = this.props.width;
    style.height = this.props.height;
    return (
      <AnimatedLottieView
        progress={this.state.progress}
        source={source}
        loop={loop}
        isStopped={isStopped}
        speed={1} // Always run at normal speed and duration controls anim length
        style={style}
      />
    );
  }
}

Lottie.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  source: PropTypes.object.isRequired,
  loop: PropTypes.bool,
  isStopped: PropTypes.bool,
  duration: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
  onComplete: PropTypes.func,
  onLoopComplete: PropTypes.func,
};

Lottie.defaultProps = {
  isStopped: false,
  loop: true,
  duration: 1,
  style: {},
  width: undefined,
  height: undefined,
  onComplete: () => {},
  onLoopComplete: () => {},
};
