// app/oxford-house-system/page.jsx
"use client";
import Image from "next/image";
export default function OxfordHouseSystemPage() {
  return (
    <main className="page-root">
      {/* HERO */}
      <header className="hero">
        <div className="hero-overlay1" />
        <div className="hero-inner">
          <h1 className="hero-title">Oxford House System</h1>
          <p className="hero-sub">A project of Chenab Group of Colleges</p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="container py-5">

        {/* Legacy / About */}
        <section className="section about">
          <div className="section-head">
            <h2> A Legacy of Excellence — Oxford House System </h2>
            <div className="accent" />
          </div>

          <div className="about-body">
            <p>
              The Oxford House System cultivates character, leadership, discipline and teamwork.
              Based on classic house traditions, it divides students into dedicated houses
              that compete and collaborate through academics, sports, arts and community service.
            </p>

            <p>
              Our objective is to build well-rounded individuals who are confident, responsible,
              and prepared for future challenges.
            </p>
          </div>
        </section>

        {/* Initiatives */}
        <section className="section initiatives">
          <div className="section-head">
            <h2>New Initiatives</h2>
            <div className="accent" />
          </div>

          <div className="grid initiatives-grid">
            <article className="card">
              <h3>Academic Excellence Program</h3>
              <p>
                Mentoring, inter-house academic contests and focused revision clinics to raise standards.
              </p>
            </article>

            <article className="card">
              <h3>Sports Leadership</h3>
              <p>
                Inter-house tournaments, leadership-for-sports modules and talent development camps.
              </p>
            </article>

            <article className="card">
              <h3>Community Outreach</h3>
              <p>
                Service projects, environment drives and student-led social initiatives across campuses.
              </p>
            </article>
          </div>
        </section>

        {/* Chairperson Message */}
        <section className="section chair">
          <div className="chair-inner">
            <blockquote className="quote">
              “At Oxford House System our mission is to nurture leaders who combine academic rigour with
              strong character and social responsibility. The House System is where leadership is practised.”
            </blockquote>

            <div className="chair-meta">
              <Image src="/auther3.jpg" alt="Director" width={72} height={72} className="chair-photo" />
              <div>
                <div className="chair-name">Director — Oxford House System</div>
                <div className="chair-title">Chenab Group of Colleges</div>
              </div>
            </div>
          </div>
        </section>

        {/* Empowering */}
        <section className="section empower">
          <div className="section-head">
            <h2>Empowering Education. Enabling Futures.</h2>
            <div className="accent" />
          </div>

          <div className="two-col">
            <p>
              The system gives students multiple platforms to improve communication, build confidence and
              practice leadership. House duties, competitions and mentoring create a learning ecosystem
              beyond classrooms.
            </p>

            <p>
              Students graduate with practical experience in teamwork, public speaking, planning events and
              community engagement — skills that make them ready for higher education and careers.
            </p>
          </div>
        </section>

        {/* Why Choose */}
        <section className="section why">
          <div className="section-head">
            <h2>Why Choose the Oxford House System?</h2>
            <div className="accent" />
          </div>

          <div className="grid why-grid">
            <div className="why-card">
              <h4>Holistic Development</h4>
              <p>Balanced focus on academics, sport, arts and ethics.</p>
            </div>
            <div className="why-card">
              <h4>Leadership Roles</h4>
              <p>Captains, prefects and active committees provide real responsibility.</p>
            </div>
            <div className="why-card">
              <h4>Healthy Competition</h4>
              <p>Inter-house competitions push students to excel and collaborate.</p>
            </div>
            <div className="why-card">
              <h4>Community Values</h4>
              <p>Service learning and outreach anchor students to social responsibility.</p>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="section leadership">
          <div className="section-head">
            <h2>Our Leadership</h2>
            <div className="accent" />
          </div>


          <div className="grid leadership-grid">
            {[
              { name: "Mam Sarah", role: "CEO", image: "/auther2.jpg" },
              { name: "Sir Imran ul Haq", role: "Director", image: "/auther3.jpg" },
              { name: "Sir Bilal", role: "General Secretary", image: "/auther3.jpg" },
            ].map((p) => (
              <figure key={p.name} className="leader">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={100}
                  height={100}
                  className="leader-photo rounded-circle"
                />

                <figcaption>
                  <strong>{p.name}</strong>
                  <span className="role">{p.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>

        </section>

      </div>


    </main>
  );
}
