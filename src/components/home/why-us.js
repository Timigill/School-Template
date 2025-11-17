// components/WhyChooseUs.js
"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChalkboardTeacher, FaBook, FaAward } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher size={40} className="mb-3 align-middle text-center" />,
      title: "Expert Teachers",
      description: "Learn from highly qualified and experienced educators."
    },
    {
      icon: <FaBook size={40} className="mb-3 align-middle text-center" />,
      title: "Comprehensive Curriculum",
      description: "Our curriculum is designed to develop both knowledge and skills."
    },
    {
      icon: <FaAward size={40} className="mb-3 align-middle text-center" />,
      title: "Achievements & Awards",
      description: "Our students consistently excel in academics and extracurriculars."
    }
  ];

  return (
    <section className="container-fluid  bg-white w-80 h-100" style={{ color: "var(--primary-color)" }}>
      <div className="text-center mb-5">
        <h2>Why Choose Us</h2>
        <p style={{
            color:"var(--primary-color)"
        }}>Discover what makes our school unique</p>
      </div>

   <div className="d-flex justify-content-center flex-wrap gap-5">
  {features.map((feature, index) => (
    <div className="card text-center justify-center border-0 shadow p-3" style={{ width: "300px",color: "var(--primary-color)" }} key={index}>
     <div>{feature.icon}</div>
      <h5 className="card-title mt-2">{feature.title}</h5>
      <p className="card-text text-muted">{feature.description}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default WhyChooseUs;
