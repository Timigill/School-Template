"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer-custom py-5">
        <div className="container">
          <div className="row">

            {/* About Section */}
            <div className="col-md-3 mb-4 d-flex flex-column">

              {/* Logo + Text Row */}
              <div className="d-flex align-items-center gap-2 flex-wrap">
                {/* Logo */}
                <img
                  src="/logo.png"
                  alt="Oxford House System Logo"
                  style={{ height: "45px", width: "45px", objectFit: "contain" }}
                />

                {/* Title + Motto */}
                <div className="d-flex flex-column">
                  <span
                    className="fw-bold text-uppercase"
                    style={{
                      fontSize: "1.1rem",
                      color: "#01311f",
                      letterSpacing: "0.5px",
                      lineHeight: "1.2",
                    }}
                  >
                    OXFORD <span style={{ color: "#c6aa58" }}>HOUSE SYSTEM</span>
                  </span>

                  <span
                    className="text-uppercase"
                    style={{
                      fontSize: "0.55rem",
                      color: "#c6aa58",
                      lineHeight: "1.2",
                    }}
                  >
                    WHERE EXCELLENCE MEETS EXPECTATIONS
                  </span>
                </div>
              </div>

              {/* Paragraph */}
              <p
                className="text-white-50 mt-2"
                style={{ fontSize: "0.8rem", lineHeight: "1.4" }}
              >
                We commit to providing exceptional resources, fostering a culture of curiosity,
                and empowering our community with knowledge, skills, and values that shape a brighter future.
              </p>

            </div>

            {/* Quick Links */}
            <div className="col-md-3 mb-4">
              <h3 className="h5 fw-bold text-warning mb-3">Quick Links</h3>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white-50 text-decoration-none">Home</a></li>
                <li><a href="/academics" className="text-white-50 text-decoration-none">Academics</a></li>
                <li><a href="/admissions" className="text-white-50 text-decoration-none">Admissions</a></li>
                <li><a href="/contact" className="text-white-50 text-decoration-none">Campus Life</a></li>
                <li><a href="/portals" className="text-white-50 text-decoration-none">Portals</a></li>
                <li><a href="/contact" className="text-white-50 text-decoration-none">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-3 mb-4">
              <h3 className="h5 fw-bold text-warning mb-3">Contact Info</h3>
              <ul className="list-unstyled text-white-50">
                <li>
                  Samundri Road Near Umer Medical <br /> Store Gojra, Punjab, Pakistan
                </li>
                <li>0463511488</li>
                <li>0300-6558589</li>
                <li>oxfordhousesystem@gmail.com</li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="col-md-3 mb-4">
              <h3 className="h5 fw-bold text-warning mb-3">Follow Us</h3>

              <div
                className="d-flex flex-column gap-2 align-items-start"
                style={{ width: "fit-content" }}
              >
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61580081086877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center text-decoration-none"
                  style={{ color: "black", fontSize: "0.95rem" }}
                >
                  <FaFacebookF size={22} className="me-2" />
                  facebook
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/oxford_house_system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center text-decoration-none"
                  style={{ color: "black", fontSize: "0.95rem" }}
                >
                  <FaInstagram size={22} className="me-2" />
                  instagram
                </a>


              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="mt-4 pt-3 border-top text-center text-white-50">
            <p>&copy; {new Date().getFullYear()} Oxford House System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}


