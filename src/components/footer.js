import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="global-outer">
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
      <div className="footer-right">
        <div className="links-flex">
          <Link href={"#"}>
            Privacy Policy
          </Link>
          <Link href={"#"}>
            User Policy
          </Link>
          <Link href={"#"}>
            Contact Us
          </Link>
          <Link href={"#"}>
            About Us
          </Link>
          <Link href={"#"}>
            Track my Order
          </Link>
          <Link href={"#"}>
            Return Policy
          </Link>
        </div>
        <div className="copyright">
          <p>Copyright © 2024 Stonners . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
