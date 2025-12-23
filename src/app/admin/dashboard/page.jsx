"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status]);

  if (status === "loading") {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh", color: "#01311f" ,fontSize: "1.2rem" , fontWeight:"bold"}}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div
      className="d-flex flex-column align-items-center p-5"
      style={{
        minHeight: "80vh",
      }}
    >
      <div
        className="bg-white rounded shadow p-4 p-md-5 w-100"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="fw-bold text-center mb-3" style={{ color: "#01311f", fontSize: "1.8rem" }}>
          Admin Dashboard
        </h2>
        <p className="text-center text-muted mb-4" style={{ fontSize: "0.9rem" }}>
          Welcome back, <span className="fw-semibold">{session?.user?.email}</span>!
        </p>

        <div className="mb-4 text-center">
          <p style={{ fontSize: "0.9rem" }}>
            Here you can manage your school's content, view reports, and update administrative settings.
          </p>
          <p className="text-muted" style={{ fontSize: "0.8rem" }}>
            Use the options below to navigate through your admin panel.
          </p>
        </div>

        <div className="d-flex justify-content-center">
          <button
            onClick={() => signOut()}
            className="btn"
            style={{
              backgroundColor: "#01311f",
              color: "#ffc107",
              fontWeight: "bold",
              padding: "0.2rem 1rem",
              borderRadius: "5px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffc107";
              e.currentTarget.style.color = "#01311f";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#01311f";
              e.currentTarget.style.color = "#ffc107";
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile adjustments */}
      <style jsx>{`
        @media (max-width: 576px) {
          div.bg-white {
            padding: 6rem 1.5rem !important;
          }

          h2 {
            font-size: 1.5rem !important;
          }

          p {
            font-size: 0.85rem !important;
          }

          button.btn {
            width: 100%;
            padding: 0.5rem 0 !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
}
