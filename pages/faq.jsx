import React, { useEffect } from "react";
import st from "./../styles/faq.module.css";
import stt from "./../styles/home.module.css";
import Header from "../public/components/header";
import Footer from "../public/components/footer";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import Head from "next/head";
import { Accordion } from "react-bootstrap";
import FaqBox from "./../public/components/faqBox";
import "bootstrap/dist/css/bootstrap.css";
import { Power4 } from "gsap/dist/gsap";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Faq = () => {
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

    /* Ask Question Section Animations */
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

    /* FAQ Section 1 Animations */
    const faq1Anim = gsap.timeline();
    faq1Anim.fromTo(
      ".faqAnim1 > div",
      {
        opacity: 0,
        y: "2.5rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".faqAnim1 > div",
          start: "top 90%",
          end: "top 50%",
          scrub: 1.5,
          toggleActions: "start none none none",
        },
      }
    );

    /* FAQ Section 2 Animations */
    const faq2Anim = gsap.timeline();
    faq2Anim.fromTo(
      ".faqAnim2 > div",
      {
        opacity: 0,
        y: "2.5rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".faqAnim2 > div",
          start: "top 90%",
          end: "top 50%",
          scrub: 1.5,
          toggleActions: "start none none none",
        },
      }
    );

    /* FAQ Section 3 Animations */
    const faq3Anim = gsap.timeline();
    faq3Anim.fromTo(
      ".faqAnim3 > div",
      {
        opacity: 0,
        y: "2.5rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".faqAnim3 > div",
          start: "top 90%",
          end: "top 50%",
          scrub: 1.5,
          toggleActions: "start none none none",
        },
      }
    );

    /* FAQ Section 4 Animations */
    const faq4Anim = gsap.timeline();
    faq4Anim.fromTo(
      ".faqAnim4 > div",
      {
        opacity: 0,
        y: "2.5rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".faqAnim4 > div",
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
  const exploreQ = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: "#questions",
        offsetY: 75,
      },
      ease: Power4.easeInOut,
    });
  };

  return (
    <div className={st.faq}>
      <Head>
        <title>
          Ask Your Questions and Get Your Questions Answered - Opscientia
        </title>
      </Head>
      <Header />
      <div className="moveToTop" onClick={handleToTop}>
        <MdArrowUpward />
      </div>
      {/* Hero Section */}
      <div className={stt.heroSection}>
        <video
          src="./assets/hero-video.mp4"
          muted={true}
          autoPlay={true}
          loop={true}
        ></video>
        <div className={stt.heroContent + " " + "heroContentAnim"} id="top">
          <h1>
            The Open Science Decentralised <br /> Autonomous Organisation
          </h1>
          <span className={stt.explore} onClick={explore}>
            Explore <MdArrowDownward />
          </span>
        </div>
      </div>

      {/* Join the Movement Section */}
      <div className={st.submitQuestion} id="joinMovement">
        <img src="./assets/faq-question-banner.png" alt="" />
        <div className="box">
          <div
            className={
              st.submitQuestionTextDetails + " " + "joinMovementTextDetailsAnim"
            }
          >
            <h2>
              Below are questions that users have asked during our research.
              Click below to submit your questions and feedback or proceed to
              explore our Q&A
            </h2>
            <a
              href="https://2a3y19y0my7.typeform.com/to/UgK5OEHq?typeform-source=opsci.io"
              className="gradientBtn"
            >
              SUBMIT QUESTIONS HERE
            </a>
            <span className={st.explore} onClick={exploreQ}>
              Continue to Explore Q& A
              <MdArrowDownward />
            </span>
          </div>
        </div>
      </div>

      {/* Parallex FAQ Sections */}

      <div className={stt.parallexSection} id="questions">
        <video
          src="./assets/parallex-banner.mp4"
          muted={true}
          autoPlay={true}
          loop={true}
          className={stt.parallexBackground}
        ></video>
        <div className="box">
          <div className={stt.parallexBoxesParent}>
            {/* Technology FAQ's */}
            <div className={st.faqSection}>
              <div className={st.faqHeading}>
                <h1>Technology </h1>
                <img src="./assets/technology-icon.svg" alt="" />
              </div>
              <Accordion defaultActiveKey="0" className="faqAnim1">
                <FaqBox
                  eventKey="0"
                  question="Why does Opscientia use blockchain technologies?"
                  answer="Blockchain is an example of distributed ledger technology (DLT). These technologies provide infrastructure which enables us to construct a rich directory of information with many benefits. For example, with DLTs there is no centralised control of information or point of failure. Information is also immutable and easily tracked, and is made machine readable for automation by AI. This version of the internet was originally described by Sir Tim Berners-Lee when he invented the worldwide web. We are now entering this next phase of the web — known as the “Semantic web” or “Web3” — with the advent of DLTs."
                />
                <FaqBox
                  eventKey="1"
                  question="What existing tools will be integrated with your Data Wallet?"
                  answer="For our initial solution, we’re integrating DataLad, in addition to the ability to link to your existing digital identities (such as Google Scholar and Orchid ID). We will eventually integrate more analysis, visualisation and academic tools into our solution."
                />
              </Accordion>
            </div>

            {/* Data General FAQ's */}
            <div className={st.faqSection}>
              <div className={st.faqHeading}>
                <h1>Data General </h1>
                <img src="./assets/data-general-icon.svg" alt="" />
              </div>
              <Accordion defaultActiveKey="1" className="faqAnim2">
                <FaqBox
                  eventKey="0"
                  question="What data types and formats do you support?"
                  answer="To begin with, our solution will accept BIDS compliant Neuroscience data formats, including EEG, iEEG, MEG and MRI. We will also support Experiment Factory containers written in Lab JS.
                  In the future our solution will also accept standard data types from other scientific fields."
                />
                <FaqBox
                  eventKey="1"
                  question="How does version control work? For example, should I save each version in my Data Wallet during each analysis step (like I do on my hard drives)?"
                  answer="Our solution will work in a similar way to “Git” version control. This means that any time you make a change to your data, previous versions will be saved and logged, so you can go back to any old version of your data without needing to explicitly save along the way."
                />
                <FaqBox
                  eventKey="2"
                  question="To access and upload data, do I need to worry about my computer’s memory and power?"
                  answer="All of our applications will run in the browser, with the heavy lifting done in secure cloud computing, so this shouldn’t be an issue."
                />
                <FaqBox
                  eventKey="3"
                  question="My data is subject to the sharing policies of my grant and institution. Can I still share my data with Opscientia?"
                  answer="We are working on establishing an inter-institutional data sharing infrastructure. If you would like your organisation to be included in this growing network, please fill out this survey."
                />
                <FaqBox
                  eventKey="4"
                  question="Can I share my data on another platform as well as with Opscientia?"
                  answer="Yes, your data remains yours, and you are able to publish and share this elsewhere."
                />
              </Accordion>
            </div>

            {/* Human Data FAQ's */}
            <div className={st.faqSection}>
              <div className={st.faqHeading}>
                <h1>Human Data </h1>
                <img src="./assets/personal-data-icon.svg" alt="" />
              </div>
              <Accordion defaultActiveKey="1" className="faqAnim3">
                <FaqBox
                  eventKey="0"
                  question="How is the data anonymised?"
                  answer="Data can be anonymised in various forms. Raw data will be kept local when possible. If needed, large raw datasets will be securely stored on decentralised file storage networks. Methods such as Shamir Secret Sharing (sharding) and homeomorphic encryption will allow others to compute on the data without it being revealed."
                />
                <FaqBox
                  eventKey="1"
                  question="My data is subject to GDPR and additional policies of my grant and institution. Can I still share the data with Opscientia?"
                  answer="Our tech stack will enhance the data audit paper trail, allowing institutions to bypass their GDPR exception status for research data and comply more closely with this law. We encourage researchers to share your data with Opscientia if you are seeking low friction compliance with GDPR.
                  As for your institution, we are working on establishing an inter-institutional sharing infrastructure. If you would like your organisation to be included in this growing network, please fill out this survey."
                />
                <FaqBox
                  eventKey="2"
                  question="My participant consent forms didn’t mention open peer-to-peer data sharing. Can I still share the data with Opscientia?"
                  answer="Existing consent forms may not have the language that would enable you to release the data on peer-to-peer networks. However, if you still have contact with the participants, in the future you will be able to create a Science Quest on our platform, and reissue an e-consent form that is generic, and allows the participant to provide their consent on how their data is used in real time."
                />
                <FaqBox
                  eventKey="3"
                  question="I am designing a study and would like to share the data I gather with Opscientia. How do I plan for this in my ethics application and participant consent forms?"
                  answer="You will be able to generate boilerplate text that may be used in your ethical review application and consent forms when a project is registered on our platform.
                  We encourage you to deploy your experiments through our Science Quest portal (when this is live). However, templates for our e-consent forms will be open source and made available to researchers that would like to deploy their experiments outside of our ecosystem."
                />
                <FaqBox
                  eventKey="4"
                  question="I don’t think my participants own their own data (I think the university does). How will this work if they want to share through your Data Wallet?"
                  answer="According to GDPR regulations, participants reserve absolute ownership over their raw data. Universities are considered the Data Controller. In many cases, universities have to apply for exception status (based on the limitations of the infrastructure they have for scientific research). Our platform will reduce the burden for institutions to comply with GDPR regulation by providing participants the ability to consent in and out of the study in real-time."
                />
                <FaqBox
                  eventKey="5"
                  question="What happens to the data I have obtained through Opscientia if access is later revoked by the participant? Equally, if I as a researcher revoke access, what happens to the data other researchers have already accessed from my Data Wallet?"
                  answer="Our services provide a separation between ownership of data and performing computation on data. If access to data is revoked, either by a participant or researcher, then no one will be able to run any computation on the data anymore. However, if a distinct transformation from the data has been generated (that cannot be used to identify the data source), then it will belong to you as a researcher, and may continue to be used."
                />
              </Accordion>
            </div>

            {/* Research Practicalities FAQ's */}
            <div className={st.faqSection}>
              <div className={st.faqHeading}>
                <h1>Research Practicalities </h1>
                <img src="./assets/personal-data-icon.svg" alt="" />
              </div>
              <Accordion defaultActiveKey="1" className="faqAnim4">
                <FaqBox
                  eventKey="0"
                  question="How can I get my study funded through Opscientia?"
                  answer="We will soon launch our project submission and governance portal for scientific research! If you are interested in applying for funding, please fill out this survey and we’ll be sure to notify you as soon as our portal is live."
                />
                <FaqBox
                  eventKey="1"
                  question="As a researcher, how will the quality of my contributions be assessed? Equally, how can I ensure the data/work I source through Opscientia will be of high quality?"
                  answer="High quality research will be ensured through our platform by a number of processes and tools.
                  All experiments and code will be open source, enabling peer-review (by the community) to be embedded throughout the research life cycle.
                  Initially, all experiments must be preregistered. As part of this process, researchers will gather feedback on their protocol before their experiment can be initiated. Additionally, researchers must define their protocols and code during preregistration — with initiation only possible once code is deemed executable.
                  All contributions made by individual researchers, and feedback received from the community, will be open for all to see. This enables reputation systems to be created, and we are exploring innovative ways of using this to ensure quality. If you’d like to get involved in this exploration, please introduce yourself on the Reputation Working Group channel in our Discord!"
                />
                <FaqBox
                  eventKey="2"
                  question="Can I participate as a lab?"
                  answer="Yes. Each researcher will need to set-up an individual account to join their lab."
                />
                <FaqBox
                  eventKey="3"
                  question="If I contribute to a project, will I get authorship when the work is published? How do you determine author order and ensure my contribution is recognised?"
                  answer="Contributions will be logged open source, ensuring transparency. The allows for all fine-grained contributions to be logged in the project metadata (e.g. data cleaning). Order will be determined according to the platform, based on details of the project (e.g. whether it is an extension/fork of a previous project) and researcher contributions.
                  Researchers will own the intellectual property (IP) of any project submitted through our platform, meaning that research can also be published elsewhere"
                />
                <FaqBox
                  eventKey="4"
                  question="Can I get training so I know how to select the right data and work with this to achieve my aims?"
                  answer="We aim to provide training for researchers to carry our high quality research with our platform. In the future, we also aim to provide automation and suggestions to assist researchers in achieving their aims."
                />
                <FaqBox
                  eventKey="5"
                  question="How will I be rewarded for sharing my data and for my research contributions?"
                  answer="If you permission your data to be shared, and your data is consumed, you will be rewarded in platform credits. In the future, you will also receive credits based on your research contributions."
                />
                <FaqBox
                  eventKey="6"
                  question="What are “platform credits”?"
                  answer="Credits are an abstraction of our underlying tech stack, which is built on blockchain/Web3 technologies. You will be able to use credits within our platform to access decentralised cloud services (storage and computation) and for crowdsourcing experiments."
                />
                <FaqBox
                  eventKey="7"
                  question="Will I have to use/spend credits to access data?"
                  answer="We will curate public datasets and ensure they are always available and free through any basic account on our platform. However, our platform will also make it possible for other researchers, organisations and institutions to make their data available at a price they set (i.e. in exchange for a certain number of credits)."
                />
                <FaqBox
                  eventKey="8"
                  question="Will the value of my credits fluctuate? If so, by how much?"
                  answer="Credits can be used within our ecosystem, e.g. for data storage and crowdsourcing experiments. Credits will always be stable within our platform. In the future, we will also award grants for research — these will be paid in supported national currencies (e.g. SGD, USD, EUR)."
                />
              </Accordion>
            </div>

            <h2 className={st.disclaimerP}>
              DISCLAIMER: We are performing rigorous tests for security, legal
              compliance and privacy as we iterate on our products. These tests
              are heavily influenced by your curiosity and feedback. Please
              check back regularly as we update this page as our tech stack
              evolves. If you have any additional questions or would like to
              provide feedback, please fill out{" "}
              <a href="https://2a3y19y0my7.typeform.com/to/UgK5OEHq">
                this form.
              </a>
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
