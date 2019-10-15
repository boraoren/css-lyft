import * as React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItem from './MenuItem';

const menuStories = storiesOf('Components/menu', module);

menuStories.add(
    'menu/item',
    () => (<MenuItem text="MENU ITEM" />),
).add(
    'menu/item/driver',
    () => (<MenuItem text="DRIVER" />),
).add(
    'menu/item/rider',
    () => (<MenuItem text="RIDER" />),
).add(
    'menu/item/business',
    () => (<MenuItem text="BUSINESS" />),
).add(
    'menu/item/login',
    () => (<MenuItem text="LOG IN" />),
)

