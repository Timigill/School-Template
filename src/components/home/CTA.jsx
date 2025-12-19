// components/CTASection.js
"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CTASection = () => {
  return (
    <section
      className="container-fluid py-5 text-center bg-white"
      style={{

        color: "var(--primary-color)",
      }}
    >
      <div className="container  p-5 rounded-5">
        <h1 className=" fw-bold mb-1">Join our Journey of Excellence.</h1>
        <p className="mb-4 " style={{fontSize: '1.2rem'}}>
          Experience quality education, expert teachers, and a nurturing environment for your child.
        </p>
        <a
          href="/contact" // link to your admissions/enrollment page
          className="btn btn-primary btn-lg fw-bold"
          style={{ color: "var(--primary-color)" }}
        >
          Visit Us Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;
