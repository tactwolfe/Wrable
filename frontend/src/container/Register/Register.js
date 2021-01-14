import React,{Component} from 'react';

import registerIllustration from '../../assets/image/registerIllustration.svg';

import './Register.css';


class Register extends Component{

    render(){
        return(
            <div className="register">
                <div className="register_illustration">
                    <img src={registerIllustration} alt="img" className="register_img"/>
                </div>
                <div className="register_box">
                    <p className="register_heading">Oh! i see you have not joined yet :(</p>
                    <p className="register_subheading">Please register yourself 😀</p>
                    <form className="register_form">
                            <div className="register_form_container">
                                <input type="text" placeholder="Enter Your Name" name="name" className="register_form_input" required/>
                                <label htmlFor="name" className="register_form_label">Enter Your Name</label>
                            </div>
                            <div className="register_form_container">
                                <input type="email" placeholder="Enter Your Email" name="email" className="register_form_input" required/>
                                <label htmlFor="email" className="register_form_label">Enter Your Email</label>
                            </div>
                            <div className="register_form_container">
                                <input type="password" placeholder="Password" name="password" className="register_form_input" required/>
                                <label htmlFor="password" className="register_form_label">Password</label>
                            </div>
                            <input type="submit" className="register_form_button" value="register"/>  
                    </form>
                </div>
         
            </div>
        );
    }
}

export default Register;

