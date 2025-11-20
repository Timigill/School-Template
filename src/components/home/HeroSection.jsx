'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="position-relative min-vh-100 d-flex flex-column justify-content-center bg-dark">

      {/* Video Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden hero-video">
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="position-relative container-fluid pt-5 pb-5 px-5 mx-4"
        style={{
          color: "var(--primary-color)"
        }}>
        {/* Heading */}

        <div className="fade-up mb-4" style={{ maxWidth: "900px", marginTop: "10%" }}>
          <h1 className="display-5 fw-bold">

            Driving Academic Excellence and Transformative Learning <span style={{ display: "flex", textAlign: "end" }}>in Gojra</span>
            {/* Oxford <span className="text-warning">House</span> System */}
          </h1>
          <p className="fs-4 text-light"
            style={{
              color: "var(----primary-color)"
            }}
          >
            Future Ready Education for Every Child
          </p>

          {/* Buttons */}
          <div className="d-flex flex-wrap gap-3 mt-3">
            <Link href="/admissions#apply">
              <button className="btn btn-primary fw-bold px-4 py-2">
                Apply Now →
              </button>
            </Link>

            <Link href="/virtual-tour">
              <button className="btn btn-outline-primary fw-bold px-4 py-2"
                style={{ border: "1px solid white", color: "white" }}
              >
                Virtual Tour
              </button>
            </Link>
          </div>
        </div>


        {/* Stats Section */}
<div className="position-relative mt-5 pt-4">
  
  {/* Stats Section */}
  <div className="row g-5 fade-up">
    {[ 
      { number: "1000+", label: "Students" },
      { number: "50+", label: "Expert Faculty" },
      { number: "95%", label: "Placement Rate" },
      { number: "20+", label: "Years Experience" }
    ].map((stat, i) => (
      <div key={i} className="col-6 col-md-3">
        <div
          className="glass-card text-center p-2 m-auto"
          style={{
            border: "1px solid var(--primary-color)",
            backgroundColor: "var(--card-bg)",
            cursor: "default"
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
      bottom: "-85px", // adjust as needed
    }}
  ></div>
</div>

        {/* Quick Links */}
        <div className="row g-5 mt-5 fade-up">
          {[
            { title: "Apply Now", link: "/admissions#apply", description: "Start your journey" },
            { title: "Events", link: "/events", description: "Campus activities" },
            { title: "Programs", link: "/academics#programs", description: "Explore courses" },
            { title: "Portal", link: "/portals/student", description: "Student login" }
          ].map((item, i) => (
            <div key={i} className="col-6 col-md-3">
              <Link href={item.link} className='text-decoration-none'>
                <div className="glass-card p-2 mx-auto quick-link"
                  style={{
                    border: "1px solid var(--primary-color)", cursor: 'pointer',
                    backgroundColor: "var(--card-bg)"
                  }}
                >
                  <h5
                    className="fw-bold mt-2"
                    style={{
                      color: "var(--accent-color)",
                      WebkitTextStroke: "0.2px white"
                    }}
                  >
                    {item.title}
                  </h5>

                  <p className="small"
                    style={{
                      color: "white"
                    }}
                  >{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
