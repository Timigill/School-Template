"use client";

import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function FacultyPage() {
  const [departments, setDepartments] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const fetchFaculty = async () => {
    try {
      const res = await fetch("/api/faculty");
      const data = await res.json();

      const deptMap = {};
      data.forEach((f) => {
        if (!deptMap[f.department]) deptMap[f.department] = [];
        deptMap[f.department].push(f);
      });

      const deptArray = Object.keys(deptMap).map((key) => ({
        name: key,
        members: deptMap[key],
      }));

      setDepartments(deptArray);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch faculty");
    }
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  return (
    <div className="faculty-page">
      <Toaster />
      <main className="faculty-container">
        <h1 className="faculty-title">Our Faculty</h1>

        {departments.length === 0 ? (
          <p className="no-faculty">No faculty members found.</p>
        ) : (
          departments.map((department, idx) => (
            <section key={idx} className="department-section">
              <h2 className="department-title">{department.name} Department</h2>
              <div className="faculty-grid">
                {department.members.map((member, i) => (
                  <div key={i} className="faculty-card">
                    <div className="faculty-photo-wrap">
                      {member.image ? (
                        <img src={member.image} alt={member.name} />
                      ) : (
                        <div className="faculty-placeholder">👤</div>
                      )}
                    </div>

                    <div className="faculty-details">
                      <h3 className="faculty-name">{member.name}</h3>
                      <p className="faculty-role">{member.role}</p>

                      {member.qualification && (
                        <p className="faculty-qualification">
                          {member.qualification}
                        </p>
                      )}

                      <button
                        className="faculty-btn"
                        onClick={() => setSelectedFaculty(member)}
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </main>

      {selectedFaculty && (
        <div
          className="faculty-modal-backdrop"
          onClick={() => setSelectedFaculty(null)}
        >
          <div className="faculty-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedFaculty.name}</h2>
              <button onClick={() => setSelectedFaculty(null)}>&times;</button>
            </div>
            <div className="modal-body">
              <div className="modal-photo">
                {selectedFaculty.image ? (
                  <img src={selectedFaculty.image} alt={selectedFaculty.name} />
                ) : (
                  <div className="faculty-placeholder">👤</div>
                )}
              </div>
              <p>
                <strong>Role:</strong> {selectedFaculty.role}
              </p>
              {selectedFaculty.department && (
                <p>
                  <strong>Department:</strong> {selectedFaculty.department}
                </p>
              )}
              {selectedFaculty.qualification && (
                <p>
                  <strong>Qualification:</strong>{" "}
                  {selectedFaculty.qualification}
                </p>
              )}
              {selectedFaculty.specialization && (
                <p>
                  <strong>Specialization:</strong>{" "}
                  {selectedFaculty.specialization}
                </p>
              )}
              {selectedFaculty.email && (
                <p>
                  <strong>Email:</strong> {selectedFaculty.email}
                </p>
              )}
              {selectedFaculty.phone && (
                <p>
                  <strong>Phone:</strong> {selectedFaculty.phone}
                </p>
              )}
            </div>
            <div className="modal-footer">
              <button onClick={() => setSelectedFaculty(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Page & Container */
        .faculty-page {
          min-height: 100vh;
          background: #f8f8f8;
        }
        .faculty-container {
          padding: 60px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Title */
        .faculty-title {
          text-align: center;
          font-size: 3rem;
          color: #c6aa58;
          margin-bottom: 60px;
          font-weight: 700;
        }

        /* Department Section */
        .department-section {
          margin-bottom: 60px;
        }
        .department-title {
          text-align: center;
          font-size: 2rem;
          color: #01311f;
          font-weight: 700;
          margin-bottom: 40px;
        }

        /* Faculty Grid */
        .faculty-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }

        /* Faculty Card */
        /* FACULTY CARD */
        .faculty-card {
          background: #fff;
          border-radius: 18px;
          padding: 24px 18px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .faculty-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
          border-color: #01311f;
        }

        /* PHOTO */
        .faculty-photo-wrap {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #01311f;
          margin-bottom: 14px;
          background: #f1f5f9;
        }

        .faculty-photo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* TEXT */
        .faculty-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #01311f;
          margin-bottom: 4px;
        }

        .faculty-role {
          font-size: 0.95rem;
          font-weight: 600;
          color: #c6aa58;
          margin-bottom: 6px;
        }

        .faculty-qualification {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 10px;
        }

        /* BUTTON */
        .faculty-btn {
          margin-top: auto;
          padding: 6px 18px;
          border-radius: 20px;
          border: 2px solid #01311f;
          background: #01311f;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .faculty-btn:hover {
          background: #fff;
          color: #01311f;
        }

        /* MOBILE OPTIMIZATION */
        @media (max-width: 480px) {
          .faculty-photo-wrap {
            width: 90px;
            height: 90px;
            border-width: 3px;
          }

          .faculty-name {
            font-size: 1.05rem;
          }

          .faculty-role {
            font-size: 0.85rem;
          }

          .faculty-card {
            padding: 16px 12px;
          }
        }

        /* Modal */
        .faculty-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .faculty-modal {
          background: #fff;
          border-radius: 12px;
          padding: 24px;
          max-width: 450px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .modal-header h2 {
          margin: 0;
          font-size: 1.6rem;
          color: #01311f;
        }
        .modal-header button {
          font-size: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
        }
        .modal-body {
          text-align: left;
        }
        .modal-photo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 16px;
          flex-shrink: 0;
        }
        .modal-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-body p {
          font-size: 0.95rem;
          margin: 6px 0;
        }
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 16px;
        }
        .modal-footer button {
          padding: 8px 16px;
          border-radius: 6px;
          border: 1px solid #01311f;
          background: #01311f;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
        }
        .modal-footer button:hover {
          background: #fff;
          color: #01311f;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .faculty-title {
            font-size: 2.6rem;
          }
          .department-title {
            font-size: 1.8rem;
          }
        }
        @media (max-width: 768px) {
          .faculty-title {
            font-size: 2.3rem;
          }
          .department-title {
            font-size: 1.6rem;
          }
          .faculty-photo {
            width: 110px;
            height: 110px;
          }
        }
        @media (max-width: 480px) {
          .faculty-title {
            font-size: 2rem;
          }
          .department-title {
            font-size: 1.4rem;
          }
          .faculty-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
          }
          .faculty-photo {
            width: 90px;
            height: 90px;
          }
          .faculty-btn {
            padding: 5px 16px;
            font-size: 0.9rem;
          }
          .faculty-card {
            padding: 16px 12px;
          }
        }
      `}</style>
    </div>
  );
}
