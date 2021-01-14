import React,{Component} from 'react';

import LoginIllustration from '../../assets/image/landingpage-illustration.svg';

import './Login.css';


class Login extends Component{

    render(){
        return(
            <div className="login">
                <div className="login_illustration">
                    <img src={LoginIllustration} alt="img" className="login_img"/>
                </div>
                <div className="login_box">
                    <p className="login_heading">Welcome to <span style={{color:"orangered"}}>WRABLE</span></p>
                    <p className="login_subheading">a simple twitter clone</p>
                    <p className="login_subheading_sub">Please login to continue</p>
                    <form className="login_form">
                            <div className="login_form_container">
                                <input type="email" placeholder="Enter Your Email" name="email" className="login_form_input" required/>
                                <label htmlFor="email" className="login_form_label">Enter Your Email</label>
                            </div>
                            <div className="login_form_container">
                                <input type="password" placeholder="Password" name="password" className="login_form_input" required/>
                                <label htmlFor="password" className="login_form_label">Password</label>
                            </div>
                            <input type="submit" className="login_form_button" value="Login"/>  
                        <p className="login_para">Not a member?<span><a href="/register" className="login_page_register"> Register</a></span></p>
                    </form>
                </div>
         
            </div>
        );
    }
}

export default Login;

