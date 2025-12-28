"use client";

import { useEffect, useState } from "react";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeEvent, setActiveEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to fetch events", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="events-page-container">
      {/* HERO */}
      <section className="events-hero">
        <div className="events-hero-overlay"></div>
        <div className="events-hero-content">
          <h1>Campus Events</h1>
          <p>
            Discover upcoming events, gatherings, and activities happening on
            our campus.
          </p>
        </div>
      </section>

      {/* EVENTS LIST */}
      <main className="events-main container py-5">
        <h2 className="events-section-title">Upcoming Events</h2>

        {loading ? (
          <p className="text-center">Loading events...</p>
        ) : events.length === 0 ? (
          <p className="text-center text-muted">
            No upcoming events available.
          </p>
        ) : (
          <div className="row g-4">
            {events.map((event) => {
              const dateObj = new Date(event.date);
              const day = dateObj.getDate();
              const month = dateObj.toLocaleString("default", {
                month: "short",
              });
              const shortDesc =
                event.description.length > 80
                  ? event.description.slice(0, 80) + "..."
                  : event.description;

              return (
                <div key={event._id} className="col-12 col-md-6 col-lg-4">
                  <div className="event-card">
                    <div className="event-image-wrap">
                      <span className="event-date-badge">
                        {month} {day}
                      </span>
                      <img src={event.image} alt={event.title} />
                    </div>

                    <div className="event-content">
                      <h3>{event.title}</h3>
                      <p className="event-meta">
                        📍 {event.location} &nbsp; • &nbsp; ⏰ {event.time}
                      </p>
                      <p className="event-desc">{shortDesc}</p>

                      <button
                        className="event-btn"
                        onClick={() => setActiveEvent(event)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* MODAL */}
      {activeEvent && (
        <div
          className="event-modal-overlay"
          onClick={() => setActiveEvent(null)}
        >
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <h3>{activeEvent.title}</h3>
            <p className="event-meta">
              {activeEvent.location} • {activeEvent.time}
            </p>
            <div className="event-modal-desc">
              <p>{activeEvent.description}</p>
            </div>
            <button
              className="event-modal-close"
              onClick={() => setActiveEvent(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style jsx>{`
        .events-page-container {
          min-height: 100vh;
          background: #f8f9fa;
        }

        /* HERO */
        .events-hero {
          height: 45vh;
          background: var(--primary-color);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
        }
        .events-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(1, 49, 31, 0.65);
        }
        .events-hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
          padding: 0 16px;
        }
        .events-hero h1 {
          font-size: 3rem;
          font-weight: 700;
        }
        .events-hero p {
          font-size: 1.1rem;
          margin-top: 10px;
        }
        .event-card-image {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 12px;
          border: 2px solid var(--primary-color);
        }

        .events-section-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          color: #01311f;
          margin-bottom: 40px;
        }
        .event-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          transition: all 0.25s ease;
          height: 100%;
        }

        .event-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
        }

        /* IMAGE */
        .event-image-wrap {
          position: relative;
        }

        .event-image-wrap img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        /* DATE BADGE */
        .event-date-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: var(--primary-color);
          color: #ffc107;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        /* CONTENT */
        .event-content {
          padding: 16px;
        }

        .event-content h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #01311f;
          margin-bottom: 6px;
        }

        .event-meta {
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 8px;
        }

        .event-desc {
          font-size: 14px;
          color: #374151;
        }

        /* BUTTON */
        .event-btn {
          margin-top: 10px;
          color: #ffc107;
          padding: 6px 14px;
          border-radius: 8px;
          border: none;
          background-color: var(--primary-color);
          font-weight: 600;
          cursor: pointer;
        }

        .event-btn:hover {
          color: var(--primary-color);
          background-color: #ffc107;
        }

        /* MOBILE */
        @media (max-width: 576px) {
          .event-card {
            text-align: center;
            margin: 20px;
          }
          .event-image-wrap img {
            height: 160px;
          }

          .event-content {
            text-align: center;
          }

          .event-date-badge {
            font-size: 12px;
            padding: 5px 10px;
          }
        }

        /* MODAL */
        .event-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .event-modal {
          background: #fff;
          border: 3px solid var(--primary-color);
          padding: 24px;
          border-radius: 12px;
          max-width: 500px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          text-align: center;
          position: relative;
          animation: eventFadeIn 0.3s ease;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        .event-modal-desc {
          margin: 16px 0;
          font-size: 14px;
          color: #333;
          text-align: left;
        }
        .event-modal-close {
          margin-top: 12px;
          padding: 4px 16px;
          background: var(--primary-color);
          color: #ffc107;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }
        .event-modal-close:hover {
          background: #ffc107;
          color: var(--primary-color);
        }

        @keyframes eventFadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 576px) {
          /* HERO */
          .events-hero {
            height: 25vh;
          }
          .events-hero h1 {
            font-size: 1.4rem;
          }
          .events-hero p {
            font-size: 0.85rem;
          }

          .event-card-image {
            width: 100%;
            height: 160px;
          }
        }
      `}</style>
    </div>
  );
}
