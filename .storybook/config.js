import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'react-chromatic/storybook-addon';
import 'storybook-chromatic';

import '../src/index.css';

const req = requireContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
