import React from "react";
import Header from "../../components/Header/Header";
import "./Welcome.css";

function Welcome() {
  return (
    <div>
      <Header />
      <section className="content">
        <h2 className="sub-title">What would you like to do today?</h2>
      </section>
    </div>
  );
}

export default Welcome;
