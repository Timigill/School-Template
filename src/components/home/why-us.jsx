"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LuGraduationCap, LuGamepad2, LuCctv, LuBuilding2, LuMonitorPlay, LuActivity, LuUsers } from "react-icons/lu";

const WhyChooseUs = () => {
  const features = [
    { icon: <LuGraduationCap size={36} />, title: "OXFORD Curriculum", description: "World-class education standards fostering critical thinking and global perspectives." },
    { icon: <LuGamepad2 size={36} />, title: "Interactive Learning", description: "Engaging education through visuals, games, and modern interactive methods." },
    { icon: <LuCctv size={36} />, title: "CCTV Secured Campus", description: "24/7 surveillance ensuring a safe and secure environment for all students." },
    { icon: <LuBuilding2 size={36} />, title: "Separate Campuses", description: "Dedicated campuses for boys and girls to ensure a focused learning environment." },
    { icon: <LuMonitorPlay size={36} />, title: "Advanced IT Labs", description: "State-of-the-art computing facilities for hands-on technical education." },
    { icon: <LuActivity size={36} />, title: "Holistic Development", description: "Dedicated play areas and sports facilities for complete physical and mental growth." },
    { icon: <LuUsers size={36} />, title: "Regular PTM", description: "Frequent parent-teacher meetings to ensure consistent progress and communication." }
  ];

  return (
    <section className="container-fluid py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Why Choose Us</h2>
          <p className="text-secondary">Discover what makes our school unique</p>
          <div className="mx-auto mt-3" style={{ width: '60px', height: '4px', background: '#ffc107', borderRadius: '2px' }}></div>
        </div>

        <div className="row g-3 justify-content-center">
          {features.map((feature, index) => (
            <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex">
              <div className="feature-card flex-fill p-3 bg-white rounded-3 text-center d-flex flex-column align-items-center justify-content-start mx-auto">
                <div className="icon-wrapper mb-3 d-flex align-items-center justify-content-center rounded-circle">
                  {feature.icon}
                </div>
                <h5 className="fw-bold mb-2 text-dark" style={{ fontSize: '1rem' }}>{feature.title}</h5>
                <p className="text-muted mb-0 small" style={{ lineHeight: '1.4', fontSize: '0.8rem' }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .feature-card {
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border-bottom: 4px solid rgba(0,0,0,0.05);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          border-color: #01311f;
        }

        
        .icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(1, 49, 31, 0.06);
          color: #01311f;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover .icon-wrapper {
          background: #01311f;
          color: #fff;
          transform: scale(1.1) rotate(5deg);
        }

        @media (max-width: 576px) {
        .container h2{
        font-size:1.5rem !important;}
          .feature-card {
            padding: 1.5rem .6rem;
          }
          .icon-wrapper {
            width: 50px;
            height: 50px;
          }
          h5 {
            font-size: 0.85rem !important;
          }
          p {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
