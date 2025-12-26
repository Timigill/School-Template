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
          <p>Discover upcoming events, gatherings, and activities happening on our campus.</p>
        </div>
      </section>

      {/* EVENTS LIST */}
      <main className="events-main container py-5">
        <h2 className="events-section-title">Upcoming Events</h2>

        {loading ? (
          <p className="text-center">Loading events...</p>
        ) : events.length === 0 ? (
          <p className="text-center text-muted">No upcoming events available.</p>
        ) : (
          <div className="row g-4">
            {events.map((event) => {
              const dateObj = new Date(event.date);
              const day = dateObj.getDate();
              const month = dateObj.toLocaleString("default", { month: "short" });
              const shortDesc =
                event.description.length > 80
                  ? event.description.slice(0, 80) + "..."
                  : event.description;

              return (
                <div key={event._id} className="col-12 col-md-6">
                  <div className="event-card-new">
                    <div className="event-card-date">
                      <span>{month}</span>
                      <strong>{day}</strong>
                    </div>
                    <div className="event-card-body">
                      <div className="event-card-icon">📅</div>
                      <div className="event-card-info">
                        <h3>{event.title}</h3>
                        <p className="event-meta">{event.location} • {event.time}</p>
                        <p className="event-desc">{shortDesc}</p>
                        <button className="event-view-btn" onClick={() => setActiveEvent(event)}>
                          View Details →
                        </button>
                      </div>
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
        <div className="event-modal-overlay" onClick={() => setActiveEvent(null)}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <h3>{activeEvent.title}</h3>
            <p className="event-meta">{activeEvent.location} • {activeEvent.time}</p>
            <div className="event-modal-desc">
              <p>{activeEvent.description}</p>
            </div>
            <button className="event-modal-close" onClick={() => setActiveEvent(null)}>
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

        .events-section-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          color: #01311f;
          margin-bottom: 40px;
        }

        /* EVENT CARD */
        .event-card-new {
          background: #fff;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .event-card-new:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }

        .event-card-date {
          background: var(--primary-color);
          color: #ffc107;
          padding: 12px;
          text-align: center;
        }
        .event-card-date span {
          display: block;
          font-size: 14px;
        }
        .event-card-date strong {
          font-size: 24px;
        }

        .event-card-body {
          display: flex;
          gap: 16px;
          padding: 16px;
          align-items: center;
        }
        .event-card-icon {
          font-size: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 120px;
          border-radius: 12px;
          background: #e5f1e0;
          border: 2px solid var(--primary-color);
        }

        .event-card-info h3 {
          margin: 0;
          color: #022a15;
          font-weight: 700;
        }
        .event-meta {
          font-size: 14px;
          color: gray;
          margin: 6px 0;
        }
        .event-desc {
          font-size: 14px;
          color: #333;
        }
        .event-view-btn {
          margin-top: 10px;
          padding: 8px 14px;
          background: var(--primary-color);
          color: #ffc107;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
        }
        .event-view-btn:hover {
          background: #ffc107;
          color: var(--primary-color);
        }

        /* MODAL */
        .event-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .event-modal {
          background: #ccc;
          border: 3px solid var(--primary-color) ;
          padding: 24px;
          border-radius: 12px;
          max-width: 500px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          text-align: center;
          position: relative;
          animation: eventFadeIn 0.3s ease;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
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
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

       
        @media (max-width: 576px) {
  /* HERO */
  .events-hero { 
    height: 25vh; 
  }
  .events-hero h1 { font-size: 1.4rem; }
  .events-hero p { font-size: 0.85rem; }

  /* EVENT CARD */
  .event-card-new {
    max-width: 90%;        /* fit screen */
    margin: 0 auto 15px;   /* center and spacing */
    border-radius: 10px;
    border: 1px solid #d1d5db;
  }

  .event-card-body { 
    flex-direction: column; 
    text-align: center; 
    padding: 10px; 
    gap: 10px;
  }

  .event-card-icon { 
    width: 60px;  
    height: 60px;
    font-size: 36px;
    border-radius: 8px;
  }

  .event-card-date {
    padding: 6px; 
  }
  .event-card-date strong { font-size: 18px; }
  .event-card-date span { font-size: 11px; }

  .event-card-info h3 { font-size: 0.95rem; }
  .event-desc { font-size: 12px; }
  .event-view-btn { padding: 5px 10px; font-size: 12px; }
}


      `}</style>
    </div>
  );
}
