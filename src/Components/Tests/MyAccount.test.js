import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MyAccount from '../MyAccount'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`MyAccount component`, () => {
    
    it('renders without crashing', () => {

        const div = document.createElement('div');
        ReactDOM.render(<Router><MyAccount /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})
