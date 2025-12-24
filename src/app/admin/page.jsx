"use client";

import { signOut } from "next-auth/react";

export default function AdminPage() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/admin/login" });
  };

  return (
    <div className="admin-container">
      {/* Header */}
      <div className="header">
        <h1>School Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <p className="subtext">
        Manage school events, activities, and faculty information
      </p>

      {/* Stats */}
      <div className="stats-grid">
        <DashboardCard title="Upcoming Events & Activities" value="8" />
        <DashboardCard title="Faculty Members" value="45" />
      </div>

      {/* Management */}
      <div className="management">
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
        .admin-container {
          padding: 16px;
          font-family: Arial, sans-serif;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .header h1 {
          color: var(--primary-color);
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
        }

        .logout-btn {
          font-weight: 600;
          padding: 6px 16px;
          border: none;
          border-radius: 6px;
          background-color: var(--primary-color);
          color: #fff;
          cursor: pointer;
          margin-top: 8px;
        }

        .logout-btn:hover {
          background-color: #fff;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
        }

        .subtext {
          color: var(--primary-color);
          margin-bottom: 32px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .management {
          margin-top: 40px;
        }

        .management h2 {
          color: var(--primary-color);
          font-size: 1.5rem;
          margin-bottom: 16px;
        }

        .management-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }

        .card {
          padding: 16px;
          border-radius: 10px;
          border: 1px solid #e5e5e5;
          background-color: #fafafa;
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 1.5rem;
            margin-bottom: 8px;
          }

          .logout-btn {
            width: 100%;
            text-align: center;
          }

          .stats-grid,
          .management-grid {
            grid-template-columns: 1fr;
          }

         
        }
      `}</style>
    </div>
  );
}

function DashboardCard({ title, value }) {
  return (
    <div className="card">
      <h3 style={{ color: "var(--primary-color)" }}>{title}</h3>
      <p style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>{value}</p>
    </div>
  );
}

function ManagementCard({ title, description, link }) {
  return (
    <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        className="card"
        style={{ color: "var(--primary-color)", cursor: "pointer" }}
      >
        <h3>{title}</h3>
        <p style={{ color: "var(--primary-color)", marginTop: "8px" }}>
          {description}
        </p>
        <button
          className="add-btn"
          style={{
            marginTop: "12px",
            width: "100%",
            maxWidth: "120px",
            padding: "6px 12px",
            backgroundColor: "var(--primary-color)",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
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
