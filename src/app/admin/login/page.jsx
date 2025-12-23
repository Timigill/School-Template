"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hover, setHover] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!res.error) {
      router.push("/admin/dashboard");
    } else {
      if (res.error === "wrong-email") {
        toast.error("Wrong email!", { position: "top-center" });
      } else if (res.error === "wrong-password") {
        toast.error("Incorrect password!", { position: "top-center" });
      } else {
        toast.error(res.error || "Invalid credentials", { position: "top-center" });
      }
    }
  };

  const buttonStyle = {
    width: "100%",
    borderRadius: "5px",
    marginBottom: "1rem",
    fontWeight: "bold",
    color: hover ? "#01311f" : "#ffc107",
    backgroundColor: hover ? "#ffc107" : "#01311f",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: "none",
    padding: "0.5rem 0.75rem",
  };

  return (
    <div
      className="d-flex justify-content-center align-items-start"
      style={{
        minHeight: "80vh",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        background: "linear-gradient(135deg, #f7f7f7, #e0e0e0)",
      }}
    >
      <Toaster />
      <div
        className="d-flex flex-column align-items-center p-3 p-md-5 bg-white rounded shadow"
        style={{ maxWidth: "400px", width: "70%" }}
      >
        <Image
          src="/logo1.png"
          alt="Oxford House System Logo"
          width={60}
          height={60}
          className="mb-3"
        />
        <h2
          className="fw-bold text-center mb-2"
          style={{ color: "#01311f", fontSize: "1.8rem" }}
        >
          Admin Portal
        </h2>
        <p className="text-center text-muted mb-4" style={{ fontSize: "0.9rem" }}>
          Welcome back! Please login to access the admin dashboard.
        </p>

        <form onSubmit={handleSubmit} className="w-100">
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              placeholder="admin@school.com"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              placeholder="********"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Login
          </button>

          <p className="text-center text-muted" style={{ fontSize: "0.8rem" }}>
            Forgot your password? Contact the system administrator.
          </p>
        </form>

        <hr style={{ width: "100%", margin: ".5rem 0", borderColor: "#ddd" }} />

        <div className="text-center">
          <h6 style={{ color: "#c6aa58", fontWeight: "600" }}>Oxford House System</h6>
          <p className="text-muted" style={{ fontSize: "0.8rem" }}>
            Empowering excellence in education and management.
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 576px) {
          h2 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
