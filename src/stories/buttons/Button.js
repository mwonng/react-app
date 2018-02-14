import React from 'react';
import '../style/components.css';
import { Button } from '@storybook/react/demo'

export const RedButton = () => {

  return (
    <div className="buttonWrap">
      <a href="" className="button">
        <p className="alt">How it Works</p>
      </a>
      <img src="https://makeitminefinance.s3.ap-southeast-2.amazonaws.com/d45dd95ef8b424f3f47cef26b7cbf3df%7C0%7C0%7Coriginal" alt="" className="shadow"/>
      <Button>Test</Button>
    </div>
  )
}