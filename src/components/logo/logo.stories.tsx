import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Logo from '.';

const stories = storiesOf('Components', module);

stories.add(
    'logo/56x56',
    () => (<Logo onClick={action('onClick')}
        width={'56'}
        height={'56'} />),
);

