import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Logo from '.';

const stories = storiesOf('Components', module);

stories.add(
    'logo/56px to 48px',
    () => (<Logo onClick={action('onClick')}
        width={[ '48px', '56px']}
        height={[ '48px', '56px']}/>),
);

