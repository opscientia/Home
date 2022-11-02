import { getCookie, removeCookies } from "cookies-next";
import Head from "next/head";
import React from "react";
import connect from "../lib/database";
import jwt from "jsonwebtoken";
import User from "../models/Users";
import { useRouter } from "next/router";

function Dashboard({ username, orcid, records }) {
  const router = useRouter();

  const logout = () => {
    removeCookies("token");
    router.replace("/login");
  };

  return (
    <div>
        <title>Dashboard</title>
      <div>Welcome {username}!</div>
      <div>{orcid}</div>
      Given name:
      {records["name"]["given-names"]["value"]}
      {"  "}
      Family name:
      {records["name"]["family-name"]["value"]}
      {"  "}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  try {
    // connect db
    await connect();
    // check cookie
    const token = getCookie("token", { req, res });
    if (!token) {
      console.error("token missing, login again");
    }

    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    const obj = await User.findOne({ _id: verified.id });

    const URL = `https://api.sandbox.orcid.org/v3.0/${obj.orcid}/person`;
    const bearerToken = "Bearer" + obj.accessToken;
    const resp = await fetch(URL, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: bearerToken,
        "Content-Type": "application/vnd.orcid+json",
      },
    });

    const userRecords = await resp.json();
    console.log(userRecords);

    if (!obj)
      return {
        redirect: {
          destination: "/login",
        },
      };
    return {
      props: {
        orcid: obj.orcid,
        username: obj.username,
        records: userRecords,
      },
    };
  } catch (err) {
    console.error(err);
    removeCookies("token", { req, res });
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
}

export default Dashboard;

