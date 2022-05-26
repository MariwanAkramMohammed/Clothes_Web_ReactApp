import React from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../costum-button/custom-button.component";
import HandelSign from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handelSubmit =async (event) => {
    event.preventDefault();
    const {email,password}=this.state;
try{
  await signInWithEmailAndPassword(auth,email,password)
  this.setState({ email: "", password: "" });
}catch(error){
  console.log(error)
}
   

  };
  handelChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className="title">Sign in with your email and password</span>

        <form onSubmit={this.handelSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handelChange}
            label="email"
            value={this.state.email}
            required
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handelChange}
            value={this.state.password}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={HandelSign} SignInGoogle>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
