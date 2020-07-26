import React, {Component} from 'react';

class Tooltip extends Component{
  state={
    isTooltipVisible:false,
  }

showTooltip=()=>{
  this.setState({isTooltipVisible:true});
  setTimeout(() =>  this.setState({isTooltipVisible:false}), 2000);
}

  render(){
    const {isTooltipVisible} =this.state
    return (
      <span className='tooltip'
        onClick={this.showTooltip}
      >
        <div className={`tooltip-message ${this.props.positionClass} ${isTooltipVisible ? 'visible' : ""}`}>
          {this.props.message}
        </div>
      </span>
    )
  }
}

export default Tooltip;