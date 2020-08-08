import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LearnMoreContent from '../LearnMoreContent'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`LearnMoreContent component`, () => {
    
    it('renders without crashing', () => {

    
        const div = document.createElement('div');
        ReactDOM.render(<Router><LearnMoreContent /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})
