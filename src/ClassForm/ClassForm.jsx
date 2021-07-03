import React,{Component} from "react"
import { div } from "prelude-ls";
import "./ClassForm.css";

class ClassForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        email: "",
        password: "",
      }
    }
  
      handleChange = (e) => { 
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});

      }

      handleSubmit = (e) => {
          e.preventDefault();
          this.setState({username:"", email:"", password:""});
      }
  
    render () {
        return(
          <div className="Container">
            <h1 className="form">React Registration Form </h1> <hr />
            <form
            onSubmit = {this.handleSubmit}>
                <label htmlFor="">username</label>
                <input type="text" 
                name="username" value={this.state.username} onChange={this.handleChange}>
                </input> <br />
                <label htmlFor="">email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}>
                </input> <br />
                <label htmlFor="">password</label>
                <input type="text" name="password" value={this.state.password} onChange={this.handleChange}>
                </input> <br />
                <button type="submit" value="Submit" onClick={this.setState.submit}>Submit</button>
            </form>
            </div>
           
        );
     }
    }
    export default ClassForm;