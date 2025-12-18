
"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-custom py-4 bg-white text-white-50">
      <div className="container">
        {/* Rows */}
        <div className="row gy-4 text-center text-md-start align-items-start">

          {/* About Section */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start">
            <Link
              href="/"
              className="d-flex align-items-center gap-2 mb-2 text-decoration-none"
            >
              <img
                src="/logo.png"
                alt="Oxford House System Logo"
                style={{ height: "45px", width: "45px", objectFit: "contain" }}
              />
              <div className="d-flex flex-column">
                <span className="fw-bold text-uppercase" style={{ fontSize: "1.2rem", color: "#01311f", lineHeight: "1.2" }}>
                  OXFORD <span style={{ color: "#c6aa58" }}>HOUSE SYSTEM</span>
                </span>
                <span className="text-uppercase" style={{ fontSize: "0.6rem", color: "#c6aa58", lineHeight: "1.2" }}>
                  WHERE EXCELLENCE MEETS EXPECTATIONS
                </span>
              </div>
            </Link>
            <div className="ms-3">
              <p style={{ fontSize: "0.9rem", lineHeight: "1.8", maxWidth: "250px", color: "gray" }}>
                We commit to providing exceptional resources, fostering a culture of curiosity,
                and empowering our community with knowledge, skills, and values.
              </p>
            </div>


          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-3">
            <div className="ms-3">
              <h5 className="fw-bold text-warning mb-3">Contact Info</h5>
              <ul className="list-unstyled m-0 p-0" style={{ color: "gray" }}>
                <li>
                  Samundri Road Near Umer Medical Store<br />
                  Gojra, Punjab, Pakistan
                </li>
                <li>
                  <span>0463511488</span> | <span>0300-6558589</span>
                </li>
                <li>oxfordhousesystem@gmail.com</li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-3">
            <div className="ms-3">
              <h5 className="fw-bold text-warning mb-3">Quick Links</h5>
              <ul className="list-unstyled m-0 p-0">
                <li><a href="/" className="text-decoration-none" style={{ color: "gray" }}>Home</a></li>
                <li><a href="/academics" className="text-decoration-none" style={{ color: "gray" }}>Academics</a></li>
                <li><a href="/admissions" className="text-decoration-none" style={{ color: "gray" }}>Admissions</a></li>
                <li><a href="/contact" className="text-decoration-none" style={{ color: "gray" }}>Campus Life</a></li>
                <li><a href="/portals" className="text-decoration-none" style={{ color: "gray" }}>Portals</a></li>
                <li><a href="/contact" className="text-decoration-none" style={{ color: "gray" }}>Contact</a></li>
              </ul>
            </div>
          </div>



          {/* Social Links */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start">
            <div className="ms-3">
              <h5 className="fw-bold text-warning mb-3">Follow Us</h5>
              <div className="d-flex flex-column gap-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61580081086877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center text-decoration-none"
                  style={{ fontSize: "0.95rem", color: "gray" }}
                >
                  <FaFacebookF size={20} className="me-2" /> Facebook
                </a>
                <a
                  href="https://www.instagram.com/oxford_house_system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center text-decoration-none"
                  style={{ color: "gray", fontSize: "0.95rem" }}
                >
                  <FaInstagram size={20} className="me-2" /> Instagram
                </a>

                {/* Twitter */}
                <a

                  href="https://twitter.com/oxford_house_system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center text-decoration-none"
                  style={{ color: "gray", fontSize: "0.95rem" }}

                >
                  <FaTwitter size={20} className="me-2" /> Twitter
                </a>

                {/* YouTube */}
                <a

                  href="https://www.youtube.com/@oxford_house_system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center text-decoration-none"
                  style={{ color: "gray", fontSize: "0.95rem" }}

                >
                  <FaYoutube size={20} className="me-2" /> YouTube
                </a>
              </div>
            </div>
          </div>

        </div> {/* End row */}

        {/* Copyright */}
        <div className="mt-3 pt-3 border-top text-center text-white-50" style={{ fontSize: "0.8rem" }}>
          &copy; {new Date().getFullYear()} Oxford House System. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

