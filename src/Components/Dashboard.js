import React, { Component } from 'react';
import Nav from './Nav.js';
import ButtonRow from './ButtonRow.js';
import ResultList from './ResultList.js';
import FilterButtons from './FilterButtons.js';
import SearchRow from './SearchRow'



class Dashboard extends Component{

    render(){
        return(
            <div>
                <header>
                <Nav 
                   pageType={'interior'}
                />
                </header>
                <main>
                    <p>Dashboard</p>
                    <FilterButtons/>
                    <SearchRow/>
                    <ResultList/>
                </main>
                <footer>
                    <ButtonRow
                     links ={[{'/dashboard':'Home'},{'/dashboard':'My Post'},{'/new-post':'New Post'},{'/my-account':'My Account'}]}/>
                </footer>
            </div>
        )
    }
}

export default Dashboard;
