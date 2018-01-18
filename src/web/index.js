import React from 'react';
import ReactDOM from 'react-dom';
import RX from 'reactxp';
import PropTypes from 'prop-types';
import bodymovin from 'bodymovin';

/**
 * Based on https://github.com/chenqingspring/react-lottie
 */
export default class Lottie extends React.Component {
  componentDidMount() {
    const { loop, source } = this.props;

    this.options = {
      /* eslint-disable react/no-find-dom-node */
      container: ReactDOM.findDOMNode(this.node),
      renderer: 'svg',
      loop: loop !== false,
      autoplay: false,
      animationData: source,
    };

    this.setUpAnimation();
    this.play();
  }

  componentWillUpdate(nextProps) {
    /* Recreate the animation handle if the data is changed */
    if (this.options.animationData !== nextProps.source) {
      this.destroy();
      this.options.animationData = nextProps.source;
      this.setUpAnimation();
      this.play();
    }
  }

  componentDidUpdate() {
    /* eslint-disable no-unused-expressions */
    this.props.isStopped ? this.stop() : this.play();
    this.setSpeed();
  }

  componentWillUnmount() {
    this.destroy();
  }

  setUpAnimation() {
    this.anim = bodymovin.loadAnimation(this.options);
    this.setSpeed();
    this.anim.addEventListener('complete', this.props.onComplete);
    this.anim.addEventListener('loopComplete', this.props.onLoopComplete);
  }

  setSpeed() {
    this.anim.setSpeed(this.calculateSpeed());
  }

  calculateSpeed() {
    const defaultDuration = this.anim.totalFrames / this.anim.frameRate;
    const desiredDuration = this.props.duration;
    return (defaultDuration / desiredDuration);
  }

  play() {
    this.anim.play();
  }

  stop() {
    this.anim.stop();
  }

  destroy() {
    this.anim.removeEventListener('complete', this.props.onComplete);
    this.anim.removeEventListener('loopComplete', this.props.onLoopComplete);
    this.anim.destroy();
  }

  render() {
    const { style, width, height } = this.props;
    const lottieStyles = RX.Styles.createViewStyle({
      width,
      height,
      overflow: 'hidden',
      margin: '0 auto',
    }, style);
    return (
      <RX.View
        ref={(node) => {
          this.node = node;
        }}
        style={lottieStyles}
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
  /* eslint-disable react/forbid-prop-types, react/no-unused-prop-types */
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
