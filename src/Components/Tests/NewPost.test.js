import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NewPost from '../NewPost'
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`NewPost component`, () => {
    
    it('renders without crashing', () => {

       
        const div = document.createElement('div');
        ReactDOM.render(<Router><NewPost/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})
