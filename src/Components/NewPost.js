import React, { Component } from 'react';
import Nav from './Nav.js';
import FilterButtons from './FilterButtons.js';
import FilterButtonsForm from './FilterButtonsForm.js';
import OpenUpContext from '../OpenUpContext'
import '../_styles/Form.css';
import ValidationError from './ValidationError'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from '../config.js';
import { faCalendarAlt, faLightbulb,faIdCard, faSmile  } from '@fortawesome/free-regular-svg-icons';
import { faPodcast, faMusic, faBookOpen,faUser, faHome, faInfo} from '@fortawesome/free-solid-svg-icons';


class NewPost extends Component{

    static contextType = OpenUpContext;

    constructor(props){
        super(props);
        this.state={
            error:null,
            submitDisabled:true,
            fieldType:'reflection',
            areTypeSpecificFieldsVisible:{'title':false, 'author':false,'artist':false,'link':false,'content':true, 'descrip':false},
            inputs:{
            title:{value:"",touched:false},
            author:{value:"",touched:false},
            artist:{value:"",touched:false},
            link:{value:"",touched:false},
            content:{value:"",touched:false},
            descrip:{value:"",touched:false},
            post_image:{value:"",touched:false, file:""}}

        }//end of state
    }

    //updates the fields displayed depending on the type of post
    updateFields=(fieldTypeSelected)=>{
        
        const {areTypeSpecificFieldsVisible} = this.state;
        const {inputs} = this.state
        //first resetting fields to not display
        Object.keys(areTypeSpecificFieldsVisible).forEach(key => {
            areTypeSpecificFieldsVisible[key]=false
          });

        //resetting any touched input values to false
        Object.keys(inputs).forEach(key => {
            inputs[key].touched=false;
          });
        //clear values
        Object.keys(inputs).forEach(key => {
            inputs[key].value="";
          });
        inputs.post_image.file="";

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
        }
        else if(fieldTypeSelected==='reflection'){
            areTypeSpecificFieldsVisible['content']=true;
        }

        //clear all form fields 
         this.refs.form.reset();

        this.setState({
            fieldType:fieldTypeSelected,
            inputs:inputs,
            submitDisabled:true,
            areTypeSpecificFieldsVisible:areTypeSpecificFieldsVisible})
    }

    updateChange=(inputValue, id)=>{
       const {inputs} = this.state;
       if(this.state.fieldType==='book'&& id==='by'){
           id='author'
       }
       else if(this.state.fieldType==='music' && id==='by'){
           id='artist'
       }
       if(id!=='post_image'){
          inputs[id]={value:inputValue,touched:true}
       }
       else if(id==='post_image'){
           inputs[id]={file:inputValue[0],touched:true}
       }
       
       this.setState({inputs:inputs})

       this.checkDisableSubmit();
    }

    checkDisableSubmit(){
        
        if(this.state.inputs.post_image.touched){
            this.setState({submitDisabled:false})
        }
        else{
            if(this.state.fieldType === 'music' || this.state.fieldType === 'event' || this.state.fieldType === 'podcast') {
            if( this.state.inputs.title.touched && this.state.inputs.link.touched && this.state.submitDisabled)
            {this.setState({submitDisabled:false})}
            }
            else if(this.state.fieldType==='reflection' && this.state.inputs.content.touched && this.state.submitDisabled){
            this.setState({submitDisabled:false})  
            }
            else if(this.state.fieldType==='book' && this.state.inputs.title.touched && this.state.inputs.author.touched && this.state.submitDisabled){
                this.setState({submitDisabled:false})  
            }  
        }
    }

    validateContent(){
        const content = this.state.inputs.content.value.trim();
        if (content.length>800){
            return 'Please keep posts under 800 characters.'
        } 
    }

    validateLink(){
        const link = this.state.inputs.link.value;
        let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

        if (!regexp.test(link))
        {
            return 'Please enter a valid url'
        }
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        const {inputs, fieldType}=this.state;

        let byValue = ""
        if(fieldType==='book'){
            byValue = inputs.author.value
        }
        else if(fieldType==='music'){
            byValue = inputs.artist.value
        }

        let newPostWithImage = {
            user_id:1,
            post_type:fieldType,
            title:inputs.title.value,
            link:inputs.link.value,
            content:inputs.content.value,
            by:byValue,
            image_path:''
        }
        //let url = `${config.API_DEV_ENDPOINT}/posts`
        let url = `${config.API_ENDPOINT}/posts`

        if(inputs.post_image.file){
            let formData = new FormData();
            const fileField = inputs.post_image.file;
            formData.append('image', fileField);

            //let image_url = `${config.API_DEV_ENDPOINT}/upload`;
           let image_url = `${config.API_ENDPOINT}/upload`;

            fetch(image_url, {
                method: 'POST',
                body: formData,
                headers: {
                   // 'content-type': 'application/json',
                    'Authorization': `Bearer ${config.API_KEY}`
                   },
                })  
            .then(res => {
                return res.json()
            })
            .then(res => {
                newPostWithImage.image_path = res.data.image;
               return  fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(newPostWithImage),
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${config.API_KEY}`
                       },
                  })
            })
           .then(resp => {
                      if (!resp.ok) {
                        // get the error message from the response,
                        return resp.json().then(error => {
                          // then throw it
                          throw error
                        })
                      }
                      return resp.json()
                    })
            .then(post => {
                      this.props.history.push('/dashboard')
                      this.context.addPost(newPostWithImage)
            })
            .catch(error => {
                        this.setState({ error })
            })
        }//end of if statement
       
         else if(!inputs.post_image.file){
                let newPost = {
                    user_id:1,
                    post_type:fieldType,
                    title:inputs.title.value,
                    link:inputs.link.value,
                    content:inputs.content.value,
                    by:byValue,
                    image_path:''
                }
            
            fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(newPost),
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${config.API_KEY}`
                       },
                })
                    .then(res => {
                    if (!res.ok) {
                        // get the error message from the response,
                        return res.json().then(error => {
                        // then throw it
                        throw error
                        })
                    }
                    return res.json()
                    })
                    .then(post => {
                    this.props.history.push('/dashboard')
                    this.context.addPost(newPost)
                    })
                    .catch(error => {
                    this.setState({ error })
                    })
        }//end of else if
    }

    render(){

        const { areTypeSpecificFieldsVisible } = this.state;
        const contentError = this.validateContent();
        const linkError = this.validateLink();

        return(
            <div className="new-post form-page">
                <header>
                    <Nav 
                    pageType={'interior'}
                    />
                </header>
                <main>
                <FilterButtonsForm
                        updateFields = {this.updateFields}
                        buttonInfo={[{aria_label:'fields to create new reflection post',icon_type:faLightbulb,field_type:'reflection',tooltipMessage:'create a reflection post',tooltipClass:'bottom-farright'},{ariaLabel:'fields to create new book post',icon_type:faBookOpen, field_type:'book',tooltipMessage:'create a book post',tooltipClass:'bottom-right'},
                        {aria_label:'fields to create new podcast post',icon_type:faPodcast,field_type:'podcast',tooltipMessage:'create a podcast post',tooltipClass:'bottom-center'},
                        {aria_label:'music posts',icon_type:faMusic, field_type:'music',tooltipMessage:'create a music post',tooltipClass:'bottom-left'},
                        {aria_label:'event posts',icon_type:faCalendarAlt,field_type:'event' ,tooltipMessage:'create an event post',tooltipClass:'bottom-farleft'}]}
                    />

                    <form className="new-post-form" 
                        onSubmit={e=>this.handleSubmit(e)}
                        ref="form">
                        <div className="form-intro">
                            <p>Please use the buttons above to select the type of post you want to create and the form below to share some positivity with others.<FontAwesomeIcon className="filter-icon inline-block-icon" icon={faSmile} /></p>
                            <h2>Create a new {this.state.fieldType} post</h2>
                        </div>
                        <div>
                            <div className={`form-field-group field-title ${areTypeSpecificFieldsVisible['title'] ? "" : " hidden"}`}>
                                <label htmlFor="title">Title*</label>
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
                                <label htmlFor="link">Link*</label>
                                <input 
                                    type="url" name="link" id="link" placeholder="http://someamazingsite.com"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}/>
                            </div>
                            {this.state.inputs.link.touched  && (<ValidationError message={linkError}/>)}
                            <div className={`form-field-group field-content ${areTypeSpecificFieldsVisible['content'] ? "" : " hidden"} `}>
                                <label htmlFor="content">Content*</label>
                                <textarea
                                    type="textarea" name="content"
                                    id="content"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}
                                    />
                            </div>
                            {this.state.inputs.content.touched  && (<ValidationError message={contentError}/>)}
                            <div className="form-field-group field-img">
                                <label htmlFor="post-image">Upload Screenshot</label>
                                <input
                                    type="file" name="post_image"
                                    accept=".png,.jpg,.gif.bmp, .jpeg"
                                    id="post_image"
                                    alt="user-uploaded-image"
                                    onChange={e => this.updateChange(e.target.files, e.target.id)}
                                    />
                            </div>
                        </div>
                            
                        <div className="form-buttons button-row">    
                            <button 
                                type="submit"
                                disabled={
                                 //   this.state.submitDisabled || this.validateLink()
                                 this.state.submitDisabled
                                }
                            >
                                Post</button>
                            <button type="reset">Cancel</button>
                        </div>
                        <p className="form-disclaimer">We realize that what constitutes postivity is subjective. Please know we reserve the right to remove any post that we do not find meets our guidelines. You are welcome to dispute any removed post and share your feelings regarding it.  You also are always welcome to decide to no longer use our app. Thank you for understanding!</p>  
                    </form>
                    <FilterButtons
                        buttonInfo={[{ariaLabel:'all users',icon_type:faHome, link:'/dashboard',display_change:'allUsers',tooltipMessage:'view posts',tooltipClass:'top-farright'},
                        {aria_label:'my posts',icon_type:faUser, link:'/dashboard', display_change:'user',tooltipMessage:'view your posts',tooltipClass:'top-center'},
                        {aria_label:'my account',icon_type:faIdCard, link:'/my-account',display_change:'all',tooltipMessage:'update your account info',tooltipClass:'top-left'},
                        {aria_label:'learn more',icon_type:faInfo, link:'/learn-more', display_change:'all',tooltipMessage:'learn more about the Uplift app',tooltipClass:'top-farleft'}
                        ]}
                        rowPosition={'row-bottom-all-screens'}
                    
                    />
                </main>
            </div>
        )
    }
}

export default NewPost;
