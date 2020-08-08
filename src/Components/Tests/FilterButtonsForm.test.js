import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import FilterButtonsForm from '../FilterButtonsForm'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { faUsers} from '@fortawesome/free-solid-svg-icons';


describe(`FilterButtonsForm component`, () => {
    
    it('renders without crashing', () => {

        //pass in any props
        const buttonInfo=[{ariaLabel:'all users',icon_type:faUsers, link:'/dashboard',display_change:'allUsers',tooltipMessage:'view all posts of all users', tooltipClass:'top-farright'}];
    
        const div = document.createElement('div');
        ReactDOM.render(<Router><FilterButtonsForm
                        buttonInfo={buttonInfo}
            /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})
