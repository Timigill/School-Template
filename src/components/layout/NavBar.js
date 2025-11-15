'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { title: 'Home', path: '/' },

    {
      title: 'Academics',
      dropdown: [
        { title: 'Programs', path: '/academics/programs' },
        { title: 'Faculty', path: '/academics/faculty' },
        { title: 'Research', path: '/academics/research' },
        { title: 'Library', path: '/academics/library' },
      ]
    },

    {
      title: 'Admissions',
      dropdown: [
        { title: 'Apply Now', path: '/admissions/apply' },
        { title: 'Requirements', path: '/admissions/requirements' },
        { title: 'Scholarships', path: '/admissions/scholarships' },
        { title: 'FAQs', path: '/admissions/faqs' },
      ]
    },

    {
      title: 'Campus Life',
      dropdown: [
        { title: 'Events', path: '/events' },
        { title: 'Student Clubs', path: '/campus-life#clubs' },
        { title: 'Sports', path: '/campus-life#sports' },
        { title: 'Housing', path: '/campus-life#housing' },
      ]
    },

    {
      title: 'Portals',
      dropdown: [
        { title: 'Student Login', path: '/portals/student' },
        { title: 'Teacher Login', path: '/portals/teacher' },
        { title: 'Parent Portal', path: '/portals/parent' },
      ]
    },

    { title: 'Contact', path: '/contact' }
  ];

  const handleDropdownClick = (path) => {
    router.push(path);
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed-top bg-white z-50 shadow-sm  border-bottom border-secondary border-opacity-25">
      <nav className="navbar navbar-expand-lg navbar-light py-2 w-100">
        <div className="container-fluid px-3 px-md-4">

          {/* Logo */}
          <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
            <img
              src="/logo.png"
              alt="Oxford House System Logo"
              style={{ height: '45px', width: '45px', objectFit: 'contain' }}
            />
            <div className="d-flex flex-column">
              <div className="d-flex align-items-baseline">
                <span
                  className="fw-bold text-uppercase"
                  style={{ fontSize: '1.8rem', color: '#01311f', letterSpacing: '0.5px' }}
                >
                  OXFORD
                </span>
                <span
                  className="fw-bold text-uppercase ms-2"
                  style={{ fontSize: '1.8rem', color: '#c6aa58', letterSpacing: '0.5px' }}
                >
                  HOUSE SYSTEM
                </span>
              </div>
              <span
                className="text-uppercase"
                style={{ fontSize: '0.6rem', color: '#c6aa58' }}
              >
                WHERE EXCELLENCE MEETS EXPECTATIONS
              </span>
            </div>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {menuItems.map((item, index) => (
                <li key={index} className="nav-item dropdown position-static">

                  {/* Dropdown Parent */}
                  {item.dropdown ? (
                    <span
                      className="nav-link dropdown-toggle px-3 py-2 fw-normal text-dark"
                      style={{ cursor: 'pointer', fontSize: '0.9rem' }}
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.title ? null : item.title)
                      }
                    >
                      {item.title}
                    </span>
                  ) : (
                    <Link
                      href={item.path}
                      className={`nav-link px-3 py-2 fw-normal ${
                        pathname === item.path ? 'text-warning fw-semibold' : 'text-dark'
                      }`}
                      style={{ fontSize: '0.9rem' }}
                    >
                      {item.title}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <ul
                      className={`dropdown-menu dropdown-menu-custom shadow border-0 mt-2 ${
                        activeDropdown === item.title ? 'show' : ''
                      }`}
                    >
                      {item.dropdown.map((dropItem, i) => (
                        <li key={i}>
                          <button
                            className="dropdown-item py-2"
                            style={{ fontSize: '0.9rem' }}
                            onClick={() => handleDropdownClick(dropItem.path)}
                          >
                            {dropItem.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}

                </li>
              ))}

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
