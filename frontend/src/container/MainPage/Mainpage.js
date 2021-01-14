import React , {Component} from 'react';
import {NavLink , Route ,Switch} from 'react-router-dom';
import axios from 'axios';

import './Mainpage.css';

import Logo from '../../assets/image/logo.png';
import Logout from '../../assets/image/logout.svg';

import Post from '../../component/Post/Post';
import NewPost from '../../component/newpost/NewPost';

import Aux from '../../hoc/Auxillary';


class MainPage extends Component {

    state={
        posts : [
            {
                key : '1',
                name : "user 1",
                para : "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                key : '2',
                name : "user 2",
                para : "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                key : '3',
                name : "user 3",
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                key : '4',
                name : "user 4",
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                key : '5',
                name : "user 5",
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                key : '6',
                name : "user 6",
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                key : '7',
                name : "user 7",
                para : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },

        ]
    }

    componentDidMount() {
        // axios.get()
        // axios.get()
    }

    render(){

        const post = this.state.posts.map( post => {
            return <Post author={post.name} posts={post.para} key={post.key}/>
        });

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
                        <NavLink to="/" exact><img src={Logout} alt="logout" className="logout"/></NavLink>
                    </nav>
                </header>
                <div className="main_postholder">
                    <Route to="/home" exact  render={()=><Aux>{post}</Aux>}/>
                </div>
            </div>
        );
    }
}

export default MainPage;