"use client";

import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function FacultyPage() {
  const [faculties, setFaculties] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newFaculty, setNewFaculty] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    department: "",
    qualification: "",
    imageFile: null, // store the selected file
  });

  const fetchFaculty = async () => {
    try {
      const res = await fetch("/api/faculty");
      const data = await res.json();
      setFaculties(data);
    } catch (err) {
      toast.error("Failed to fetch faculty");
    }
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  const handleAddOrEdit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!newFaculty.name || !newFaculty.role || !newFaculty.email) {
      toast.error("Name, role, and email are required");
      return;
    }
    if (!emailRegex.test(newFaculty.email)) {
      toast.error("Invalid email format");
      return;
    }
    if (newFaculty.phone && !phoneRegex.test(newFaculty.phone)) {
      toast.error("Phone number must be 10-15 digits");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", newFaculty.name);
      formData.append("role", newFaculty.role);
      formData.append("email", newFaculty.email);
      formData.append("phone", newFaculty.phone);
      formData.append("department", newFaculty.department);
      formData.append("qualification", newFaculty.qualification);
      if (newFaculty.imageFile) formData.append("image", newFaculty.imageFile);
      if (editingId) formData.append("id", editingId);

      const res = await fetch("/api/faculty", {
        method: editingId ? "PUT" : "POST",
        body: formData,
      });

      const saved = await res.json();
      if (editingId) {
        setFaculties(faculties.map((f) => (f._id === editingId ? saved : f)));
        toast.success("Faculty updated");
      } else {
        setFaculties([...faculties, saved]);
        toast.success("Faculty added");
      }

      setNewFaculty({
        name: "",
        role: "",
        email: "",
        phone: "",
        department: "",
        qualification: "",
        imageFile: null,
      });
      setEditingId(null);
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to save faculty");
    }
  };

  const handleEdit = (faculty) => {
    setNewFaculty({
      name: faculty.name,
      role: faculty.role,
      email: faculty.email,
      phone: faculty.phone || "",
      department: faculty.department || "",
      qualification: faculty.qualification || "",
      imageFile: null, // keep null initially; user can replace
    });
    setEditingId(faculty._id);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            minWidth: "300px",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            textAlign: "center",
            marginTop: "40vh",
          }}
        >
          <p style={{ margin: 0, fontWeight: 600, color: "#333" }}>
            Are you sure you want to delete this faculty?
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <button
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                border: "1px solid var(--primary-color)",
                background: "var(--primary-color)",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
              onClick={async () => {
                try {
                  await fetch("/api/faculty", {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id }),
                  });
                  setFaculties(faculties.filter((f) => f._id !== id));
                  toast.success("Faculty deleted successfully");
                  toast.dismiss(t.id);
                } catch (err) {
                  console.error(err);
                  toast.error("Failed to delete faculty");
                }
              }}
            >
              Delete
            </button>
            <button
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                background: "#fff",
                color: "#555",
                fontWeight: 600,
                cursor: "pointer",
              }}
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        position: "top-center",
        duration: 5000,
        icon: null,
        style: { background: "transparent", boxShadow: "none" },
      }
    );
  };

  return (
    <div className="admin-wrapper">
      <Toaster />
      <div className="top-bar">
        <h1>Faculty Manager</h1>
        <p>Manage all faculty members</p>
        <button className="add-btn" onClick={() => setIsModalOpen(true)}>
          + Add Faculty
        </button>
      </div>

      {/* Faculty list */}
      <div className="faculty-list">
        {faculties.length === 0 ? (
          <p>No faculty members found. Add new faculty.</p>
        ) : (
          faculties.map((f) => (
            <div key={f._id} className="card">
              {f.image && (
                <img
                  src={f.image}
                  alt={f.name}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    marginTop: "6px",
                    objectFit: "cover",
                  }}
                />
              )}
              <h3>{f.name}</h3>
              <p>Role: {f.role}</p>
              <p>Email: {f.email}</p>
              {f.phone && <p>Phone: {f.phone}</p>}
              {f.department && <p>Department: {f.department}</p>}
              {f.qualification && <p>Qualification: {f.qualification}</p>}
              <div className="actions">
                <button className="edit-btn" onClick={() => handleEdit(f)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(f._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{editingId ? "Edit Faculty" : "Add Faculty"}</h2>
            <input
              placeholder="Name"
              value={newFaculty.name}
              onChange={(e) =>
                setNewFaculty({ ...newFaculty, name: e.target.value })
              }
            />
            <input
              placeholder="Role"
              value={newFaculty.role}
              onChange={(e) =>
                setNewFaculty({ ...newFaculty, role: e.target.value })
              }
            />
            <input
              placeholder="Email"
              value={newFaculty.email}
              onChange={(e) =>
                setNewFaculty({ ...newFaculty, email: e.target.value })
              }
            />
            <input
              placeholder="Phone"
              value={newFaculty.phone}
              onChange={(e) =>
                setNewFaculty({ ...newFaculty, phone: e.target.value })
              }
            />
            <input
              placeholder="Department"
              value={newFaculty.department}
              onChange={(e) =>
                setNewFaculty({ ...newFaculty, department: e.target.value })
              }
            />
            <input
              placeholder="Qualification"
              value={newFaculty.qualification}
              onChange={(e) =>
                setNewFaculty({ ...newFaculty, qualification: e.target.value })
              }
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setNewFaculty({ ...newFaculty, imageFile: e.target.files[0] })
              }
            />
            <div className="modal-actions">
              <button className="save-btn" onClick={handleAddOrEdit}>
                {editingId ? "Update" : "Add"}
              </button>
              <button
                className="cancel-btn"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .admin-wrapper {
          padding: 20px;
          min-height: 100vh;
          font-family: Arial, sans-serif;
          background: #f0f2f5;
        }
        .top-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .top-bar h1 {
          margin: 0;
          color: var(--primary-color);
          font-size: 1.8rem;
        }
        .top-bar p {
          margin: 4px 0 0;
          color: #333;
          font-size: 14px;
        }
        .add-btn {
          padding: 8px 16px;
          background: var(--primary-color);
          color: #fff;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          font-weight: 600;
        }
        .add-btn:hover {
          background: #fff;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
        }
        .faculty-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }
        .card {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #ddd;
        }
        .card h3 {
          margin: 10px 0 6px 0;
          font-size: 22px;
          color: var(--primary-color);
        }
        .card p {
          font-size: 14px;
          color: #555;
          margin-bottom: 8px;
        }
        .actions button {
          margin-right: 8px;
          padding: 4px 12px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }
        .edit-btn {
          background: var(--primary-color);
          border: none;
          color: #fff;
        }
        .edit-btn:hover {
          background: #fff;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
        }
        .delete-btn {
          background: #fff;
          border: 1px solid var(--primary-color);
          color: var(--primary-color);
        }
        .delete-btn:hover {
          background: var(--primary-color);
          color: #fff;
        }
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          width: 90%;
          max-width: 400px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 58vh;
          overflow-y: auto;
        }
        .modal h2 {
          margin: 0 0 10px 0;
          font-size: 22px;
          color: var(--primary-color);
        }
        .modal input {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          width: 100%;
          font-size: 14px;
          outline: none;
        }

        .modal input:focus {
          border-color: var(--primary-color);
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }
        .save-btn {
          background: var(--primary-color);
          color: #fff;
          padding: 6px 16px;
          border-radius: 6px;
          font-weight: 600;
          border: 1px solid var(--primary-color);
          cursor: pointer;
        }
        .save-btn:hover {
          background: #fff;
          color: var(--primary-color);
        }
        .cancel-btn {
          background: #fff;
          color: var(--primary-color);
          padding: 6px 16px;
          border-radius: 6px;
          font-weight: 600;
          border: 1px solid var(--primary-color);
          cursor: pointer;
        }
        .cancel-btn:hover {
          background: var(--primary-color);
          color: #fff;
        }

        @media (max-width: 500px) {
          .top-bar {
            flex-direction: column;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
          }
          .top-bar h1 {
            font-size: 1.4rem;
            text-align: center;
            line-height: 1.2;
          }
          .top-bar p {
            font-size: 12px;
          }
          .add-btn {
            font-size: 12px;
            padding: 6px 12px;
            width: 30%;
          }
          .faculty-list {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .card {
            padding: 14px;
            justify-content: center;
            text-align: center;

            border-radius: 8px;
          }
          .card img {
            justify-content: center;
            margin: 0 auto 10px auto;
            width: 100px;
            height: 100px;
          }
          .card h3 {
            font-size: 16px;
          }
          .card p {
            font-size: 13px;
            margin-bottom: 6px;
          }
          .actions button {
            flex: 1 1 48%;
            padding: 4px 16px;
            font-size: 12px;
          }
          .modal {
            width: 90%;
            padding: 16px;
            max-height: 50vh;
          }
          .modal h2 {
            font-size: 18px;
            margin-bottom: 8px;
          }
          .modal input {
            font-size: 13px;
            padding: 8px;
          }
          .modal-actions {
            flex-direction: column;
            gap: 8px;
          }
          .modal-actions button {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
