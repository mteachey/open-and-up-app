import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import FilterButtons from '../FilterButtons'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { faUsers} from '@fortawesome/free-solid-svg-icons';


describe(`FilterButtons component`, () => {
    
    it('renders without crashing', () => {

        //pass in any props
        const buttonInfo=[{ariaLabel:'all users',icon_type:faUsers, link:'/dashboard',display_change:'allUsers',tooltipMessage:'view all posts of all users', tooltipClass:'top-farright'}];
        const rowPosition ='row-bottom';
        const pageType='dashboard'
    
        const div = document.createElement('div');
        ReactDOM.render(<Router><FilterButtons
                        buttonInfo={buttonInfo}
                        rowPosition={rowPosition}
                        pageType={pageType}
            /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})
