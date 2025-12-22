'use client';



const upcomingEvents = [
  {
    id: 1,
    title: "Annual Sports Day",
    date: "2024-03-25",
    time: "09:00 AM – 01:00 PM",
    location: "College Ground",
    description:
      "Join us for a day of athletic excellence and friendly competition.",
    image: "/mask/flag2.png",
  },
  {
    id: 2,
    title: "Science Exhibition",
    date: "2024-04-05",
    time: "10:00 AM – 03:00 PM",
    location: "Science Block",
    description: "Showcasing innovative projects from our talented students.",
    image: "/mask/flag2.png",
  },
];

export default function EventsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa" }}>

      {/* HERO */}
      <section className="hero-sec"
        style={{
          height: "50vh",
          backgroundColor: "var(--primary-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          color: "var(--secondary-color)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(1, 49, 31, 0.6)",
          }}
        ></div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>EVENTS</h1>
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "600px",
              margin: "1rem auto",
            }}
          >
            Discover upcoming events, gatherings, and activities happening at
            our campus.
          </p>
        </div>
      </section>

      {/* EVENTS LIST */}
      <main className="container py-5">
        <h2
          className="text-center fw-bold mb-5"
          style={{ color: "#01311f", fontSize: "2rem" }}
        >
          Upcoming Events
        </h2>

        <div className="row g-4">
          {upcomingEvents.map((event) => {
            const dateObj = new Date(event.date);
            const day = dateObj.getDate();
            const month = dateObj.toLocaleString("default", { month: "short" });

            return (
              <div key={event.id} className="col-12 col-md-6">
                <div className="event-card rounded shadow-sm overflow-hidden">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="event-img-circle"
                    />
                  </div>

                  <div className="p-3">
                    <p
                      style={{
                        color: "#01311f",
                        fontWeight: "600",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {month} {day}
                    </p>
                    <h3
                      style={{
                        color: "#022a15",
                        fontWeight: "700",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {event.title}
                    </h3>
                    <p
                      style={{
                        color: "gray",
                        fontSize: "0.9rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {event.location} • {event.time}
                    </p>
                    <p style={{ color: "#333", fontSize: "0.9rem" }}>
                      {event.description}
                    </p>
                    <button className="btn event-btn mt-2 p-2">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <style jsx>{`
        .event-img-circle {
          width: 150px;
          height: 150px;
          margin-top: 1rem;
          object-fit: cover;
          padding: 2px;
          border-radius: 50%;
          border: 2px solid var(--border-color);
          transition: border 0.3s ease, transform 0.3s ease;
        }

        .event-img-circle:hover {
          border-color: var(--primary-color);
          transform: scale(1.05);
        }

        .event-card {
          background: #fff;
          border: 1px solid var(--primary-color);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .event-card:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3) !important;
        }

        .event-btn {
          width: 100%;
          background: #01311f;
          color: #ffc107;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .event-btn:hover {
          background: #ffc107;
          color: #01311f;
        }

        @media (max-width: 576px) {
        .hero-sec{
        padding: 0 1rem !important;
        height: 35vh !important;}
          
          h1{
          font-size: 35px !important;
          }
          p{
          font-size: 16px !important;}
          h2{
          font-size:26px !important;  
          }
          h3{
          font-size: 24px !important;
          text-align: center !important;}
        }
          .event-card{
          margin: 5px 20px !important;}
      `}</style>

    </div>
  );
}
