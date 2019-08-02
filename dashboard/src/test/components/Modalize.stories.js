import React from 'react';
import { storiesOf } from '@storybook/react';
import {Modalize} from '../../components/Modalize'

let props = {
    HEADER: 'HEADER',
    CONTENT: 'CONTENT',
    FOOTER: 'FOOTER'
}

storiesOf('Modals', module)
    .add('Modalize', () =>
        <Modalize  {...props} />
    )
