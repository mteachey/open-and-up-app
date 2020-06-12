import React, { Component } from 'react';
import Nav from './Nav.js';
import { Link } from 'react-router-dom';


class Home extends Component{

    render(){
        return(
            <div className="start-page">
                <Nav 
                   pageType={'home'}
                />
                <h1>Open and Up</h1>
                <p><Link className="site-heading" to={'/dashboard'}>Explore</Link></p>
            </div>
        )
    }
}

export default Home;
