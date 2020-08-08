import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddConnection from '../AddConnection'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`AddConnection component`, () => {
    
    it('renders without crashing', () => {

        //pass in any props
        const user_id = 2;
        const currentUserId = 1;

        const div = document.createElement('div');
        ReactDOM.render(<Router><AddConnection 
            userId={user_id}
            currentUserId ={currentUserId}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})

