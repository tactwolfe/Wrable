import React , {Component} from 'react';
import {NavLink , Route } from 'react-router-dom';
import axios from 'axios';

import './Mainpage.css';

import Logo from '../../assets/image/logo.png';
import Logout from '../../assets/image/logout.svg';

import Post from '../../component/Post/Post';
import Aux from '../../hoc/Auxillary';


class MainPage extends Component {

    state={
        posts : []
    }

    //lifecycle method that will call the fetch post method whenever our component is mounted
    componentDidMount() {
        this.getPost();
    }

    //method that will fetch for us from the database
    getPost = ()=> {
        axios.get('/home')
        .then((response)=>{
            const data = response.data;
            this.setState({post : data});
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    //method that will display our post
    displayPost = (posts)=> {
        if(!posts.length){
            return <h1 style={{color : "white"}}>Sorry no post Have submitted by any of our users yet !!</h1>
        }else{
            posts.map( post => {
                return <Post author={post.name} posts={post.para} key={post.key}/>
            });
        }
    }

    render(){
        return(
            <div className="main">
                <header className="main_navigation">
                    <nav className="main_nav">
                        <div className="main_nav_logo-box">
                            <img src={Logo} alt="logo" className="main_nav_logo"/>
                            <h2 className="main_nav_name">WRABLE</h2>
                        </div> 
                        <ul className="main_nav_ul">
                            <li className="main_nav_links"><NavLink to="/home" exact className="main_nav_link">Home</NavLink></li>
                            <li className="new-post_nav_links"><NavLink to="/home/my-post" exact className="new-post_nav_link">My posts</NavLink></li>
                            <li className="main_nav_links"><NavLink to="/new-post"  className="main_nav_link">Post Something</NavLink></li>
                        </ul>
                        <NavLink to="/logout" exact><img src={Logout} alt="logout" className="logout"/></NavLink>
                    </nav>
                </header>
                <div className="main_postholder">
                    <Route to="/home" exact  render={()=><Aux>{this.displayPost(this.state.posts)}</Aux>}/>
                </div>
            </div>
        );
    }
}

export default MainPage;