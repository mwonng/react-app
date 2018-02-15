import React from 'react';
import '../style/components.css';
import { Button } from '@storybook/react/demo'

export const RedButton = () => {

  return (
    <div className="buttonWrap">
      <button className="button">
        How it Works
      </button>
      <img src="https://makeitminefinance.s3.ap-southeast-2.amazonaws.com/d45dd95ef8b424f3f47cef26b7cbf3df%7C0%7C0%7Coriginal" alt="" className="shadow"/>
    </div>
  )
}