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
      <div className="container shadow p-5 rounded-5">
        <h2 className="mb-3">Join our journey of excellence.</h2>
        <p className="mb-4 fs-5">
          Experience quality education, expert teachers, and a nurturing environment for your child.
        </p>
        <a
          href="/contact" // link to your admissions/enrollment page
          className="btn btn-primary btn-lg fw-bold"
          style={{ color: "var(--primary-color)" }}
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CTASection;
