// components/WhyChooseUs.js
"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LuGraduationCap, LuGamepad2, LuCctv, LuBuilding2, LuMonitorPlay, LuActivity, LuUsers, LuClipboardCheck } from "react-icons/lu";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <LuGraduationCap size={40} className="mb-3 align-middle text-center" />,
      title: "OXFORD Curriculum",
      description: "World-class education standards fostering critical thinking and global perspectives."
    },
    {
      icon: <LuGamepad2 size={40} className="mb-3 align-middle text-center" />,
      title: "Interactive Learning",
      description: "Engaging education through visuals, games, and modern interactive methods."
    },
    {
      icon: <LuCctv size={40} className="mb-3 align-middle text-center" />,
      title: "CCTV Secured Campus",
      description: "24/7 surveillance ensuring a safe and secure environment for all students."
    },
    {
      icon: <LuBuilding2 size={40} className="mb-3 align-middle text-center" />,
      title: "Separate Campuses",
      description: "Dedicated campuses for boys and girls to ensure a focused learning environment."
    },
    {
      icon: <LuMonitorPlay size={40} className="mb-3 align-middle text-center" />,
      title: "Advanced IT Labs",
      description: "State-of-the-art computing facilities for hands-on technical education."
    },
    {
      icon: <LuActivity size={40} className="mb-3 align-middle text-center" />,
      title: "Holistic Development",
      description: "Dedicated play areas and sports facilities for complete physical and mental growth."
    },
    {
      icon: <LuUsers size={40} className="mb-3 align-middle text-center" />,
      title: "Regular PTM",
      description: "Frequent parent-teacher meetings to ensure consistent progress and communication."
    }
  ];

  return (
    <section className="container-fluid py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold  text-dark">Why Choose Us</h2>
          <p className=" text-secondary">Discover what makes our school unique</p>
          <div className="mx-auto mt-3" style={{ width: '60px', height: '4px', background: '#ffc107',   borderRadius: '2px' }}></div>
        </div>

        <div className="row g-5 justify-content-center">
          {features.map((feature, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="feature-card h-100 p-3 bg-white rounded-3 text-center position-relative overflow-hidden mx-auto">
                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                  <div className="icon-wrapper d-inline-flex align-items-center justify-content-center mb-3 rounded-circle">
                    {feature.icon}
                  </div>
                  <h5 className="fw-bold mb-2 text-dark" style={{ fontSize: '1.1rem' }}>{feature.title}</h5>
                  <p className="text-muted mb-0 small" style={{ lineHeight: '1.4', fontSize: '0.85rem' }}>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .feature-card {
          aspect-ratio: 1 / 1;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(0,0,0,0.04);
          border-bottom: 3px solid transparent;
          z-index: 1;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-bottom-color: #01311f;
        }

        .icon-wrapper {
          width: 65px;
          height: 65px;
          background: rgba(1, 49, 31, 0.06);
          color: #01311f;
          font-size: 1.75rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover .icon-wrapper {
          background: #01311f;
          color: #fff;
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
