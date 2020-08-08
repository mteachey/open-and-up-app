import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ResultList from '../ResultList'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`ResultList component`, () => {
    
    it('renders without crashing', () => {

       const posts=[ {
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
            },
            {
            "post_id":6,
            "user_id":2,
            "username":"teachey",
            "title":"Untamed",
            "link":"",
            "event_dates":"",
            "by":"Glennon Doyle",
            "content":"Soulful and uproarious, forceful and tender, Untamed is both an intimate memoir and a galvanizing wake-up call. It is the story of how one woman learned that a responsible mother is not one who slowly dies for her children, but one who shows them how to fully live.",
            "type":"book",
            "date_created":"June 9th 2020",
            "image_path":''          
        }];
        const postsToDisplay='posts';
        

    
        const div = document.createElement('div');
        ReactDOM.render(<Router><ResultList 
            heading = {'Posts'}
            postsToDisplay = {postsToDisplay}
            posts = {posts}
            /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})
