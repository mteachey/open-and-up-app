import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SinglePost from '../SinglePost'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`SinglePost component`, () => {
    
    it('renders without crashing', () => {

        //pass in any props
        const i = 2;
        const post = {
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
            "image_path":''         
         };
        
    
        const div = document.createElement('div');
        ReactDOM.render(<Router><SinglePost 
            key={i}
            {...post}
            postInfo = {post}
            /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})
