import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../costum-button/custom-button.component";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUserAcount } from "../../firebase/firebase";
import "./sign-up.style.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  // first up date the states with altered stuff
  handelChage = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handelSubmit = async (event) => {

    event.preventDefault();
    // THEY already updated with handelchage
    const { displayName, email, password, confirmPassword } = this.state;

      if (password !== confirmPassword){
        alert("your pssword and confirm password is not equal !");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserAcount(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have acount !</h2>
        <span>Sign up with Email and Password</span>
        <form className="sign-up-from" onSubmit={this.handelSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handelChage}
            label="display name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handelChage}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handelChage}
            label="password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handelChage}
            label="confirmPassword"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
