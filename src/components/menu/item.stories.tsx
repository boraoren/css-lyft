import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Item from './item';

const stories = storiesOf('Components', module);

stories.add(
  'menu/item',
  () => (<Item/>),
);