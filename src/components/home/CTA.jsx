// components/CTASection.js
"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CTASection = () => {
  return (
    <section
      className="container-fluid py-5 text-center"
      style={{
        color: "#01311f", // Primary color for text
        background: "#f8f9fa", // subtle light background
      }}
    >
      <div
        className="container p-4 p-md-5 rounded-4 shadow-sm"
        style={{
          maxWidth: "900px",
          backgroundColor: "#fff",
        }}
      >
        <h1
          className="fw-bold mb-3"
          style={{ fontSize: "1.8rem", lineHeight: "1.2" }}
        >
          Join our Journey of Excellence
        </h1>
        <p
          className="mb-4"
          style={{ fontSize: "1rem", lineHeight: "1.5", color: "#555" }}
        >
          Experience quality education, expert teachers, and a nurturing environment for your child.
        </p>
        <a
          href="/contact"
          className="btn btn-primary btn-lg fw-bold"
          style={{
            color: "#fff",
            padding: "0.75rem 2rem",
            fontSize: "1rem",
          }}
        >
          Visit Us Now
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 576px) {
        .container-fluid{
        margin-top: 0 !important;
        padding-top: 0 !important;
        }
          h1 {
            font-size: 1.5rem !important;
          }
          p {
            font-size: 0.9rem !important;
          }
          .btn {
            width: 60%;
            padding: 0.75rem 0;
          }
        }
        .btn-primary:hover {
          background-color: #01311f;
          border-color: #01311f;
          color: #ffc107 !important;
        }
      `}</style>
    </section>
  );
};

export default CTASection;
