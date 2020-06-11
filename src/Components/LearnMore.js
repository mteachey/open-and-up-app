import React, { Component } from 'react';
import Nav from './Nav.js'


class LearnMore extends Component{

    render(){
        return(
            <div>
                <Nav 
                   pageType={'interior'}
                />
                <p>LearnMore</p>
            </div>
        )
    }
}

export default LearnMore;
