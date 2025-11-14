'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Academics',
      path: '/academics',
      dropdown: [
        { title: 'Programs', path: '/academics/programs' },
        { title: 'Faculty', path: '/academics/faculty' },
        { title: 'Research', path: '/academics/research' },
        { title: 'Library', path: '/academics/library' },
      ]
    },
    {
      title: 'Admissions',
      path: '/admissions',
      dropdown: [
        { title: 'Apply Now', path: '/admissions/apply' },
        { title: 'Requirements', path: '/admissions/requirements' },
        { title: 'Scholarships', path: '/admissions/scholarships' },
        { title: 'FAQs', path: '/admissions/faqs' },
      ]
    },
    {
      title: 'Campus Life',
      path: '/campus-life',
      dropdown: [
        { title: 'Events', path: '/events' },
        { title: 'Student Clubs', path: '/campus-life#clubs' },
        { title: 'Sports', path: '/campus-life#sports' },
        { title: 'Housing', path: '/campus-life#housing' },
      ]
    },
    {
      title: 'Portals',
      path: '/portals',
      dropdown: [
        { title: 'Student Login', path: '/portals/student' },
        { title: 'Teacher Login', path: '/portals/teacher' },
        { title: 'Parent Portal', path: '/portals/parent' },
      ]
    },
    {
      title: 'Contact',
      path: '/contact',
    }
  ];

  const handleDropdownClick = (path) => {
    router.push(path);
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const isLinkActive = (path) => {
    return pathname === path;
  };

  return (
    <header className="fixed-top bg-white z-50 border-bottom border-secondary border-opacity-20 shadow-lg">
      <div className="container-fluid px-4">
        <nav className="navbar navbar-expand-lg navbar-light py-2">
          {/* Logo/Brand */}
          <Link href="/" className="navbar-brand me-5 d-flex align-items-center gap-3">
            <img
              src="/logo.png"
              alt="Oxford House System Logo"
              className="img-fluid"
              style={{ height: '50px', width: '50px', objectFit: 'contain' }}
            />
            <div className="d-flex flex-column">
              <div className="d-flex align-items-baseline">
                <span className="fw-bold text-uppercase" style={{ fontSize: '1.5rem', color: '#2C5F2D', letterSpacing: '0.5px' }}>
                  OXFORD
                </span>
                <span className="fw-bold text-uppercase ms-2" style={{ fontSize: '1.5rem', color: '#FFD700', letterSpacing: '0.5px' }}>
                  HOUSE SYSTEM
                </span>
              </div>
              <span className="text-warning fw-bold text-uppercase" style={{ fontSize: '0.7rem', marginTop: '-4px' }}>
                WHERE EXCELLENCE MEETS EXPECTATIONS
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-">
              {menuItems.map((item, index) => (
                <li key={index} className="nav-item dropdown position-static">
                  <Link
                    href={item.path}
                    className={`nav-link px-3 py-1 fw-normal
                     ${isLinkActive(item.path)
                       ? 'text-warning bg-warning bg-opacity-10'
                       : 'text-dark hover-text-warning'
                     } ${item.dropdown ? 'dropdown-toggle pe-2' : ''}`}
                    style={{ fontSize: '0.875rem' }}
                    role={item.dropdown ? 'button' : undefined}
                    data-bs-toggle={item.dropdown ? 'dropdown' : undefined}
                    aria-expanded={activeDropdown === item.title ? 'true' : 'false'}
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                    onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                  >
                    {item.title}
                    {item.dropdown && (
                      <i className="fas fa-chevron-down ms-1 small"></i>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <ul 
                      className={`dropdown-menu dropdown-menu-custom p-3 border-0 shadow-lg ${
                        activeDropdown === item.title ? 'show' : ''
                      }`}
                      style={{ minWidth: '220px' }}
                    >
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <li key={dropIndex}>
                          <button
                            className="dropdown-item text-dark bg-transparent border-0 py-2 px-3 rounded hover-bg-warning"
                            onClick={() => handleDropdownClick(dropItem.path)}
                            onMouseEnter={(e) => e.currentTarget.classList.add('hover-bg-warning')}
                            onMouseLeave={(e) => e.currentTarget.classList.remove('hover-bg-warning')}
                          >
                            <i className="fas fa-arrow-right me-2 text-warning small"></i>
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
        </nav>
      </div>
    </header>
  );
}