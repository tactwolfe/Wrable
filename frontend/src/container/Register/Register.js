
import React,{Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import registerIllustration from '../../assets/image/registerIllustration.svg';

import './Register.css';


class Register extends Component{

    state = {
        name : '',
        email : '',
        password : ''
    }

    //to handle change in our input and update it in our state
    handleChange = (event)=> {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name] : value
        });
    }

    submitHandler = (event)=> {
        event.preventDefault();

        const payload = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password
        };

        axios.post('/register',payload)
            .then(()=>{
                console.log("data of user has been send to the server");
                // <Redirect to="/home"/>
            })
            .catch((err)=>{
                console.log('internal server error');
            });

    };

    render(){

        console.log('state', this.state);

        return(
            <div className="register">
                <div className="register_illustration">
                    <img src={registerIllustration} alt="img" className="register_img"/>
                </div>
                <div className="register_box">
                    <p className="register_heading">Oh! i see you have not joined yet :(</p>
                    <p className="register_subheading">Please register yourself 😀</p>
                    <form className="register_form" onSubmit={this.submitHandler}>
                            <div className="register_form_container">
                                <input type="text" placeholder="Enter Your Name" name="name" className="register_form_input" value={this.state.name} onChange={this.handleChange} required/>
                                <label htmlFor="name" className="register_form_label">Enter Your Name</label>
                            </div>
                            <div className="register_form_container">
                                <input type="email" placeholder="Enter Your Email" name="email" className="register_form_input" value={this.state.email} onChange={this.handleChange} required/>
                                <label htmlFor="email" className="register_form_label">Enter Your Email</label>
                            </div>
                            <div className="register_form_container">
                                <input type="password" placeholder="Password" name="password" className="register_form_input" value={this.state.password} onChange={this.handleChange} required/>
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

