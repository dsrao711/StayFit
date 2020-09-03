import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props){
        super(props) ;
        this.onChangeUsername = this.onChangeUsername.bind(this) ;
        this.onSubmit = this.onSubmit.bind(this) ;
        this.state = {
            username : ''
        };
    }

    onChangeUsername(e){
        this.setState({
            username : e.target.value 
        });
    }

    onSubmit(e){
        e.preventDefault() ;

        const newUser  = {
            username : this.state.username 
        }

        axios.post('http://localhost:5000/users/add', newUser)
        .then(res => console.log(res.data));
        this.setState({
            username : ''
        })
    }

    render() {


        return (
            <div>
                <h2>Create User</h2>
                <form onSubmit = {this.onSubmit}> 
                <div className = "form-group">
                    <label>Username :</label>
                    <input
                        type = "text" 
                        placeholder = "Input the name" 
                        className = "form-control"
                        value = {this.state.username}
                        onChange = {this.onChangeUsername}
                        required
                    />
                </div>
                <div className = "form-group">
                    <input
                        type = "submit" 
                        className = "btn btn-primary"
                        value = "Create User"
                    />
                </div>
                </form>
            </div>
        );
    }
}
