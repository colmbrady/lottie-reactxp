import React from 'react';
import PropTypes from 'prop-types';
import AnimatedLottieView from 'lottie-react-native';

export default class Lottie extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  componentDidUpdate() {
    /* eslint-disable no-unused-expressions */
    this.props.isStopped ? this.animation.reset() : this.animation.play();
  }

  render() {
    return (
      <AnimatedLottieView
        ref={(animation) => {
          this.animation = animation;
        }}
        {...this.props}
      />
    );
  }
}

Lottie.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  source: PropTypes.object.isRequired,
  loop: PropTypes.bool,
  isStopped: PropTypes.bool,
  speed: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  /* eslint-disable react/forbid-prop-types, react/no-unused-prop-types */
  style: PropTypes.object,
};

Lottie.defaultProps = {
  isStopped: false,
  loop: true,
  speed: 1,
  style: {},
  width: undefined,
  height: undefined,
};
