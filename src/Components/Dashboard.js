import React, { Component } from 'react';
import Nav from './Nav.js';
import ButtonRow from './ButtonRow.js';
import ResultList from './ResultList.js';
import FilterButtons from './FilterButtons.js';
import SearchRow from './SearchRow';
import OpenUpContext from '../OpenUpContext.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




class Dashboard extends Component{
    static contextType = OpenUpContext;


    render(){
        return(
            <div>
                <header>
                <Nav 
                   pageType={'interior'}
                />
                </header>
                <main>
                    <FilterButtons
                        buttonInfo={[{ariaLabel:'all types of posts',icon_type:'faHome', post_type:'all'},
                        {aria_label:'reflection posts',icon_type:'faLightbulb',
                        post_type:'reflection'},
                        {aria_label:'book posts',icon_type:'faBookOpen',
                        post_type:'book'},
                        {aria_label:'podcast posts',icon_type:'Podcast',
                        post_type:'podcast'},
                        {aria_label:'music posts',icon_type:'faMusic',
                        post_type:'music'},
                        {aria_label:'event posts',icon_type:'faCalendarAlt',
                        post_type:'event'}]}
                    />
                    <SearchRow/>
                    <ResultList
                    
                    />
                </main>
                <footer>
                    <ButtonRow
                     links ={[{'/dashboard':'Home'},{'/dashboard':'My Posts'},{'/new-post':'New Post'},{'/my-account':'My Account'},{'/bookmarks':'My Bookmarks'}]}/>
                </footer>
            </div>
        )
    }
}

export default Dashboard;
