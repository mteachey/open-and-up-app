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


class UpdateBookmark extends Component{

    static contextType = OpenUpContext;

    constructor(props){
        super(props);
        this.state={
            error:null,
            submitDisabled:true,
            content:{value:"",touched:false
        }//end of state
    }

    //updates the fields displayed depending on the type of post
    updateFields=(fieldTypeSelected)=>{
        //resetting any touched input values to false
        content.touched=false;
        //clear values
        content.value="";
          };
        //clear all form fields 
         this.refs.form.reset();

        this.setState({
       })
    }

    updateChange=(inputValue, id)=>{
       const {content} = this.state;
       content={value:inputValue,touched:true}
       this.setState({content:content})
     //  this.checkDisableSubmit();
    }

    checkDisableSubmit(){
          if( this.state.inputs.title.touched && this.state.inputs.link.touched && this.state.submitDisabled)
           {this.setState({submitDisabled:false})}
    }

    validateContent(){
        const content = this.state.inputs.content.value.trim();
        if (content.length>800){
            return 'Please keep posts under 800 characters.'
        } 
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        const {content}=this.state;
        console.log(content)
        
     //boomark plus new content
      let updatedBookmark = {
       }
     //find bookmark and update
        console.log(updatedBookmark)

        let url = `${config.API_DEV_ENDPOINT}/bookmarks/${bookmark_id}`

       /* fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(updatedBookmark),
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

        const { content } = this.state;
       // const contentError = this.validateContent();
        
        return(
            <div className="bookmark">
                <header>
                    <Nav 
                    pageType={'interior'}
                    />
                </header>
                <main>
                    <form className="new-post-form" 
                        onSubmit={e=>this.handleSubmit(e)}
                        ref="form">
                        <div className="form-intro">
                            <p>Please use the space below to add or edit your bookmark comments.</p>
                        </div>
                        <div>
                           
                            <div className={`form-field-group field-content ${areTypeSpecificFieldsVisible['content'] ? "" : " hidden"} `}>
                                <label htmlFor="content">Content*</label>
                                <textarea
                                    type="textarea" name="content"
                                    id="content"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}
                                    />
                            </div>
                            {this.state.inputs.content.touched  && (<ValidationError message={contentError}/>)}
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
                    </form>
                </main>
            </div>
        )
    }
}

export default UpdateBookmark;
