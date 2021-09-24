import React, { useEffect } from "react";
import st from "./../styles/home.module.css";
import stt from "./../styles/about.module.css";
import Header from "../public/components/header";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import Footer from "../public/components/footer";
import Head from "next/head";
import ProfileCard from "../public/components/profileCard";
import { Power4 } from "gsap/dist/gsap";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const home = () => {
  useEffect(() => {
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

    /* About Text Section 1 Animation */
    const textAnim1 = gsap.timeline();
    textAnim1.fromTo(
      ".aboutTextGridAnim1",
      {
        opacity: 0,
        y: "10rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".aboutTextGridAnim1",
          start: "top 95%",
          end: "top 75%",
          scrub: 1.5,
          toggleActions: "start none none none",
        },
      }
    );

    /* About Text Section 2 Animation */
    const textAnim2 = gsap.timeline();
    textAnim2.fromTo(
      ".aboutTextGridAnim2",
      {
        opacity: 0,
        y: "10rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".aboutTextGridAnim2",
          start: "top 95%",
          end: "top 75%",
          scrub: 1.5,
          toggleActions: "start none none none",
        },
      }
    );

    /* About Text Sections 3 Animation */
    const textAnim3 = gsap.timeline();
    textAnim3.fromTo(
      ".aboutTextGridAnim3",
      {
        opacity: 0,
        y: "10rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".aboutTextGridAnim3",
          start: "top 95%",
          end: "top 75%",
          scrub: 1.5,
          toggleActions: "start none none none",
        },
      }
    );

    /* About Text Section 4 Animation */
    const textAnim4 = gsap.timeline();
    textAnim4.fromTo(
      ".aboutTextGridAnim4",
      {
        opacity: 0,
        y: "10rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".aboutTextGridAnim4",
          start: "top 95%",
          end: "top 75%",
          scrub: 1.5,
          toggleActions: "start none none none",
        },
      }
    );

    /* Who we are? Section Animation */
    const whoAnim = gsap.timeline();
    whoAnim.fromTo(
      ".whoCardAnim > div",
      {
        opacity: 0,
        y: "5rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".whoCardAnim > div",
          start: "top 95%",
          end: "top 75%",
          scrub: 1.5,
          toggleActions: "start none none none",
        },
      }
    );

    /* Advisors Section Animation */
    const advisorsAnim = gsap.timeline();
    advisorsAnim.fromTo(
      ".advisorsCardAnim > div",
      {
        opacity: 0,
        y: "5rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".advisorsCardAnim > div",
          start: "top 95%",
          end: "top 75%",
          scrub: 1.5,
          toggleActions: "start none none none",
        },
      }
    );

    /* Who we are? Section Animation */
    const communityAnim = gsap.timeline();
    communityAnim.fromTo(
      ".communityCardAnim > div",
      {
        opacity: 0,
        y: "5rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".communityCardAnim > div",
          start: "top 95%",
          end: "top 75%",
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

  const explore = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: "#joinMovement",
        offsetY: 75,
      },
      ease: Power4.easeInOut,
    });
  };

  return (
    <div className="ox">
      <Head>
        <title>About Opscientia and Meet the Team - Opscientia</title>
      </Head>
      <Header />
      <div className="moveToTop" onClick={handleToTop}>
        <MdArrowUpward />
      </div>
      {/* Hero Section */}
      <div className={st.heroSection} id="top">
        <video
          src="./assets/about-video.mp4"
          muted={true}
          autoPlay={true}
          loop={true}
        ></video>
        <div className={st.heroContent + " " + "heroContentAnim"}>
          <h1>
            The Open Science Decentralised <br /> Autonomous Organisation
          </h1>
          <span className={st.explore} onClick={explore}>
            Explore <MdArrowDownward />
          </span>
        </div>
      </div>

      {/* Logo Section */}
      <div className={st.joinMovement}>
        <img src="./assets/signup-banner.png" alt="" />
        <div className={st.joinMovementTextDetails}>
          <h1>
            A Web3-powered open science ecosystem that unlocks data silos,
            coordinates collaboration and democratises funding
          </h1>
          <img src="./assets/logo-badge.png" alt="" />
        </div>
      </div>

      {/* Parallex Section */}
      <div className={st.parallexSection} id="joinMovement">
        
        <div className="box">
          <div className={stt.parallexBoxesParent}>
            <div className={stt.aboutTextGrid + " " + "aboutTextGridAnim1"}>
              <div className={stt.atgTextBox}>
                <h1>What is Opscientia?</h1>
                <p>
                  We’re a community of open science activists, researchers,
                  organisers and enthusiasts that have come together to work on
                  the problems of data sharing, reproducibility, incentive
                  alignment, coordination, and intellectual ownership that
                  plague knowledge creation today.
                </p>
                <p>
                  Together, we’re building a scientific ecosystem that unlocks
                  data silos, coordinates collaboration and democratises
                  funding. Our long-term vision is to create a global network of
                  automated knowledge foundries, where scientists and AI
                  co-create new knowledge.
                </p>
              </div>
              <div className={stt.atgImgBox}>
                <iframe
                  width="1190"
                  height="669"
                  src="https://www.youtube.com/embed/mSMsDobOOAE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className={stt.aboutTextGrid + " " + "aboutTextGridAnim2"}>
              <div className={stt.atgImgBox}>
                <img src="./assets/about-banner-1.png" alt="" />
              </div>
              <div className={stt.atgTextBox}>
                <h1>Science is Broken</h1>
                <p>
                  Did you know that less than 10% of data collected by publicly
                  funded research in the US is published alongside their papers?
                  Or that an average 70% of researchers have failed to replicate
                  their colleagues’ work across disciplines, including Physics,
                  Biology and Psychology? A hyper competitive culture in
                  academia precludes collaboration while existential challenges
                  require immediate scientific solutions.
                </p>
              </div>
            </div>
            <div className={stt.aboutTextGrid + " " + "aboutTextGridAnim3"}>
              <div className={stt.atgTextBox}>
                <h1>Digital Services Enhance Disparity</h1>
                <p>
                  Modern scientific insights are typically generated by an
                  exclusive community of researchers working at institutions
                  with proprietary instruments, siloed data, and specialized
                  infrastructure. This status quo has remained undisturbed for
                  decades, further exacerbated by the COVID-19 pandemic which
                  has enhanced the disparity of access to instruments of
                  information-gathering, coordination, commerce, and
                  knowledge-sharing.
                </p>
              </div>
              <div className={stt.atgImgBox}>
                <img src="./assets/about-banner-2.png" alt="" />
              </div>
            </div>
            <div className={stt.aboutTextGrid + " " + "aboutTextGridAnim4"}>
              <div className={stt.atgImgBox}>
                <img src="./assets/about-banner-3.png" alt="" />
              </div>
              <div className={stt.atgTextBox}>
                <h1>Decentralised Data Fabric</h1>
                <p>
                  The Opsci ecosystem is powered by the Decentralised Science
                  (DeSci) Stack, a Web3 software development kit linking
                  decentralised finance with data markets, privacy-preserving
                  cloud services, and the power of smart contracts to coordinate
                  global citizen science communities together around a
                  collectively determined incentive structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parallex Section */}
      <div className={st.parallexSection  + " " + st.ps2}>
        <video
          src="./assets/parallex-banner.mp4"
          muted={true}
          autoPlay={true}
          loop={true}
          className={st.parallexBackground + " " + st.pb2}
        ></video>
        <div className="box">
          <div className={st.parallexBoxesParent}>
            <div className={stt.profilexContainer}>
              <h1>Who are we?</h1>
              <div className={stt.profileCardGrid + " " + "whoCardAnim"}>
                <ProfileCard
                  name="Shady"
                  position="opsci-hacker"
                  description="Shady El Damaty, Ph.D. is an avid advocate for open science to promote the synthesis of human creativity, artistic expression, and powers of observation with tools for automation to supercharge the spirit of discovery and innovation. He founded Opscientia, to achieve this vision, and building on 10 years of methods development and digital infrastructure for big data neuroscience research."
                  img="./assets/shady.jpg"
                />
                <ProfileCard
                  name="Sarah"
                  position="opsci-artisan"
                  description="Sarah Hamburg, Ph.D., is co-founder, neuroscientist and product strategist from the U.K. with years of experience in human neuroimaging, user experience research, and product development."
                  img="./assets/sarah.jpeg"
                />
                <ProfileCard
                  name="Alex"
                  position="opsci-engineer"
                  description="Alexandra McCarroll, M.Sc., is co-founder, software engineer and technical architect with experience as both a software and data engineer. In her past she has worked in consultancy with large financial institutions and fintech start-ups."
                  img="./assets/alex.jpeg"
                />
                <ProfileCard
                  name="Liliana"
                  position="opsci-curator"
                  description="Liliana Muscarella, M.A., is Opscientia’s social impact strategist, bringing analytical and practical experience at the nexus of global inequality and conflict stabilization. Having worked in humanitarian aid and development at the United Nations, USAID, and international NGOs, Liliana’s expertise lies in new ways of thinking, working together, and decolonizing existing global structures."
                  img="./assets/liliana.jpg"
                />
              </div>
            </div>
            <div className={stt.profilexContainer}>
              <h1>Advisors</h1>
              <div className={stt.profileCardGrid + " " + "advisorsCardAnim"}>
                <ProfileCard
                  name="Miri"
                  position="opsci-ops"
                  description="Miri Rossitto is the CEO of COWE Communications and is Opscientia’s brand management strategist from the U.S. with 10 years of experience consulting and advising successful start-ups."
                  img="./assets/miri.jpg"
                />
                <ProfileCard
                  name="Roberto"
                  position="opsci-ops"
                  description="Roberto Espinosa is an economist with over 20 years of experience in business development for large IT companies. Roberto is also an innovation and business lecturer, mentor for international start-up programs in Spain, and venture capitalist advisor."
                  img="./assets/roberto.jpg"
                />
              </div>
            </div>
            <div className={stt.profilexContainer}>
              <h1>Community</h1>
              <div className={stt.profileCardGrid + " " + "communityCardAnim"}>
                <ProfileCard
                  name="Kinshuk"
                  position="opsci-fellow"
                  description="Kinshuk Kashyap, is Opscientia’s Google Summer of Code Fellow from India, who was awarded a competitive summer fellowship to contribute to the DeSci Stack."
                  img="./assets/kinshuk.jpg"
                />
                <ProfileCard
                  name="Achintya"
                  position="opsci-fellow"
                  description="Achintya Kumar, is Opscientia’s Open Web Fellow from India, who is applying his web development skills to build the DeSci Stack."
                  img="./assets/achintya.jpg"
                />
                <ProfileCard
                  name="Dan"
                  position="opsci-ops"
                  description="Daniel Byington, M.Sc., is a business development specialist from the U.S. with a rich background in market and scientific research for pharmaceutical drug development."
                  img="./assets/dan.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default home;
