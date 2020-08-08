import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LearnMorePage from '../LearnMorePage'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`LearnMorePage component`, () => {
    
    it('renders without crashing', () => {

    
        const div = document.createElement('div');
        ReactDOM.render(<Router><LearnMorePage /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})
