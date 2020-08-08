import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import UpdateBookmark from '../UpdateBookmark'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`UpateBookmark component`, () => {
    
    it('renders without crashing', () => {

        //pass in any props
        const bookmark_content = 'some test content';
        const bookmark_id = 1;

        const div = document.createElement('div');
        ReactDOM.render(<Router><UpdateBookmark bookmark_content={bookmark_content}
            bookmark_id={bookmark_id}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})

