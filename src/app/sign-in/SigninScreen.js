import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useLocation, useNavigate } from "react-router-dom";
import StButton from "../../accessibilties/StButtons";


export default function SigninScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const search = location.search;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo, loading, error } = userSignIn;
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    const redirectTo = search ? search.split("=")[1] : "/";
    setRedirect(redirectTo);
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo, search]);

  return (
    <div className="signin-form">
      <form className="signin-form-card" onSubmit={submitHandler}>
        <h1>Sign In</h1>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox varient="danger">{error}</MessageBox>}
        <div>
          <label className="admin-label" htmlFor="email">
            Email address
          </label>
          <input
            className="admin-input"
            type="email"
            id="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="admin-label" htmlFor="password">
            Enter password{" "}
          </label>
          <input
            className="admin-input"
            type="password"
            id="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <StButton
          type="submit"
          name={"Sign In"}
          style={{ width: "250px", fontSize: "16px", fontWeight: 600 }}
        />
        <div className="new-customer">
          <p>New customer?</p>
          <Link href={`/register?redirect=${redirect}`}>Create Your Account</Link>
        </div>
      </form>
    </div>
  );
}
