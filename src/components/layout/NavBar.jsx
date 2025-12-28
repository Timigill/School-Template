"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/aboutUs" },
    { title: "Faculty", path: "/faculty" },
    { title: "Events", path: "/events" },
    { title: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsVisible(true), 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <header
      className="fixed-top w-100"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        zIndex: 9999,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3 ">
        {/* Logo */}
        <Link
          href="/"
          className="d-flex align-items-center gap-2 logo-container"
          style={{ textDecoration: "none" }}
        >
          <Image
            src="/logo1.png"
            width={45}
            height={45}
            alt="Logo"
            className="logo-image"
          />
          <div className="d-flex flex-column">
            <span className="logo-title">OXFORD HOUSE SYSTEM</span>
            <span className="logo-subtitle">
              WHERE EXCELLENCE MEETS EXPECTATIONS
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="d-none d-lg-flex list-unstyled mb-0 gap-4 align-items-center">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className={`fw-medium ${
                  pathname === item.path ? "text-warning" : "text-dark"
                }`}
                style={{
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  transition: "color 0.3s",
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="d-lg-none border-0 bg-transparent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`transition d-inline-block ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          >
            <FaChevronDown size={22} />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`d-lg-none bg-white w-100 overflow-hidden`}
        style={{
          maxHeight: isMenuOpen ? "500px" : "0",
          transition: "max-height 0.4s ease",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <ul className="list-unstyled mb-0 py-2">
          {menuItems.map((item, index) => (
            <li key={index} className="text-center">
              <Link
                href={item.path}
                className={`fw-medium ${
                  pathname === item.path ? "text-warning" : "text-dark"
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  fontSize: "1.1rem",
                  padding: "6px 0",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Styles */}
      <style jsx>{`
        .transition {
          transition: transform 0.3s ease;
        }
        .rotate-180 {
          transform: rotate(180deg);
        }

        .logo-image {
          transition: transform 0.3s ease;
        }
        .logo-container:hover .logo-image {
          transform: scale(1.2); /* Increase size on hover */
        }

        /* Logo text */
        .logo-title {
          font-weight: 800;
          font-size: 1.9rem;
          color: #01311f;
        }
        .logo-subtitle {
          font-size: 0.66rem;
          letter-spacing: 1px;
          color: #ffc107;
          margin-top: -9px;
        }

        /* Mobile responsive: shrink logo text */
        @media (max-width: 992px) {
          .logo-title {
            font-size: 1.2rem;
            margin-left: -8px;
          }
          .logo-subtitle {
            font-size: 0.55rem;
            margin-top: -5px;
            margin-left: -8px;
          }
        }
      `}</style>
    </header>
  );
}
