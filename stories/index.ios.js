import React from 'react';
import RX from 'reactxp';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf, addDecorator } from '@storybook/react-native';
import LottieControl from './lottie-control';
import TransitionLoop from './transition-loop';

const RXDecorator = (storyFn) => {
  const story = storyFn();
  RX.UserInterface.setMainView(story);
  console.log('setting main view');
  return story;
};

addDecorator(RXDecorator);

storiesOf('Lottie Animation View', module)
  .add('with control', () => <LottieControl />)
  .add('transitions & loops', () => <TransitionLoop />);
