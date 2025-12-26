"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function EventsPage() {
  const router = useRouter();

  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });
  const [editingEventId, setEditingEventId] = useState(null);

  const fetchEvents = async () => {
    try {
      const res = await fetch("/api/events");
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch events");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAddOrEditEvent = async () => {
    if (
      !newEvent.title ||
      !newEvent.date ||
      !newEvent.time ||
      !newEvent.location ||
      !newEvent.description
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      if (editingEventId) {
        const res = await fetch("/api/events", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingEventId, ...newEvent }),
        });
        const updated = await res.json();
        setEvents(events.map((e) => (e._id === editingEventId ? updated : e)));
        toast.success("Event updated successfully");
      } else {
        const res = await fetch("/api/events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEvent),
        });
        const created = await res.json();
        setEvents([...events, created]);
        toast.success("Event created successfully");
      }
      setNewEvent({
        title: "",
        date: "",
        time: "",
        location: "",
        description: "",
      });
      setEditingEventId(null);
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to save event");
    }
  };

  // Convert 12-hour to 24-hour for time input
  function convert12To24(time12h) {
    if (!time12h) return "";
    const [time, modifier] = time12h.split(" ");
    if (!time || !modifier) return time12h; // fallback if format unexpected
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier.toLowerCase() === "pm" && hours !== 12) hours += 12;
    if (modifier.toLowerCase() === "am" && hours === 12) hours = 0;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  }

  // Convert 24-hour to 12-hour for display (optional)
  function convert24To12(time24h) {
    if (!time24h) return "";
    let [hours, minutes] = time24h.split(":").map(Number);
    const modifier = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )} ${modifier}`;
  }

  const handleEdit = (event) => {
    setNewEvent({
      title: event.title,
      date: new Date(event.date).toISOString().slice(0, 10),
      time: event.time || "", // just use the stored 24-hour value
      location: event.location || "",
      description: event.description,
    });
    setEditingEventId(event._id);
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
            Are you sure you want to delete this event?
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "12px" }}
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
        <p>Manage all school events</p>
        <button className="add-btn" onClick={() => setIsModalOpen(true)}>
          + Create Event
        </button>
      </div>

      <div className="events-list">
        {events.length === 0 ? (
          <p>No events found. Add a new event.</p>
        ) : (
          events.map((event) => (
            <div key={event._id} className="card">
              <h3>{event.title}</h3>
              <p className="event-date">
                Date: {new Date(event.date).toLocaleDateString()} | Time:{" "}
                {convert24To12(event.time)}
              </p>

              <p className="event-location">Location: {event.location}</p>
              <p className="event-desc">{event.description}</p>
              <div className="actions">
                <button className="edit-btn" onClick={() => handleEdit(event)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(event._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{editingEventId ? "Edit Event" : "Create Event"}</h2>
            <input
              type="text"
              placeholder="Event Title"
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
            <textarea
              placeholder="Event Description"
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

      {/* Styles remain same as before */}
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
        .events-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }
        .card {
          background: #fff;
          padding: 16px;
          border-radius: 10px;
          border: 1px solid #ddd;
        }
        .card h3 {
          margin: 0 0 6px 0;
          color: var(--primary-color);
        }
        .event-date,
        .event-desc {
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
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 400px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 55vh;
          overflow-y: auto;
        }
        .modal h2 {
          margin: 0 0 10px 0;
          font-size: 22px;
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

        /* Focus state */
        .modal input:focus,
        .modal textarea:focus {
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

        /* Responsive Mobile Styles */
        @media (max-width: 500px) {
          /* Top bar adjustments */
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
            color: #555;
          }
          .top-bar .add-btn {
            font-size: 12px;
            padding: 6px 12px;
            width: 30%;
            text-align: center;
          }

          /* Events list and card adjustments */
          .events-list {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .card {
            padding: 14px;
            border-radius: 8px;
          }
          .card h3 {
            font-size: 16px;
          }
          .event-date,
          .event-desc {
            font-size: 13px;
            margin-bottom: 6px;
          }
          .actions {
            flex-wrap: wrap;
            gap: 8px;
          }
          .actions button {
            flex: 1 1 78%;
            padding: 8px 16px;
            font-size: 12px;
          }

          /* Modal adjustments */
          .modal {
            width: 90%;
            padding: 18px;
            max-height: 37vh;
            overflow-y: auto;
          }
          .modal h2 {
            font-size: 18px;
            margin-bottom: 10px;
          }
          .modal input,
          .modal textarea {
            font-size: 13px;
            padding: 8px;
          }
          .modal-actions {
            flex-direction: column;
            gap: 8px;
          }
          .modal-actions button {
            width: 100% !important;
            padding: 10px 0;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
