import React, { useEffect } from "react";
import st from "./../styles/home.module.css";
import Header from "../public/components/header";
import {
  MdArrowDownward,
  MdArrowBack,
  MdArrowForward,
  MdArrowUpward,
  MdExpandMore,
} from "react-icons/md";
import { FaComments, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import Marquee from "react-fast-marquee";
import Footer from "../public/components/footer";
import Head from "next/head";
import { Power4, Linear } from "gsap/dist/gsap";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import $ from "jquery";

const home = () => {
  useEffect(() => {
    SwiperCore.use([Navigation]);
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    /* Scroll-to-Top button visibility control */
    gsap.fromTo(
      ".moveToTop",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#top",
          toggleActions: "play pause resume none",
          start: "bottom 0%",
          scrub: true,
        },
      }
    );

    /* Hero Section Animations */
    const heroAnim = gsap.timeline();
    heroAnim
      .fromTo(
        ".heroContentAnim h1",
        {
          opacity: 0,
          y: "25%",
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      )
      .fromTo(
        ".heroContentAnim span",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        },
        0.75
      );

    /* Join Movement Section Animations */
    const movementAnim = gsap.timeline();
    movementAnim.fromTo(
      ".joinMovementTextDetailsAnim",
      {
        opacity: 0,
        y: "5rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".joinMovementTextDetailsAnim",
          start: "top 75%",
          end: "top 50%",
          scrub: 1.5,
          toggleActions: "start none none none",
        },
      }
    );

    /* Community Section Animations */
    const communityAnim = gsap.timeline();
    communityAnim.fromTo(
      ".reviewsBannerAnim",
      {
        opacity: 0,
        y: "10rem",
      },
      {
        opacity: 1,
        y: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".reviewsBannerAnim",
          start: "top 90%",
          end: "top 50%",
          scrub: 1.5,
          toggleActions: "start none none none",
        },
      }
    );

    /* Donate Section Animations */
    const donateAnim = gsap.timeline();
    donateAnim.fromTo(
      ".donateBannerAnim",
      {
        opacity: 0,
        y: "10rem",
      },
      {
        opacity: 1,
        y: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".donateBannerAnim",
          start: "top 90%",
          end: "top 50%",
          scrub: 1.5,
          toggleActions: "start none none none",
        },
      }
    );

    /* Sponsors Section Animations */
    const sponsorsAnim = gsap.timeline();
    sponsorsAnim.fromTo(
      ".sponsorsBannerAnim",
      {
        opacity: 0,
        y: "10rem",
      },
      {
        opacity: 1,
        y: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".sponsorsBannerAnim",
          start: "top 90%",
          end: "top 50%",
          scrub: 1.5,
          toggleActions: "start none none none",
        },
      }
    );
  }, []);
  const handleToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#top",
      ease: Power4.easeInOut,
    });
  };
  const exploreMovement = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: "#joinMovement",
        offsetY: 75,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveToSubscribe = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: "#signup",
        offsetY: 75,
      },
      ease: Power4.easeInOut,
    });
  };
  const togSignup = () => {
    $(".signuptogbox").slideToggle(750);
    $(".expandsignupicon").toggleClass("rotateIcon");
  };

  return (
    <div className="ox">
      <Head>
        <title>
          The Open Science Decentralised Autonomous Organisation - Opscientia
        </title>
        <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/plugins/ScrollToPlugin.min.js"></script>
      </Head>
      <Header />
      <div className="moveToTop" onClick={handleToTop}>
        <MdArrowUpward />
      </div>
      {/* Hero Section */}
      <div className={st.heroSection} id="top">
        <video
          src="./assets/hero-video.mp4"
          muted={true}
          autoPlay={true}
          loop={true}
        ></video>
        <div className={st.heroContent + " " + "heroContentAnim"}>
          <h1>
            The Open Science Decentralised <br /> Autonomous Organisation
          </h1>
          <span className={st.explore} onClick={exploreMovement}>
            Explore <MdArrowDownward />
          </span>
        </div>
      </div>

      {/* Join the Movement Section */}
      <div className={st.joinMovement} id="joinMovement">
        <img src="./assets/join-movement-banner.png" alt="" />
        <div
          className={
            st.joinMovementTextDetails + " " + "joinMovementTextDetailsAnim"
          }
        >
          <h1>Join the Movement !</h1>
          <div className={st.movementSeparator}></div>
          <p>
            Our community is actively building the rails for open science
            research workflows that are{" "}
            <b>findable, accessible, interoperable and repeatable. </b>
            Active working groups include decentralized file storage for
            research data management, verifiable scientific reputation, game
            theoretic peer review, and innovating on the scientific paper.
          </p>
          <div className={st.movementSeparator}></div>
          <p>
            Join our bi-weekly DAO halls to learn how you can contribute to the
            advancement for a global commons of decentralized science
          </p>
          <button className="gradientBtn" onClick={moveToSubscribe}>
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Parallex Section */}
      <div className={st.parallexSection}>
        <video
          src="./assets/parallex-banner.mp4"
          autoplay="autoplay"
          loop="loop"
          muted
          defaultMuted
          playsinline
          oncontextmenu="return false;"
          preload="auto"
          className={st.parallexBackground}
        ></video>
        <div className="box">
          <div className={st.parallexBoxesParent}>
            {/* Review Section */}
            <div className={st.reviewsBanner + " " + "reviewsBannerAnim"}>
              <div className={st.reviewBannerDetails}>
                <h1>What the community is saying …</h1>
                <Swiper
                  loop={true}
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".rRight",
                    prevEl: ".rLeft",
                  }}
                  className={st.reviewSlider}
                >
                  <SwiperSlide>
                    <div className={st.reviewBox}>
                      <span>
                        <FaQuoteLeft />
                      </span>
                      “I think it’s great. I’m usually very depressed about
                      science for most of the year. Our generation thinks
                      differently and sees what our supervisors are battling. We
                      see it has to work differently to how it is now.”
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={st.reviewBox}>
                      <span>
                        <FaQuoteLeft />
                      </span>
                      “I think it’s amazing. I love the central spirit of the
                      project. I love how our generation is breaking the
                      boundaries”
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className={st.reviewLeftRightBtns}>
                  <span className="rLeft">
                    <MdArrowBack className="rLeft" />
                  </span>
                  <span className="rRight">
                    <MdArrowForward className="rRight" />
                  </span>
                </div>
                <div className={st.reviewSeparator}></div>
                <h2>Are you a scientist? Contribute to the conversation</h2>
                <a
                  className="gradientBtn"
                  href="https://2a3y19y0my7.typeform.com/to/yYqLJAYZ
"
                >
                  COMPLETE SURVEY
                </a>
              </div>
            </div>

            {/* Donate Section */}
            <div className={st.donateBanner + " " + "donateBannerAnim"}>
              <img src="./assets/about-banner-3.png" alt="" />
              <h1>Donate</h1>
              <p>
                Consider contributing to our grant on Gitcoin, where every
                donation is matched with a quadratic funding algorithm that
                maximizes the dispersal of public goods funding across our
                growing ecosystem.
              </p>
              <a
                className="gradientBtn"
                href="https://gitcoin.co/grants/2599/the-open-science-dao"
              >
                DONATE ON GITCOIN <img src="./assets/git-coin.svg" alt="" />{" "}
              </a>
            </div>

            {/* Sponsors Section */}
            <div className={st.marqueeBanner + " " + "sponsorsBannerAnim"}>
              <div className={st.reviewBannerDetails}>
                <h1 className={st.sponsorsP}>Sponsors & Partners</h1>
                <div className={st.sponsorsGrid}>
                  <a href="https://gitcoin.co/">
                    <img src="./assets/m1.jpg" alt="" />
                  </a>
                  <a href="https://oceanprotocol.com/dao">
                    <img src="./assets/m2.jpeg" alt="" />
                  </a>
                  <img src="./assets/m3.jpg" alt="" />
                  <a href="https://www.investinspain.org/en/we-help-you/rising-up-in-spain#">
                    <img src="./assets/m4.jpeg" alt="" />
                  </a>
                  <a href="https://summerofcode.withgoogle.com/">
                    <img src="./assets/m7.jpg" alt="" />
                  </a>
                  <a href="https://www.icex.es/icex/es/index.html">
                    <img src="./assets/m10.jpeg" alt="" />
                  </a>
                  <a href="https://ethglobal.com/">
                    <img src="./assets/m5.jpg" alt="" />
                  </a>
                  <a href="https://keymedium.com/">
                    <img src="./assets/m8.jpg" alt="" />
                  </a>
                  <a href="">
                    <img src="./assets/m9.jpg" alt="" />
                  </a>
                  <img src="./assets/m6.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sign Up Section */}
      <div className={st.signUp} id="signup">
        <img src="./assets/signup-banner.png" alt="" />
        <div className={st.signupTextDetails + " " + "box"}>
          <div onClick={togSignup} className={st.signupHeading}>
            <h1>Sign Up To Get Involved</h1>
            <MdExpandMore className="expandsignupicon" />
          </div>
          <div className={st.signupDetailsBox + " " + "signuptogbox"}>
            <div className={st.inputGrid}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <div className={st.checksBox}>
              <h2>Check the following:</h2>
              <div className="checkbox">
                <input type="checkbox" name="checks" id="c1" />
                <label htmlFor="c1">Subscribe to our email list</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" name="checks" id="c2" />
                <label htmlFor="c2">
                  Participate in user research (for scientists)
                </label>
              </div>
              <div className="checkbox">
                <input type="checkbox" name="checks" id="c3" />
                <label htmlFor="c3">Join our biweekly DAO Hall</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" name="checks" id="c4" />
                <label htmlFor="c4">
                  Join the waitlist to decentralize your lab
                </label>
              </div>
            </div>
            <textarea placeholder="Need to reach out? Leave us a message ..."></textarea>
            <button className="gradientBtn">SIGN ME UP!</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default home;
