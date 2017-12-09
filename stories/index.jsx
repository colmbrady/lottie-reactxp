/* global document */
import React from 'react';
import RX from 'reactxp';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf, addDecorator } from '@storybook/react';
import LottieControl from './lottie-control';
import TransitionLoop from './transition-loop';

const RXDecorator = (storyFn) => {
  if (document) {
    document.getElementById('root').className = 'app-container';
  }
  const story = storyFn();
  RX.UserInterface.setMainView(story);
  return story;
};
RX.App.initialize(true, true);

addDecorator(RXDecorator);

storiesOf('Lottie Animation View', module)
  .add('with control', () => <LottieControl />)
  .add('transitions & loops', () => <TransitionLoop />);
