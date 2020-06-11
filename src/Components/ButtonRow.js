import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonRow extends Component{
    static defaultProps ={
       link1:'',
       link1_label:'',
       link2:'',
       link2_label:'',
       link3_label:'',
       link4_label:'',
       link5_label:'',
       link3:'',
       link4:'',
       link5:''
      };


    render(){
        
        let buttons=this.props.links;

        const Buttons = buttons.map((linkObject,i) => 
         { 
            const url = Object.keys(linkObject)[0];
            const lable = Object.values(linkObject)[0]
            return (<Link key={i} to={url} className="button-link">{lable}</Link>
            )
          }        
         )

        return(
            <section className="button-row">
                {Buttons}           
            </section>
        )
    }
}

export default ButtonRow;