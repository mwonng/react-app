import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { RedButton } from './buttons/Button'
import { Header } from './sections/header'
import Carousel from './Carousel/Carousel'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Carousel', module).add('Home Slider', () => <Carousel autoplay={true} interval='2000' />);


storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Customize', module)
  .add('Red Button', () => <RedButton></RedButton>)