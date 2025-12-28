"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";
  const [menuOpen, setMenuOpen] = useState(false);

  if (isLoginPage) return <>{children}</>;

  return (
    <div className="admin-wrapper">
      {/* Mobile Top Bar */}
      <div className="mobile-topbar">
        <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <span>Admin Panel</span>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <h2 className="logo">Admin</h2>
        <nav>
          <a href="/admin">Dashboard</a>
          <a href="/admin/events">Events</a>
          <a href="/admin/faculty">Faculty</a>
          <a href="/">Main Site</a>
        </nav>
      </aside>

      {/* Main */}
      <main className="content" onClick={() => setMenuOpen(false)}>
        {children}
      </main>

      <style jsx>{`
        .admin-wrapper {
          display: flex;
          min-height: 100vh;
          background: #f1f5f9;
        }

        /* ===== SIDEBAR ===== */
        .sidebar {
          width: 220px;
          background: var(--primary-color);
          color: #fff;
          padding: 20px;
        }

        .logo {
          margin-bottom: 20px;
          font-size: 18px;
          font-weight: 700;
        }

        .sidebar nav a {
          display: block;
          color: #e2e8f0;
          text-decoration: none;
          margin-bottom: 12px;
          font-size: 14px;
        }

        /* ===== MAIN ===== */
        .content {
          flex: 1;
          padding: 16px;
        }

        /* ===== MOBILE ===== */
        .mobile-topbar {
          display: none;
        }

        @media (max-width: 768px) {
          .admin-wrapper {
            flex-direction: column;
          }

          .mobile-topbar {
            display: flex;
            align-items: center;
            gap: 12px;
            background: var(--primary-color);
            color: #fff;
            padding: 19px 16px;
          }

          .mobile-topbar button {
            background: none;
            border: none;
            color: #fff;
            font-size: 20px;
            cursor: pointer;
          }

          .sidebar {
            position: absolute;
            top: 52px;
            left: 0;
            width: 180px;
            height: calc(100vh - 52px);
            transform: translateX(-100%);
            transition: transform 0.25s ease;
            z-index: 100;
          }

          .sidebar.open {
            transform: translateX(0);
          }

          .content {
            padding: 14px;
          }
        }
      `}</style>
    </div>
  );
}
