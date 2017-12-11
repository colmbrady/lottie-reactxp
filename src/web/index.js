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
    const { loop, speed, source } = this.props;

    this.options = {
      /* eslint-disable react/no-find-dom-node */
      container: ReactDOM.findDOMNode(this.node),
      renderer: 'svg',
      loop: loop !== false,
      autoplay: true,
      animationData: source,
      speed,
    };

    this.anim = bodymovin.loadAnimation(this.options);
  }

  componentWillUpdate(nextProps) {
    /* Recreate the animation handle if the data is changed */
    if (this.options.animationData !== nextProps.source) {
      this.destroy();
      this.options.animationData = nextProps.source;
      this.anim = bodymovin.loadAnimation(this.options);
    }
  }

  componentDidUpdate() {
    /* eslint-disable no-unused-expressions */
    this.props.isStopped ? this.stop() : this.play();
    this.setSpeed();
  }

  setSpeed() {
    this.anim.setSpeed(this.props.speed);
  }

  play() {
    this.anim.play();
  }

  stop() {
    this.anim.stop();
  }

  destroy() {
    this.anim.destroy();
  }

  render() {
    const { width, height } = this.props;
    const lottieStyles = RX.Styles.createViewStyle({
      width,
      height,
      overflow: 'hidden',
      margin: '0 auto',
    });
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
