// Import necessary modules/components
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useLocation, useNavigate } from "react-router-dom";
import StButton from "../../accessibilties/StButtons";
import fabric from "../assets/background/fabric.jpg";

export default function RegisterScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const search = location.search;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobNumber, setMobNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Password and Confirm Password do not match.");
    } else {
      dispatch(register(name, email, password, otp, mobNumber));
    }
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
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox varient="danger">{error}</MessageBox>}
      <img src={fabric} alt="fabric" className="fabric" />
      <form className="signin-form-card" onSubmit={submitHandler}>
        <h1>Create New Account</h1>
        <div className="register-form-conmtainer">
          <div className="password-containers">
            <label className="admin-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="admin-input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </div>
        </div>
        <StButton
          style={{ width: "250px", fontSize: "16px", fontWeight: 600 }}
          name={"Register"}
          type="submit"
        />
        <div className="new-customer">
          <p>Already have an account?</p>
          <Link href={`/signin?redirect=${redirect}`}>Sign-In</Link>
        </div>
      </form>
    </div>
  );
}
