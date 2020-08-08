import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import DeletePost from '../DeletePost'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`DeletePost component`, () => {
    
    it('renders without crashing', () => {

        //pass in any props
        const post_id = 1;

        const div = document.createElement('div');
        ReactDOM.render(<Router><DeletePost postId={post_id}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})

