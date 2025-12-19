"use client";
import Image from "next/image";
import { LuAward, LuUsers, LuTarget, LuBookOpen } from "react-icons/lu";

export default function AboutUsPage() {
  return (
    <main className="bg-light">
      {/* HERO SECTION */}


      <div className="container  py-5">

        {/* LEGACY SECTION */}
        <section className="row align-items-center mb-5 gx-5 gy-4 mt-5">
          <div className="col-lg-6">
            <div className="ps-lg-4">
              <h5 className="text-warning fw-bold text-uppercase mb-2">Our Foundation</h5>
              <h2 className="display-6 fw-bold mb-4" style={{ color: '#01311f' }}>A Legacy of Excellence</h2>
              <p className="lead opacity-90 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                Where tradition meets excellence.
              </p>
              <p className="text-muted mb-4 lead" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                The Oxford House System cultivates character, leadership, discipline, and teamwork.
                Based on classic house traditions, it divides students into dedicated houses that compete
                and collaborate through academics, sports, arts, and community service.
              </p>
              <p className="text-muted">
                Our objective is to build well-rounded individuals who are confident, responsible,
                and prepared for future challenges.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative rounded-4 overflow-hidden shadow-lg p-1 bg-white">
              <div className="position-relative" style={{ minHeight: '400px', background: '#f8f9fa' }}>
                <Image
                  src="/mask/image.png"
                  alt="Campus Building"
                  fill
                  className="object-fit-cover rounded-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* INITIATIVES SECTION */}
        <section className="py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6" style={{ color: '#01311f' }}>New Initiatives</h2>
            <div className="mx-auto mt-3" style={{ width: '60px', height: '3px', background: '#ffc107' }}></div>
          </div>

          <div className="row g-4">
            {[
              { title: "Academic Excellence", text: "Mentoring, inter-house academic contests, and focused revision clinics.", icon: <LuBookOpen size={30} /> },
              { title: "Sports Leadership", text: "Inter-house tournaments, leadership modules, and talent development camps.", icon: <LuAward size={30} /> },
              { title: "Community Outreach", text: "Service projects, environmental drives, and student-led social initiatives.", icon: <LuUsers size={30} /> },
            ].map((item, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm p-4 text-center hover-card" style={{ transition: 'all 0.3s ease' }}>
                  <div className="icon-box mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: '70px', height: '70px', background: 'rgba(1, 49, 31, 0.1)', color: '#01311f' }}>
                    {item.icon}
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#01311f' }}>{item.title}</h4>
                  <p className="text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP QUOTE SECTION */}
        <section className="my-5 p-5 rounded-4 text-center position-relative overflow-hidden" style={{ background: '#01311f', color: 'white' }}>
          <div className="position-relative z-1">
            <LuTarget size={40} className="text-warning mb-4" />
            <blockquote className="display-6 fst-italic mb-4 mx-auto" style={{ maxWidth: '800px', fontSize: '1.5rem' }}>
              “At Oxford House System our mission is to nurture leaders who combine academic rigour with strong character.
              The House System is where leadership is practised.”
            </blockquote>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <div className="text-end">
                <small className="text-white-50">Oxford House System</small>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE PROMISE */}
        <section className="py-5">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h2 className="fw-bold display-6 mb-4" style={{ color: '#01311f' }}>Empowering Education.<br />Enabling Futures.</h2>
              <p className="text-muted mb-4 lead">
                The system gives students multiple platforms to improve communication, build confidence, and practice leadership.
              </p>
              <button className="btn btn-warning text-dark fw-bold px-4 py-2 rounded-pill">Join Us Today</button>
            </div>
            <div className="col-lg-7">
              <div className="row g-3">
                {[
                  { t: "Holistic Development", d: "Balanced focus on academics, sport, arts and ethics." },
                  { t: "Leadership Roles", d: "Real responsibility for Captains and Prefects." },
                  { t: "Healthy Competition", d: "Pushing students to excel and collaborate." },
                  { t: "Community Values", d: "Service learning and outreach programs." },
                ].map((c, i) => (
                  <div key={i} className="col-sm-6">
                    <div className="p-4 bg-white rounded-3 border border-light shadow-sm h-100">
                      <h5 className="fw-bold mb-2" style={{ color: '#01311f' }}>{c.t}</h5>
                      <p className="mb-0 text-muted small">{c.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-5 mb-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6" style={{ color: '#01311f' }}>Our Leadership</h2>
          </div>

          <div className="row justify-content-center g-4">
            {[
              { name: "Mam Sarah", role: "CEO", img: "/auther2.jpg" },
              { name: "Sir Imran ul Haq", role: "Director", img: "/auther3.jpg" },
              { name: "Sir Bilal", role: "General Secretary", img: "/auther3.jpg" },
            ].map((leader, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="text-center">
                  <div className="position-relative mx-auto mb-3" style={{ width: '120px', height: '120px' }}>
                    <Image
                      src={leader.img}
                      alt={leader.name}
                      fill
                      className="rounded-circle object-fit-cover shadow-sm border border-4 border-white"
                    />
                  </div>
                  <h5 className="fw-bold mb-1" style={{ color: '#01311f' }}>{leader.name}</h5>
                  <p className="text-muted small text-uppercase ls-1">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <style jsx>{`
        .hover-card:hover {
           transform: translateY(-5px);
           box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }
        .ls-1 { letter-spacing: 1px; }
      `}</style>
    </main>
  );
}
