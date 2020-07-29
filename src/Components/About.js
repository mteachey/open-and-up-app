import React, { Component } from 'react';
import LearnMoreContent from './LearnMoreContent'

class About extends Component{
    render(){
        return(
            <main>
                <section className="about">     
                    <h2>What is Uplift?</h2>
                    <p>In a world, where we are so often bombarded with negative news or feeds that cause disagreement, envy, and anxiety, this app was created to be a place to find positive, uplifting thoughts, books, podcasts, and events.</p>
                    <p>You can create your own posts, follow other users, and bookmark posts - you own and other users.  In addition, you can write personal, private (only you will see them) comments on any of your bookmarked posts.</p>
                    <p>There are no likes or dislikes, other users will not know if anyone has or has not bookmarked their posts or chosen to follow them.</p>
                    <p>We hope this app can uplift your life....even if just a little.</p>
                </section>
                <LearnMoreContent/>
            </main>
        )
    }
}

export default About;