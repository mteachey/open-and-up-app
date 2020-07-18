import React, { Component } from 'react';
import Nav from './Nav.js';
import FilterButtons from './FilterButtons.js';
import FilterButtonsForm from './FilterButtonsForm.js';
import OpenUpContext from '../OpenUpContext'
import '../_styles/Form.css';
import ValidationError from './ValidationError'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from '../config.js';
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
      // console.log(inputs.post_image.value)
       if(this.state.fieldType==='book'&& id==='by'){
           id='author'
       }
       else if(this.state.fieldType==='music' && id==='by'){
           id='artist'
       }
       inputs[id]={value:inputValue,touched:true}
       this.setState({inputs:inputs})

       this.checkDisableSubmit();
    }

    checkDisableSubmit(){
        console.log(`cDS ${this.state.fieldType} ${this.state.inputs.title.touched} ${this.state.inputs.author.touched} ${this.state.submitDisabled}`)
        if(this.state.inputs.post_image.touched){
            this.setState({submitDisabled:false})
        }
        else{
            if(this.state.fieldType === 'music' || this.state.fieldType === 'event' || this.state.fieldType === 'podcast') {
            if( this.state.inputs.title.touched && this.state.inputs.link.touched && this.state.submitDisabled)
            {this.setState({submitDisabled:false})}
            }
            else if(this.state.fieldType==='reflection' && this.state.inputs.content.touched && this.state.submitDisabled){
            console.log(`this reflection if ran `)
            this.setState({submitDisabled:false})  
            }
            else if(this.state.fieldType==='book' && this.state.inputs.title.touched && this.state.inputs.author.touched && this.state.submitDisabled){
                console.log(`this book if ran `)
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
        console.log(inputs)

        if(inputs.post_image.value){
            let formData = new FormData();
            const fileField = inputs.post_image.value;
            console.log(fileField)
            formData.append('image', fileField);
            console.log(formData)

            let image_url = `${config.API_DEV_ENDPOINT}/upload`;
            console.log(image_url)

            fetch(image_url, {
                method: 'POST',
                body: formData
                })
            .then(() => {
                console.log(`called worked`)
                //response.json()
            })
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', JSON.stringify(response)))
        }

        let byValue = ""
        if(fieldType==='book'){
            byValue = inputs.author.value
        }
        else if(fieldType==='music'){
            byValue = inputs.artist.value
        }
        
      let newPost = {
        user_id:1,
        post_type:fieldType,
        title:inputs.title.value,
        link:inputs.link.value,
        content:inputs.content.value,
        by:byValue}

        console.log(newPost)

        let url = `${config.API_DEV_ENDPOINT}/posts`

      /*  fetch(url, {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
              'content-type': 'application/json',
             // 'authorization': `Bearer ${config.API_KEY}`
            }
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
            // title.value = ''
             // url.value = ''
             // description.value = ''
              //rating.value = ''
              console.log(`this is the new post from res`)
              console.log(post)
              this.props.history.push('/dashboard')
              this.context.addPost(newPost)
              //this.props.onAddBookmark(data)
            })
            .catch(error => {
              this.setState({ error })
            })*/
    }

    render(){

        const { areTypeSpecificFieldsVisible } = this.state;
        const contentError = this.validateContent();
        const linkError = this.validateLink();

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
                        onSubmit={e=>this.handleSubmit(e)}
                        ref="form">
                        <div className="form-intro">
                            <p>Please use the buttons above to select the type of post you want to create and the form below to share some positivity with others.<FontAwesomeIcon className="filter-icon inline-block-icon" icon={faSmile} /></p>
                            <h2>You can currently create a new {this.state.fieldType} post</h2>
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
                                    type="file" name="post_image"
                                    accept=".png,.jpg,.gif.bmp, .jpeg"
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
