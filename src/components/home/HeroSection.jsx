"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-mobile position-relative min-vh-100 d-flex flex-column justify-content-center bg-white">
      {/* Desktop Background Image (unchanged) */}
      <div
        className="position-absolute top-0 end-0 w-100 w-lg-50 h-100 overflow-hidden d-none d-md-block"
        style={{ width: "50%" }}
      >
        <Image
          src="/mask/flag2.png"
          alt="Oxford House System"
          fill
          className="object-fit-cover"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>
      </div>

      {/* Mobile Background Image (top half only) */}
      {/* Mobile Background Image (top half only) */}
      <div
className="position-absolute top-0 start-0 w-100 d-md-none overflow-hidden hero-mobile-bg"
        style={{ zIndex: 0 }}
      >
        <Image
          src="/mask/flag2.png"
          alt="Oxford House System"
          fill
          className="object-fit-cover"
          style={{
            objectPosition: "85% center",
          }}
        />
        {/* White overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            zIndex: 1,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div
        className="position-relative container-fluid pt-5 mt-5 pb-5 px-2"
        style={{ color: "var(--primary-color)", zIndex: 1 }}
      >
        {/* Heading */}
        <div
          className="fade-up mb-4"
          style={{ maxWidth: "900px", marginTop: "10%", marginLeft: "2%" }}
        >
          <h1 className="display-5 fw-bold">
            Driving Academic Excellence and Transformative Learning{" "}
            <span style={{ display: "flex", textAlign: "end" }}>in Gojra</span>
          </h1>
          <p className="subtitle mt-3" style={{ fontSize: "1.2rem" }}>
            Future Ready Education for Every Child
          </p>

          {/* Buttons */}
          <div className="d-flex flex-wrap gap-3 mt-3 buttons">
            <Link href="/contact">
              <button className="btn btn-primary fw-bold px-4 py-2">
                Contact Us
              </button>
            </Link>

            <Link href="/contact">
              <button
                className="btn btn-outline-primary fw-bold px-4 py-2"
                style={{ border: "1px solid white", color: "white" }}
              >
                Visit Us
              </button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="position-relative mt-4 pt-4">
          <div className="row g-3 fade-up">
            {[
              { number: "1000+", label: "Students" },
              { number: "50+", label: "Expert Faculty" },
              { number: "95%", label: "Placement Rate" },
              { number: "20+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i} className="col-6 col-md-3">
                <div
                  className="glass-card text-center p-2 m-auto"
                  style={{
                    border: "1px solid var(--primary-color)",
                    backgroundColor: "var(--card-bg)",
                    cursor: "default",
                  }}
                >
                  <h3 className="fw-bold fs-2" style={{ color: "white" }}>
                    {stat.number}
                  </h3>
                  <p style={{ color: "white" }}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div
            className="scroll-indicator position-absolute m-auto"
            style={{
              left: "50%",
              transform: "translateX(-50%) !important",
              bottom: "-50px",
            }}
          ></div>
        </div>

        {/* Quick Links */}
        <div className="row g-5 mt-5 fade-up">
          {[
            {
              title: "Apply Now",
              link: "/admissions#apply",
              description: "Start your journey",
            },
            {
              title: "Events",
              link: "/events",
              description: "Campus activities",
            },
            {
              title: "Programs",
              link: "/academics#programs",
              description: "Explore courses",
            },
            {
              title: "Portal",
              link: "/portals/student",
              description: "Student login",
            },
          ].map((item, i) => (
            <div key={i} className="col-6 col-md-3">
              <Link href={item.link} className="text-decoration-none">
                <div
                  className="glass-card p-2 mx-auto quick-link"
                  style={{
                    border: "1px solid var(--primary-color)",
                    cursor: "pointer",
                    backgroundColor: "var(--card-bg)",
                  }}
                >
                  <h4 className="fw-bold mt-2" style={{ color: "White" }}>
                    {item.title}
                  </h4>
                  <p className="small" style={{ color: "white" }}>
                    {item.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
