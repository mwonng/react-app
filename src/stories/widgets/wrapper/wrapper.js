import React from 'react'

const wrapperStyle = {
  margin: `20px auto`
};
const Wrapper = (props) => {
  return (
    <div style={wrapperStyle} id="demoWrapperStyle">
      {props.children}
    </div>
  )
}
export default Wrapper