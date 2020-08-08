import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import IconButton from '../IconButton'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { faUser} from '@fortawesome/free-solid-svg-icons';



describe(`IconButton component`, () => {
    
    it('renders without crashing', () => {

        //pass in any props
        const i = 1; 
        const link = '/about';
        const ariaLabel = 'my posts'
        const displayChange='user'
        const iconType = faUser;
        const tooltipMessage = 'view all your posts';
        const tooltipClass = 'top-center';
    
        const div = document.createElement('div');
        ReactDOM.render(<Router><IconButton 
                        key={i} 
                        link={link}
                        ariaLabel={ariaLabel}
                        displayChange={displayChange}
                        iconType={iconType}
                        tooltipMessage = {tooltipMessage}
                        tooltipClass = {tooltipClass}
            /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})
