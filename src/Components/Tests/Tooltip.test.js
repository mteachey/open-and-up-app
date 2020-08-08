import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Tooltip from '../Tooltip'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`Tooltip component`, () => {
    
    it('renders without crashing', () => {

        //pass in any props
        const tooltipMessage = 'view posts of all types ';
        const tooltipClass = 'bottom-farright';
    
        const div = document.createElement('div');
        ReactDOM.render(<Router><Tooltip 
            message={`${tooltipMessage}.`} 
            positionClass={tooltipClass}
            /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})
