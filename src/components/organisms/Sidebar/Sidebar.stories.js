import React from 'react';
import { storiesOf } from '@storybook/react/dist/client/preview';
import Sidebar from './Sidebar';
import StoryRouter from 'storybook-react-router';


storiesOf('Sidebar', module)
.addDecorator(StoryRouter())
.add('Normal', () => <Sidebar/>);