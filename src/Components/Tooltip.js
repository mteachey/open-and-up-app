import React from 'react';

function Tooltip(props) {
  return (
    <span className='tooltip'>
      <div className={`tooltip-message ${props.positionClass}`}>
        {props.message}
      </div>
    </span>
  )
}

export default Tooltip;