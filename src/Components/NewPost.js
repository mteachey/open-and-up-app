import React, { Component } from 'react';
import Nav from './Nav.js';
import FilterButtons from './FilterButtons.js';
import '../_styles/Form.css';
import ButtonRow from './ButtonRow.js';


class NewPost extends Component{

    render(){
        return(
            <div class="new-post">
                <header>
                    <Nav 
                    pageType={'interior'}
                    />
                </header>
                <main>
                    <form className="new-post-form" >
                        <FilterButtons/>
                        <div className="form-fields field-title">
                            <div class="form-field-group">
                                <label htmlFor="title">Title or Name</label>
                                <input type="text" name="title" id="title" placeholder="A New Earth"/>
                            </div>
                            <div class="form-field-group field-author">
                                <label htmlFor="author">Author</label>
                                <input type="text" name="author" id="author" placeholder="Eckhart Tolle"/>
                            </div>
                            <div class="form-field-group field-artist">
                                <label htmlFor="artist">Artist</label>
                                <input type="text" name="artist" id="artist" placeholder="Bob Marley"/>
                            </div>
                            <div class="form-field-group field-description">
                                <label htmlFor="descrip">Short Description</label>
                                <textarea
                                    type="textarea"
                                    name="descrip"
                                    id="descrip"
                                    />
                            </div>
                            <div class="form-field-group field-link">
                                <label htmlFor="link">Link</label>
                                <input type="url" name="link" id="link" placeholder="http://someamazingsite.com"/>
                            </div>
                            <div class="form-field-group field-content">
                                <label htmlFor="content">Content</label>
                                <textarea
                                    type="textarea"
                                    name="content"
                                    id="content"
                                    />
                            </div>
                            <div class="form-field-group field-date">
                                <label htmlFor="event-date">Event Date</label>
                                <input
                                    type="date"
                                    name="event-date"
                                    id="event-date"
                                    />
                            </div>
                            <div class="form-field-group field-img">
                                <label htmlFor="post-image">Upload Screenshot</label>
                                <input
                                    type="image"
                                    name="post-image"
                                    id="post-image"
                                    alt="user-uploaded-image"
                                    />
                            </div>
                        </div>
                            
                        <div className="form-buttons button-row">    
                            <button type="submit">Post</button>
                            <button type="reset">Cancel</button>
                        </div>
                        <p class="form-disclaimer">We realize that what constitutes postivity is subjective. Please know we reserve the right to remove any post that we do not find meets our guidelines. You are welcome to dispute any removed post and share your feelings regarding it.  You also are always welcome to decide to no longer use our app. Thank you for understanding!</p>  
                    </form>
                    <ButtonRow
                     links ={[{'/dashboard':'Home'},{'/dashboard':'My Posts'},{'/new-post':'New Post'},{'/my-account':'My Account'}]}/>
                </main>
            </div>
        )
    }
}

export default NewPost;
