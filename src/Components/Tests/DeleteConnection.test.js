import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import DeleteConnection from '../DeleteConnection'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`Delete Connection component`, () => {
    
    it('renders without crashing', () => {

        //pass in any props
        const user_id = 2;
        const currentUserId = 1;

        const div = document.createElement('div');
        ReactDOM.render(<Router><DeleteConnection userId={user_id} currentUserId ={currentUserId}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})
