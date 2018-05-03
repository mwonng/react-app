import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { RedButton } from './buttons/Button'
import { Header } from './sections/header'
import Carousel from './Carousel/Carousel'
import Ribbon from './widgets/ribbon/ribbon'
import Breadcrumbs from './widgets/breadcrumbs/breadcrumbs'
import DemoWrapper from './widgets/wrapper/wrapper'
import './fonts.scss'
import './index.scss'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Carousel', module).add('Home Slider', () => <Carousel autoplay={false} interval='5000' width='1000' />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('Red Button', () => <RedButton></RedButton>)

storiesOf('Widgets', module)
  .add('Red Button', () => <Ribbon>This is Ribbon</Ribbon>)
  .add('Breadcrumbs', () => <DemoWrapper><Breadcrumbs /></DemoWrapper>)