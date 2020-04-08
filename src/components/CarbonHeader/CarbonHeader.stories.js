import React from 'react';
import { action } from '@storybook/addon-actions';

import CarbonHeader from './CarbonHeader';

export default {
  component: CarbonHeader,
  title: 'CarbonHeader',
  // Our exports that end in "Data" are not stories
  excludeStories: /.*Data$/
};

export const Default = () => <CarbonHeader/>;
