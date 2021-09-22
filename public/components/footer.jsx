import React from "react";
import st from "../../styles/components/footer.module.css";
import {
  FaMedium,
  FaGithubSquare,
  FaTwitterSquare,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={st.footer}>
      {/* <video
          src="./assets/parallex-banner.mp4"
          muted={true}
          autoPlay={true}
          loop={true}
          className={st.parallexBackground}
        ></video> */}
      <div className="box">
        <div className={st.footerGrid}>
          <div className={st.footerGridBox}>
            <h1>Useful Links</h1>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <a href="https://pulse.opsci.io/">News</a>
            <Link href="/research">Research</Link>
            <Link href="/faq">FAQ's</Link>
            <Link href="/careers">Careers</Link>
          </div>
          <div className={st.footerGridBox}>
            <h1>Social Links</h1>
            <a href="https://pulse.opsci.io/">
              <FaMedium /> Medium
            </a>
            <a href=" https://github.com/opscientia">
              <FaGithubSquare /> GitHub
            </a>
            <a href="https://twitter.com/opscientia">
              <FaTwitterSquare /> Twitter
            </a>
            <a href="https://discord.com/invite/n7UBwrGywZ">
              <FaDiscord /> Discord
            </a>
            <a href=" https://www.youtube.com/channel/UCwMN9E4uZ0jYOo9rDuFb0_Q">
              <FaYoutube /> YouTube
            </a>
          </div>
          <div className={st.footerGridBox}>
            <h1>Subscribe to our Email List</h1>
            <input type="text" placeholder="Email" />
          </div>
        </div>
        <p className={st.copyStatement}>
          Copyright © 2021 Opscientia | By using our site you agree to our{" "}
          <a href="https://opsci.io/privacy-policy/">Cookie Policy.</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
