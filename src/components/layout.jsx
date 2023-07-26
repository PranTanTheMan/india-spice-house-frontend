import React from "react";
import Navbar from "./nav/navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
}
