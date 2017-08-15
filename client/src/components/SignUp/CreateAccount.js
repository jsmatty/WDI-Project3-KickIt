import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class CreateAccount extends Component {

_handleChangeFirstName = (e) => {
		e.preventDefault();
		const firstName = e.target.value;
		this.setState({firstName});
	};

	_handleChangeEmail = (e) => {
		e.preventDefault();
		const email = e.target.value;
		this.setState({email});
  };
	_handleChangeUserName = (e) => {
		e.preventDefault();
		const userName = e.target.value;
		this.setState({userName});
	};
  	_handleChangePassword = (e) => {
		e.preventDefault();
		const password = e.target.value;
		this.setState({password});
	};
	_handleChangeAge = (e) => {
		e.preventDefault();
		const age = e.target.value;
		this.setState({age});
	};
  	_handleChangeAddiction = (e) => {
		e.preventDefault();
		const addiction = e.target.value;
		this.setState({addiction});
	};

  _handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		console.log(e);
		axios.post("/api/user", this.state).then((res) => {
			const newState = {...this.state};
			newState.firstName = res.data.firstName;
			newState.email = res.data.email;
			newState.username = res.data.username;
			newState.password = res.data.password;
			newState.age = res.data.age;
			newState.addiction = res.data.addiction;
      this.setState(newState);
			console.log(this.state);
		})
		.catch(err => console.log(err));
	};

  render() {
		return (
			<div>
				<h1>Create Account</h1>
				<form>
					<div>
						<input onChange={this._handleChangeFirstName} type="text" name="firstName" placeholder="First Name"/>
          </div>
          <div>  
						<input onChange={this._handleChangeEmail} type="text" name="email" placeholder="Email"/>
					</div>
					<div>
						<input onChange={this._handleChangeUsername} type="text" name="username" placeholder="Username"/>
					</div>
          <div>	
            <input onChange={this._handleChangePassword} type="text" name="password" placeholder="Password"/>
					</div>
					<div>
					  <input onChange={this._handleChangeAge} type="text" name="age" placeholder="MM/DD/YYYY"/>
          </div>
          <div>  
						<input onChange={this._handleChangeAddiction} type="text" name="addiction" placeholder="Addiction"/>
					</div>
          <div>
          	<input onClick={this._handleSubmit} type="submit"/>
          </div>
        </form>
      </div>
			
		)
	};
}		
          
export default CreateAccount;