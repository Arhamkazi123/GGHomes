import React from "react";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import styles from "./Footer.module.css";
import logoimg from "../../images/newgghoes.jpg";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin
            className={styles.icon}
            style={{ fontSize: "24px" }}
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram
            className={styles.icon}
            style={{ fontSize: "24px" }}
          />
        </a>
        <a href="tel:+919967056635" target="_blank" rel="noopener noreferrer">
          <IoCallSharp className={styles.icon} style={{ fontSize: "24px" }} />
        </a>

        <a
          href="mailto:kaziarham2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoIosMail className={styles.icon} style={{ fontSize: "24px" }} />
        </a>
      </div>

      <div className={styles.tackyLines}>
        <img src={logoimg} alt="GG Homes" className={styles.logo} />
        <p
          style={{
            fontSize: "18px",
            color: "#132f40",

            fontFamily: "Poppins",
          }}
        >
          You've always got a <span style={{ color: "#D9A86C" }}>Friend</span>{" "}
          in GG Homes!
        </p>
        <div className={styles.text}>
          <p>Privacy &nbsp;Policy&nbsp; Terms and Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
