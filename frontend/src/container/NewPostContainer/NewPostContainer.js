import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

import './NewPostContainer.css';

import Logo from '../../assets/image/logo.png';
import Logout from '../../assets/image/logout.svg';

import NewPost from '../../component/newpost/NewPost';

class NewPostContainer extends Component {

    componentDidMount() {
        // axios.get()
        // axios.get()
    }

    render(){

        return(
            <div className="new-post">
                <header className="new-post_navigation">
                    <nav className="new-post_nav">
                        <div className="new-post_nav_logo-box">
                            <img src={Logo} alt="logo" className="new-post_nav_logo"/>
                            <h2 className="new-post_nav_name">WRABLE</h2>
                        </div> 
                        <ul className="new-post_nav_ul">
                            <li className="new-post_nav_links"><NavLink to="/home" exact className="new-post_nav_link">Home</NavLink></li>
                            <li className="new-post_nav_links"><NavLink to="/home/my-post" exact className="new-post_nav_link">My posts</NavLink></li>
                            <li className="new-post_nav_links"><NavLink to="/new-post"  className="new-post_nav_link">Post Something</NavLink></li>
                        </ul>
                        <NavLink to="/logout" exact><img src={Logout} alt="logout" className="logout"/></NavLink>
                    </nav>
                </header>
                <div className="new-post_postholder">
                    <NewPost/>
                </div>
            </div>
        );
    }
}

export default NewPostContainer;