import React from "react";
import Navbar from "./nav/navbar";
import Footer from "./footer";
import ChatbotWidget from "./chatbot/ChatbotWidget";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ChatbotWidget />
    </>
  );
}
