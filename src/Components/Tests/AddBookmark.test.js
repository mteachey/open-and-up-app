import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddBookmark from '../AddBookmark'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`AddBookmark component`, () => {
    
    it('renders without crashing', () => {

        //pass in any props
        const post_id = 1;
        const allPostInfo = {
            "post_id":1,
            "user_id":1,
            "username":"melinda",
            "title":"",
            "link":"",
            "event_dates":"",
            "by":"",
            "content":"My inner growth propelled me to by my own 'I'-to be an authentic woman who was contained in herself, who chose and determined and handled her life from her own genuine spiritual center  -Sue Monk Kidd",
            "type":"reflection",
            "date_created":"June 7th 2020",
            "image_path":'',        
         };
        const currentUserId = 1;

        const div = document.createElement('div');
        ReactDOM.render(<Router><AddBookmark 
            postId={post_id}
            allPostInfo={allPostInfo}
            currentUserId ={currentUserId}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})

