import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";

import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shopPage.component";
import Header from "./Components/header/header.component";
import { auth } from "./firebase/firebase";
import { createUserAcount } from "./firebase/firebase";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-and-sign-up-page.component";
import { SetcurrentUser } from "./redux/reducer/user/user.action";
import { selectCurrentUser } from "./redux/reducer/user/user.selector";
import ChechPage from "./pages/check/check.componenat";

class App extends React.Component {
  discription = null;

  componentDidMount() {
    const { Setcurrent } = this.props;

    this.discription = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserAcount(userAuth);
        onSnapshot(userRef, (snapObj) => {
          Setcurrent({
            id: snapObj.id,
            ...snapObj.data(),
          });
        });
      } else {
        Setcurrent(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.discription = null;
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/check" element={<ChechPage />} />

          <Route
            path="/signin"
            element={
              currentUser ? (
                <Navigate to="/" replace />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  Setcurrent: (user) => dispatch(SetcurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
