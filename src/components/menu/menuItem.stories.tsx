import * as React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItem from './MenuItem';

const stories = storiesOf('Components', module);

stories.add(
  'menu/item',
  () => (<MenuItem text="MENU ITEM"/>),
).add(
  'menu/driver',
  () => (<MenuItem text="DRIVER"/>),
)

