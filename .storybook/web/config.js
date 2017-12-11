import RX from 'reactxp';
import { configure } from '@storybook/react';

function loadStories() {
  require('../../stories');
}

RX.App.initialize(true, true);

configure(loadStories, module);
