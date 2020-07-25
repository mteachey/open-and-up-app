import React, { Component } from 'react';

class About extends Component{
    render(){
        return(
            <main>
                <section className="about">     
                    <h2>What is Uplift?</h2>
                    <p>In a world, where we are so often bombarded with negative news or feeds that cause disagreement, envy, and anxiety, this app was created to be a place to find positive, uplifting thoughts, books, podcasts, and events.</p>
                    <p>You can create your own posts, follow other users, and bookmark posts - you own and other users.  In addition, you can write personal, private (only you will see them) comments on any of your bookmarked posts.</p>
                    <p>There are no likes or dislikes, other users will not know if anyone has or has not bookmarked their posts or chose to follow them.</p>
                    <p>We hope this app can uplift your life....even if just a little.</p>
                </section>
                <section className="learnmore">
                    <h2>How do you use Uplift?</h2>
                    <p>This app works like many social media apps. Once logged in, you will be taken to a screen of posts from people you follow and your own.</p>
                    <p>You can filter the post by type of post, such as books or reflections. You can choose to see posts by all users or just your posts.  You can also see only post that you have bookmarked.</p>
                    <p>When viewing your bookmarks, each post will also include a space to write, save, and edit comments you have about that posts. These comments are only for you and are not visible to any other users.</p>
                    <p>For this early version, you can not edit your posts once they have been created, but you can delete your posts and then try again.  Editing your posts will be coming soon!</p>
                </section>
            </main>
        )
    }
}

export default About;