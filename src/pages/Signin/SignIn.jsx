import React, { use } from "react";
import Lottie from "lottie-react";
import signInLottie from "../../assets/lotties/Login.json";
import { AuthContext } from "../../contexts/AuthContext";
import SocialLogIn from "../Shared/SocialLogIn";
import { useLocation, useNavigate } from "react-router";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  console.log("location in sign in:", location);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Sign In Method
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            animationData={signInLottie}
            style={{ width: "450px" }}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <form className="fieldset" onSubmit={handleSignIn}>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign In</button>
            </form>
            <SocialLogIn from={from}></SocialLogIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
