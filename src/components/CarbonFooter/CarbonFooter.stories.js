import React from 'react';
import { action } from '@storybook/addon-actions';

import CarbonFooter from './CarbonFooter';

export default {
  component: CarbonFooter,
  title: 'CarbonFooter',
  // Our exports that end in "Data" are not stories
  excludeStories: /.*Data$/
};

export const Default = () => <CarbonFooter/>;