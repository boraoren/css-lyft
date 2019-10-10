import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Logo from '.';

const stories = storiesOf('Components', module);

stories.add(
  'logo/default logo',
  () => (<Logo onClick={action('onClick')} width={'110px'}/>),
);