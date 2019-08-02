import React from 'react';
import { storiesOf } from '@storybook/react';
import PlanFields from '../../../components/project/PlanFields'
import {reduxForm} from 'redux-form'

let PlanFields_Decorated = new reduxForm({
    form: 'PlanFields',
})(PlanFields);


storiesOf('Project', module)
    .addDecorator(story => (
        <div style={{ margin: '20%' }} >
            {story()}</div>
    ))
    .add('PlanFields', () =>
        <PlanFields_Decorated />
    )
