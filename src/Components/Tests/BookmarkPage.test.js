import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import BookmarkPage from '../BookmarkPage'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`BookmarkPage component`, () => {
    
    it('renders without crashing', () => {

        const div = document.createElement('div');
        ReactDOM.render(<Router><BookmarkPage /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})
