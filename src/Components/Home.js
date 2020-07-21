import React, { Component } from 'react';
import Nav from './Nav.js';
import About from './About.js'
import '../_styles/home.css'

class Home extends Component{
    state = {
        isBoxVisible:false,
        scrollPosition:0,
        statsRef:React.createRef(),
};

startExploring = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
    this.props.history.push('/dashboard');
  };


signUpPopUp=()=>{
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
}

signUpInClick=()=>{
   this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
}

learnMore=()=>{
    if(this.state.isBoxVisible)
    {this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));}
    //need to scroll to learn more
    if(this.state.statsRef.current){
        this.state.statsRef.current.scrollIntoView({ 
           behavior: "smooth", 
           block: "start"
        })
    }
}

    render(){
        const { isBoxVisible } = this.state;
        return(
            <div className="home">
            <Nav
            pageType={'home'}
            onSignUpInClick = {this.signUpInClick}
            gotoLearnMore = {this.gotoLearnMore}
            />
                <header className="header-home">
                    <h1>Uplift</h1>
                    <h2 className="tagline">Uplift yourself.<br/>Uplift someone else</h2>
                       <button className="button" onClick={this.learnMore}>Learn More</button>
                        <button className="button" onClick={this.signUpPopUp}>Start</button>
                 </header>
                 <main> 
                    <div className={`box ${isBoxVisible ? "" : "hidden"}`}>
                       {/*} <span className="closebtn">&times;</span>*/}
                        <p>Thanks for your interest in Uplift!</p><p>This is the Beta version so we are not yet allowing users to sign-up. Please explore around, play with the forms, and check back soon!</p>
                        <button className="button" onClick={this.startExploring}>Explore</button>
                        <button className="button" onClick = {e => this.learnMore()}>Learn More</button>
                    </div> 
                    <div ref={this.state.statsRef}></div> 
                    <About/>
                 </main>
                 
            </div>
        )
    }
}

export default Home;
