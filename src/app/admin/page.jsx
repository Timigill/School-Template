"use client";

import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";

export default function AdminPage() {
  const [eventsCount, setEventsCount] = useState(0);
  const [facultyCount, setFacultyCount] = useState(0);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/admin/login" });
  };

  // Fetch total number of events
  const fetchEventsCount = async () => {
    try {
      const res = await fetch("/api/events");
      const data = await res.json();
      setEventsCount(data.length);
    } catch (err) {
      console.error("Failed to fetch events:", err);
    }
  };

  // Fetch total number of faculty
  const fetchFacultyCount = async () => {
    try {
      const res = await fetch("/api/faculty");
      const data = await res.json();
      setFacultyCount(data.length);
    } catch (err) {
      console.error("Failed to fetch faculty:", err);
    }
  };

  useEffect(() => {
    fetchEventsCount();
    fetchFacultyCount();
  }, []);

  return (
    <div className="admin-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Manage school events, activities, and faculty</p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="stats">
        <DashboardCard title="Upcoming Events & Activities" value={eventsCount} />
        <DashboardCard title="Faculty Members" value={facultyCount} />
      </div>

      {/* Management */}
      <div className="section">
        <h2>Management</h2>

        <div className="management-grid">
          <ManagementCard
            title="Events & Activities Manager"
            description="Create, update, and manage school events and activities."
            link="/admin/events"
          />

          <ManagementCard
            title="Faculty Manager"
            description="Add, edit, and organize faculty members."
            link="/admin/faculty"
          />
        </div>
      </div>

      <style jsx>{`
        .admin-wrapper {
          padding: 20px;
          background: #f8fafc;
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }

        .top-bar {
          background: #fff;
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          border: 1px solid #e5e7eb;
        }

        .top-bar h1 {
          margin: 0;
          font-size: 1.8rem;
          color: var(--primary-color);
        }

        .top-bar p {
          margin: 4px 0 0;
          color: #213127ff;
          font-size: 14px;
        }

        .logout-btn {
          padding: 8px 18px;
          background: var(--primary-color);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }

        .logout-btn:hover {
          background: #fff;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        .section h2 {
          margin-bottom: 16px;
          color: var(--primary-color);
          font-size: 1.4rem;
        }

        .management-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }

        .card {
          background: #fff;
          border-radius: 12px;
          padding: 18px;
          border: 1px solid #e5e7eb;
          transition: transform 0.2s ease;
        }

        .card:hover {
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .top-bar {
            flex-direction: column;
            align-items: flex-start;
          }

          .logout-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

function DashboardCard({ title, value }) {
  return (
    <div className="card">
      <h3 style={{ margin: 0, color: "#213127ff", fontSize: "14px" }}>{title}</h3>
      <p style={{ fontSize: "28px", fontWeight: "700", margin: "10px 0 0", color: "var(--primary-color)" }}>
        {value}
      </p>
    </div>
  );
}

function ManagementCard({ title, description, link }) {
  return (
    <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="card">
        <h3 style={{ marginTop: 0, color: "var(--primary-color)" }}>{title}</h3>
        <p style={{ color: "#213127ff", fontSize: "14px" }}>{description}</p>
        <button
          style={{
            marginTop: "14px",
            padding: "8px 14px",
            backgroundColor: "var(--primary-color)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#fff";
            e.currentTarget.style.color = "var(--primary-color)";
            e.currentTarget.style.border = "1px solid var(--primary-color)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--primary-color)";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.border = "none";
          }}
        >
          Add Now
        </button>
      </div>
    </a>
  );
}
