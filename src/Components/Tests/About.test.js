import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import About from '../About'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`About component`, () => {
    
    it('renders without crashing', () => {

        const div = document.createElement('div');
        ReactDOM.render(<Router><About /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})
