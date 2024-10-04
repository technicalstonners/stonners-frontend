"use client";
import React from "react";
import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import { signout } from "../../actions/userActions";
import Image from "next/image";
import StButton from "@/accessibilties/StButtons";

function Navbar() {
  // const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);
  // const { cartItems } = cart;
  // const userSignIn = useSelector((state) => state.userSignIn);
  // const { userInfo } = userSignIn;

  // const signOutHandler = () => {
  //   dispatch(signout());
  // };

  return (
    <div className="global-outer d-flex-between">
        <Link href={"/"} className="d-flex-center">
          <Image
            src={"/assets/images/stonnersSVG.svg"}
            alt="Stonner logo"
            width={123}
            height={101}
          />
          <Image
            src={"/assets/images/stonnersLifestyle.svg"}
            alt="Stonner tag"
            width={210}
            height={70}
          />
        </Link>
      <nav className="d-flex-center links-flex">
          <Link href={"#"} className="nav-link">
            Home
          </Link>
          <Link href={"#"} className="nav-link">
            About
          </Link>
          <Link href={"#"} className="nav-link">
            Cart
          </Link>
          <Link href={"#"} className="nav-link">
            Sign in
          </Link>
      </nav>
      <StButton name={"Signup"} />
    </div>
  );
}

export default Navbar;
