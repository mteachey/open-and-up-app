import React, { Component } from 'react';
import Nav from './Nav.js';
import FilterButtons from './FilterButtons.js';
import FilterButtonsForm from './FilterButtonsForm.js';
import OpenUpContext from '../OpenUpContext'
import '../_styles/Form.css';
import ValidationError from './ValidationError'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faLightbulb,faPlusSquare, faIdCard, faSmile  } from '@fortawesome/free-regular-svg-icons';
import { faPodcast, faMusic, faBookOpen,faUser, faHome} from '@fortawesome/free-solid-svg-icons';


class NewPost extends Component{

    static contextType = OpenUpContext;

    constructor(props){
        super(props);
        this.state={
            error:null,
            submitDisabled:true,
            fieldType:'reflection',
            areTypeSpecificFieldsVisible:{'title':false, 'author':false,'artist':false,'link':false,'content':true, 'descrip':false,'dates':false},
            inputs:{
            title:{value:"",touched:false},
            author:{value:"",touched:false},
            artist:{value:"",touched:false},
            link:{value:"",touched:false},
            content:{value:"",touched:false},
            descrip:{value:"",touched:false},
            event_dates:{value:"",touched:false},
            post_image:{value:"",touched:false}}

        }//end of state
    }

    //updates the fields displayed depending on the type of post
    updateFields=(fieldTypeSelected)=>{
        
        const {areTypeSpecificFieldsVisible} = this.state;
        areTypeSpecificFieldsVisible['title']=false;
        areTypeSpecificFieldsVisible['author']=false;
        areTypeSpecificFieldsVisible['artist']=false;
        areTypeSpecificFieldsVisible['link']=false;
        areTypeSpecificFieldsVisible['content']=false;
        areTypeSpecificFieldsVisible['descrip']=false;
        areTypeSpecificFieldsVisible['dates']=false;

        if(fieldTypeSelected==='book'){
            areTypeSpecificFieldsVisible['title']=true;
            areTypeSpecificFieldsVisible['author']=true;
            areTypeSpecificFieldsVisible['descrip']=true;
        }
        else if(fieldTypeSelected==='music'){
            areTypeSpecificFieldsVisible['artist']=true;
            areTypeSpecificFieldsVisible['link']=true;
            areTypeSpecificFieldsVisible['title']=true;
        }
        else if(fieldTypeSelected==='podcast'){
            areTypeSpecificFieldsVisible['descrip']=true;
            areTypeSpecificFieldsVisible['link']=true;
            areTypeSpecificFieldsVisible['title']=true;
        }
        else if(fieldTypeSelected==='event'){
            areTypeSpecificFieldsVisible['descrip']=true;
            areTypeSpecificFieldsVisible['link']=true;
            areTypeSpecificFieldsVisible['title']=true;
            areTypeSpecificFieldsVisible['dates']=true;
        }
        else if(fieldTypeSelected==='reflection'){
            areTypeSpecificFieldsVisible['content']=true;
        }

        this.setState({
            fieldType:fieldTypeSelected,
            areTypeSpecificFieldsVisible:areTypeSpecificFieldsVisible})
    }

    updateChange=(inputValue, id)=>{
       const {inputs} = this.state;
       inputs[id]={value:inputValue,touched:true}
       this.setState({inputs:inputs})
    }

    checkDisableSubmit(){
        if(this.state.fieldType==='reflection' && this.state.inputs.content.touched && this.state.submitDisabled){
           console.log(`this if ran `)
          // this.setState({submitDisabled:false})  
       }}

    validateContent(){
        const content = this.state.inputs.content.value.trim();
        if (content.length>400){
            return 'Please keep posts under 400 characters.'
        } 
       this.checkDisableSubmit();
       /*else if(this.state.inputs.content.touched && this.state.submitDisabled){
            console.log(`this if ran `)
            this.setState({submitDisabled:false})  
        }*/
    }


    handleSubmit=(e)=>{
        e.preventDefault();
        const {inputs, fieldType}=this.state;

        let newPost = {
        post_id:5,
        user_id:2,
        username:'teachey',
        type:fieldType,
        date_created:"June 25th 2020",
        title:inputs.title.value,
        link:inputs.link.value,
        content:inputs.content.value,
        by:inputs.by.value,
        event_dates:inputs.event_dates.value}
       
        this.context.addPost(newPost)

    }

    render(){

        const { areTypeSpecificFieldsVisible } = this.state;
        const contentError = this.validateContent();

        return(
            <div className="new-post">
                <header>
                    <Nav 
                    pageType={'interior'}
                    />
                </header>
                <main>
                <FilterButtonsForm
                        updateFields = {this.updateFields}
                        buttonInfo={[{aria_label:'fields to create new reflection post',icon_type:faLightbulb,field_type:'reflection'},{ariaLabel:'fields to create new book post',icon_type:faBookOpen, field_type:'book'},
                        {aria_label:'fields to create new podcast post',icon_type:faPodcast,field_type:'podcast'},
                        {aria_label:'music posts',icon_type:faMusic, field_type:'music'},
                        {aria_label:'event posts',icon_type:faCalendarAlt,field_type:'event'}]}
                    />

                    <form className="new-post-form" 
                        onSubmit={e=>this.handleSubmit(e)}>
                        <div className="form-intro">
                            <p>Please use the buttons above to select the type of post you want to create and the form below to share some positivity with others.<FontAwesomeIcon className="filter-icon inline-block-icon" icon={faSmile} /></p>
                            <h2>You can currently create a new {this.state.fieldType} post</h2>
                        </div>
                        <div>
                            <div className={`form-field-group field-title ${areTypeSpecificFieldsVisible['title'] ? "" : " hidden"}`}>
                                <label htmlFor="title">Title</label>
                                <input 
                                    type="text" name="title" id="title" placeholder="A New Earth"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}/>
                            </div>
                            <div 
                                 className={`form-field-group field-author ${areTypeSpecificFieldsVisible['author'] ? "" : " hidden"}`}>
                                <label htmlFor="by">Author</label>
                                <input 
                                    type="text" name="by" id="by" placeholder="Eckhart Tolle"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}/>
                            </div>
                            <div className={`form-field-group field-artist ${areTypeSpecificFieldsVisible['artist'] ? "" : " hidden"}`}>
                                <label htmlFor="by">Artist</label>
                                <input 
                                    type="text" name="by" id="by" placeholder="Bob Marley"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}/>
                            </div>
                            <div className={`form-field-group field-description ${areTypeSpecificFieldsVisible['descrip'] ? "" : " hidden"} `}>
                                <label htmlFor="content">Short Description</label>
                                <textarea
                                    type="textarea" name="content"
                                    id="content"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}
                                    />
                            </div>
                            <div className={`form-field-group field-link ${areTypeSpecificFieldsVisible['link'] ? "" : " hidden"} `}>
                                <label htmlFor="link">Link</label>
                                <input 
                                    type="url" name="link" id="link" placeholder="http://someamazingsite.com"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}/>
                            </div>
                            <div className={`form-field-group field-content ${areTypeSpecificFieldsVisible['content'] ? "" : " hidden"} `}>
                                <label htmlFor="content">Content</label>
                                <textarea
                                    type="textarea" name="content"
                                    id="content"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}
                                    />
                            </div>
                            {this.state.inputs.content.touched  && (<ValidationError message={contentError}/>)}
                            <div className={`form-field-group field-date ${areTypeSpecificFieldsVisible['dates'] ? "" : " hidden"} `}>
                                <label htmlFor="event_date">Event Date</label>
                                <input
                                    type="date" name="event_date"
                                    id="event_date"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}
                                    />
                            </div>
                            <div className="form-field-group field-img">
                                <label htmlFor="post-image">Upload Screenshot</label>
                                <input
                                    type="image" name="post_image"
                                    id="post_image"
                                    alt="user-uploaded-image"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}
                                    />
                            </div>
                        </div>
                            
                        <div className="form-buttons button-row">    
                            <button 
                                type="submit"
                                disabled={
                                    this.state.submitDisabled
                                }

                            >
                                Post</button>
                            <button type="reset">Cancel</button>
                        </div>
                        <p className="form-disclaimer">We realize that what constitutes postivity is subjective. Please know we reserve the right to remove any post that we do not find meets our guidelines. You are welcome to dispute any removed post and share your feelings regarding it.  You also are always welcome to decide to no longer use our app. Thank you for understanding!</p>  
                    </form>
                    <FilterButtons
                        buttonInfo={[{ariaLabel:'all users',icon_type:faHome, link:'/dashboard',display_change:'allUsers'},
                        {aria_label:'my posts',icon_type:faUser, link:'/dashboard', display_change:'user'},
                        {aria_label:'my account',icon_type:faIdCard, link:'/my-account',display_change:'all'},
                        {aria_label:'add new post',icon_type:faPlusSquare, link:'/new-post', display_change:'all'}
                        ]}
                    
                    />
                </main>
            </div>
        )
    }
}

export default NewPost;
