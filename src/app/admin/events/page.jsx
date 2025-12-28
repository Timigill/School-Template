"use client";

import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    image: null,
  });

  // ---------------- FETCH EVENTS ----------------
  const fetchEvents = async () => {
    try {
      const res = await fetch("/api/events");
      const data = await res.json();
      setEvents(data);
    } catch {
      toast.error("Failed to fetch events");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ---------------- ADD / UPDATE ----------------
  const handleAddOrEditEvent = async () => {
    const { title, date, time, location, description, image } = newEvent;

    if (!title || !date || !time || !location || !description) {
      toast.error("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("location", location);
    formData.append("description", description);

    if (image) formData.append("image", image);
    if (editingEventId) formData.append("id", editingEventId);

    try {
      const res = await fetch("/api/events", {
        method: editingEventId ? "PUT" : "POST",
        body: formData,
      });

      if (!res.ok) throw new Error();

      toast.success(editingEventId ? "Event updated" : "Event created");

      setIsModalOpen(false);
      setEditingEventId(null);
      setNewEvent({
        title: "",
        date: "",
        time: "",
        location: "",
        description: "",
        image: null,
      });

      fetchEvents();
    } catch {
      toast.error("Failed to save event");
    }
  };

  // ---------------- EDIT ----------------
  const handleEdit = (event) => {
    setNewEvent({
      title: event.title,
      date: new Date(event.date).toISOString().slice(0, 10),
      time: event.time,
      location: event.location,
      description: event.description,
      image: null,
    });
    setEditingEventId(event._id);
    setIsModalOpen(true);
  };

  // ---------------- DELETE ----------------
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
            Are you sure you want to delete this event?
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
                  await fetch("/api/events", {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id }),
                  });
                  setEvents(events.filter((e) => e._id !== id));
                  toast.success("Event deleted successfully");
                  toast.dismiss(t.id);
                } catch (err) {
                  console.error(err);
                  toast.error("Failed to delete event");
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
        <h1>Events & Activities</h1>
        <button className="add-btn" onClick={() => setIsModalOpen(true)}>
          + Create Event
        </button>
      </div>

      {/* ---------------- TABLE ---------------- */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id}>
                <td>{event.title}</td>
                <td>{new Date(event.date).toLocaleDateString()}</td>
                <td>{event.time}</td>
                <td>{event.location}</td>
                <td>
                  <div className="description-scroll">{event.description}</div>
                </td>{" "}
                <td>
                  {event.image && (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="event-img"
                    />
                  )}
                </td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(event)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(event._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------- MODAL ---------------- */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{editingEventId ? "Edit Event" : "Create Event"}</h2>

            <input
              type="text"
              placeholder="Title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />

            <input
              type="date"
              value={newEvent.date}
              onChange={(e) =>
                setNewEvent({ ...newEvent, date: e.target.value })
              }
            />

            <input
              type="time"
              value={newEvent.time}
              onChange={(e) =>
                setNewEvent({ ...newEvent, time: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Location"
              value={newEvent.location}
              onChange={(e) =>
                setNewEvent({ ...newEvent, location: e.target.value })
              }
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setNewEvent({ ...newEvent, image: e.target.files[0] })
              }
            />

            <textarea
              placeholder="Description"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({ ...newEvent, description: e.target.value })
              }
            />

            <div className="modal-actions">
              <button className="save-btn" onClick={handleAddOrEditEvent}>
                {editingEventId ? "Update" : "Add"}
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

      {/* ---------------- STYLES ---------------- */}
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

        .table-wrapper {
          overflow-x: auto;
          background: #fff;
          border-radius: 10px;
          border: 1px solid var(--primary-color);
          padding: 10px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 700px;
        }
        th,
        td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ddd;
          font-size: 14px;
          vertical-align: middle;
        }
        th {
          background: var(--primary-color);
          color: #fff;
        }
        .description-scroll {
          max-width: 300px;
          max-height: 70px;
          overflow-y: auto;
          word-wrap: break-word;
          padding-right: 4px;
        }
        .description-scroll::-webkit-scrollbar {
          width: 4px;
        }

        .description-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 6px;
        }

        .description-scroll::-webkit-scrollbar-thumb {
          background-color: var(--primary-color);
          border-radius: 3px;
        }
        .event-img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 4px;
        }
        .edit-btn {
          background: var(--primary-color);
          border: none;
          color: #fff;
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
          margin-right: 5px;
          margin-bottom: 5px;
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
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
        }
        .delete-btn:hover {
          background: var(--primary-color);
          color: #fff;
        }

        /* Modal & other styles remain unchanged */
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
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 400px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 60vh;
          overflow-y: auto;
        }
        .modal h2 {
          margin: 0 0 10px 0;
          font-size: 26px;
          text-align: center;
          color: var(--primary-color);
        }
        .modal input,
        .modal textarea {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          width: 100%;
          font-size: 14px;
          outline: none;
        }
        .modal textarea {
          resize: vertical;
          min-height: 60px;
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

        /* Responsive Table */
        @media (max-width: 600px) {
          .top-bar {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }
          table {
            font-size: 12px;
            min-width: 100%;
          }
          .event-img {
            width: 50px;
            height: 30px;
          }
          th,
          td {
            padding: 8px;
          }
        }
      `}</style>
    </div>
  );
}
