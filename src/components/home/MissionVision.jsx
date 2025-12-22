"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function AnimatedSection({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function VisionMissionValues() {
  return (
    <section
      className="container-fluid py-4 px-3 px-md-5 position-relative bg-white"
      style={{
        color: "#01311f",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239e9e9e' fill-opacity='0.15' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {/* Section Header */}
      <AnimatedSection>
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-3">School Vision & Mission</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
            Explore the guiding principles and goals that shape our
            students&apos; learning, growth, and character development.
          </p>
          <div
            className="mx-auto mt-3"
            style={{
              width: "80px",
              height: "4px",
              background: "#ffc107",
              borderRadius: "2px",
            }}
          ></div>
        </div>
      </AnimatedSection>

      {/* Vision, Logo, Mission */}
      <AnimatedSection delay={200}>
        <div className="row align-items-center g-4 justify-content-center text-center text-md-start">
          {/* Vision Box */}
          <div className="col-11 col-md-5 d-flex justify-content-center">
            <div
              className="info-box p-3 rounded-4 shadow-sm bg-light border-0 w-100"
              style={{ maxWidth: "350px" }}
            >
              <h4
                className="fw-bold text-white py-2 rounded-3 text-uppercase letter-spacing-1"
                style={{
                  background: "#01311f",
                  letterSpacing: "2px",
                  fontSize: "1.1rem",
                  textAlign: "center",
                }}
              >
                VISION
              </h4>
              <p
                className="mt-3 px-2"
                style={{ lineHeight: "1.6", fontSize: "0.8rem" }}
              >
                Empowering future leaders through excellence in education, we
                nurture global citizens who learn without limits. By inspiring
                lifelong learning, we create meaningful opportunities for every
                student to grow, explore, and reach their fullest potential.
              </p>
            </div>
          </div>

          {/* Logo */}
          <div className="col-6 col-md-2 d-flex justify-content-center">
            <div className="image-wrapper rounded-circle d-inline-block">
              <Image
                src="/logo1.png"
                alt="School Logo"
                width={120}
                height={120}
                className="object-fit-contain"
              />
            </div>
          </div>

          {/* Mission Box */}
          <div className="col-11 col-md-5 d-flex justify-content-center">
            <div
              className="info-box p-3 rounded-4 shadow-sm bg-light border-0 w-100"
              style={{ maxWidth: "350px" }}
            >
              <h4
                className="fw-bold text-white py-2 rounded-3 text-uppercase letter-spacing-1"
                style={{
                  background: "#01311f",
                  letterSpacing: "2px",
                  fontSize: "1.1rem",
                  textAlign: "center",
                }}
              >
                MISSION
              </h4>
              <p
                className="mt-3 px-2"
                style={{ lineHeight: "1.6", fontSize: "0.8rem" }}
              >
                Fostering creativity and growth while building character daily,
                we nurture global citizens with holistic skills. By engaging
                both minds and hearts, we cultivate an environment where
                learners thrive, develop, and pursue their highest aspirations.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Styles */}
      <style jsx>{`
        .fade-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .info-box {
          transition: transform 0.3s ease;
        }
        @media (hover: hover) {
          .info-box:hover {
            transform: translateY(-5px);
          }
        }
        @media (max-width: 576px) {
          h2 {
            font-size: 1.5rem !important;
          }
            h4{
            fonsize: 1rem !important; }
          .info-box {
            max-width: 90%;
            padding: 1.5rem 1rem;
          }
          .image-wrapper img {
            width: 100px !important;
            height: 100px !important;
          }
            .info-box h4 {
            font-size: 1rem !important;
          }
            .info-box p {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
