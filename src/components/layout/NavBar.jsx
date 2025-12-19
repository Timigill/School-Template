'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/aboutUs' },
    { title: 'Faculty', path: '/faculty' },
    { title: 'Events', path: '/events' },
    { title: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsVisible(true);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <header
      className="fixed-top navbar-glass z-50"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out'
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-light py-2 w-100">
        <div className="container-fluid px-3 px-md-4">

          {/* Logo */}
          <Link href="/" className="navbar-brand d-flex align-items-center gap-1">
            <Image
              src="/logo1.png"
              alt="Oxford House System Logo"
              width={45}
              height={45}
              className="object-fit-contain"
              style={{ height: '45px', width: '45px', objectFit: 'contain' }}
            />
            <div className="d-flex flex-column justify-content-center" style={{ height: '50px' }}>
              <div className="d-flex align-items-baseline" style={{ lineHeight: '1' }}>
                <span className=" text-uppercase" style={{ fontSize: '2.1rem', fontWeight: '800', color: '#053b27ff', lineHeight: '1' }}>
                  OXFORD HOUSE SYSTEM
                </span>
              </div>
              <span className="text-uppercase ms-1 " style={{ fontSize: '0.7rem', color: '#ffc107', letterSpacing: '1px', lineHeight: '1' }}>
                WHERE EXCELLENCE MEETS EXPECTATIONS
              </span>
            </div>
          </Link>

          {/* Mobile Toggle (Custom Arrow instead of Hamburger) */}
          <div className="d-lg-none d-flex justify-content-center flex-grow-1">
            <button
              className="navbar-toggler border-0"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaChevronDown
                size={22}
                className={`transition ${isMenuOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Main Menu */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">

              {menuItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link
                    href={item.path}
                    className={`nav-link px-3 py-2 fw-medium ${pathname === item.path ? 'text-warning' : 'text-dark'
                      }`}
                    style={{ fontSize: '1rem', transition: 'color 0.3s' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        </div>

        {/* Arrow Rotate CSS */}
        <style jsx>{`
          .transition {
            transition: transform 0.3s ease;
          }
          .rotate-180 {
            transform: rotate(180deg);
          }
        `}</style>
      </nav>
    </header>
  );
}



