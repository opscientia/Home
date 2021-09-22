import React, { useEffect } from "react";
import st from "./../../styles/components/header.module.css";
import { MdArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import $ from "jquery";
import Link from "next/link";
import { gsap } from "gsap";

const Header = () => {
  useEffect(() => {
    const headerAnim = gsap.timeline();
    headerAnim.fromTo(
      ".headerAnim",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );
  }, []);
  const showMobHeader = () => {
    $(".mobHeaderTog").css({ display: "block" });
  };
  const hideMobHeader = () => {
    $(".mobHeaderTog").css({ display: "none" });
  };
  return (
    <div className={st.header + " " + 'headerAnim'}>
      <Link href="/">
        <img src="./assets/white-logo.png" alt="" />
      </Link>

      <div className={st.headerTextBox}>
        <Link href="/about">
          <a>About</a>
        </Link>
        <a href="https://pulse.opsci.io/">News</a>
        <button>
          <a>
            Community <MdArrowDropDown />
          </a>
          <div className={st.dropBox}>
            <a href="https://discord.com/invite/n7UBwrGywZ">Discord</a>
            <a href="https://hack.opsci.io/">Discourse</a>
          </div>
        </button>
        <Link href="/research">
          <a>Research</a>
        </Link>
        <Link href="/faq">
          <a>FAQs</a>
        </Link>
        <Link href="/careers">
          <a>Careers</a>
        </Link>
      </div>
      <MdMenu onClick={showMobHeader} />
      <div className={st.mobHeader + " " + "mobHeaderTog"}>
        <div className={st.header}>
          <img src="./assets/white-logo.png" alt="" />
          <MdClose onClick={hideMobHeader} />
        </div>
        <div className={st.mobLinks}>
          <Link href="/about">
            <a>About</a>
          </Link>
          <a href="https://pulse.opsci.io/">News</a>
          <button>
            <a>
              Community <MdArrowDropDown />
            </a>
            <div className={st.dropBoxMob}>
              <a href="https://discord.com/invite/n7UBwrGywZ">Discord</a>
              <a href="https://hack.opsci.io/">Discourse</a>
            </div>
          </button>
          <Link href="/research">
            <a>Research</a>
          </Link>
          <Link href="/faq">
            <a>FAQs</a>
          </Link>
          <Link href="/careers">
            <a>Careers</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
