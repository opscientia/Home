import React, { useEffect } from "react";
import st from "./../styles/home.module.css";
import Header from "../public/components/header";
import Head from "next/head";

const home = () => {
  return (
    <div className="ox">
      <Head>
        <title>OPSCI | Careers</title>
      </Head>
      <Header />
      {/* Hero Section */}
      <div className={st.heroSection} id="top">
        <video
          src="./assets/about-video.mp4"
          muted={true}
          autoPlay={true}
          loop={true}
        ></video>
        <div className={st.heroContent}>
          <h2>COMING SOON!</h2>
        </div>
      </div>
    </div>
  );
};

export default home;
