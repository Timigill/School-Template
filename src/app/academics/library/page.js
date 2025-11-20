'use client';

import NavBar from '../../../components/layout/NavBar';
import Footer from '../../../components/layout/Footer';

export default function LibraryPage() {
  const libraryServices = [
    {
      title: "Digital Resources",
      description: "Access to extensive online databases, e-books, and academic journals.",
      features: [
        "24/7 Online Access",
        "Research Databases",
        "E-book Collections",
        "Academic Journals",
        "Digital Archives"
      ],
      icon: "📱"
    },
    {
      title: "Physical Collection",
      description: "Extensive collection of books, journals, and reference materials.",
      features: [
        "Textbooks",
        "Reference Books",
        "Academic Journals",
        "Magazines",
        "Newspapers"
      ],
      icon: "📚"
    },
    {
      title: "Study Spaces",
      description: "Modern facilities for individual and group study sessions.",
      features: [
        "Individual Study Carrels",
        "Group Study Rooms",
        "Discussion Areas",
        "Quiet Zones",
        "Computer Labs"
      ],
      icon: "🏛️"
    },
    {
      title: "Library Services",
      description: "Professional assistance and support for academic research.",
      features: [
        "Research Assistance",
        "Inter-library Loans",
        "Printing & Scanning",
        "Bibliography Support",
        "Library Workshops"
      ],
      icon: "🔍"
    }
  ];

  const timings = [
    { day: "Monday - Friday", hours: "8:00 AM - 9:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div style={{ minHeight: "100vh", background: "white" }}>
      <NavBar />
      <main className="container py-5">

        {/* MAIN HEADING */}
        <h1
          className="text-center fw-bold mb-5"
          style={{ color: "#c6aa58", fontSize: "3rem" }}
        >
          College Library
        </h1>

        {/* Library Overview */}
        <section className="mb-5">
          <div className="p-4 rounded shadow-lg mb-4" style={{ background: "white", border: "1px solid #ddd" }}>
            <h2 className="fw-bold mb-3" style={{ color: "#c6aa58" }}>Welcome to Our Library</h2>
            <p style={{ color: "gray", marginBottom: "1rem" }}>
              Our state-of-the-art library provides students and faculty with comprehensive resources
              for academic excellence. With both digital and physical collections, we support research,
              learning, and intellectual growth across all disciplines.
            </p>

            <div className="row text-center">
              <div className="col">
                <p style={{ color: "#c6aa58", fontWeight: "bold", fontSize: "1.25rem" }}>50,000+</p>
                <p style={{ color: "gray" }}>Books</p>
              </div>
              <div className="col">
                <p style={{ color: "#c6aa58", fontWeight: "bold", fontSize: "1.25rem" }}>100+</p>
                <p style={{ color: "gray" }}>Digital Databases</p>
              </div>
              <div className="col">
                <p style={{ color: "#c6aa58", fontWeight: "bold", fontSize: "1.25rem" }}>500+</p>
                <p style={{ color: "gray" }}>Study Spaces</p>
              </div>
            </div>
          </div>
        </section>

        {/* Library Services */}
        <section className="mb-5">
          <h2 className="fw-bold mb-4 text-center" style={{ color: "#c6aa58" }}>Library Services</h2>
          <div className="row justify-content-center g-4">
            {libraryServices.map((service, index) => (
              <div key={index} className="col-md-6">
                <div className="p-4 rounded shadow-lg h-100" style={{ background: "white", border: "1px solid #ddd" }}>
                  <div className="mb-3" style={{ fontSize: "2rem" }}>{service.icon}</div>
                  <h3 className="mb-2" style={{ color: "gray" }}>{service.title}</h3>
                  <p className="mb-3" style={{ color: "gray" }}>{service.description}</p>
                  <ul className="list-unstyled mb-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{ color: "gray", marginBottom: "0.25rem" }}>
                        <span style={{ color: "#c6aa58", marginRight: "8px" }}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="btn w-100 fw-semibold"
                    style={{
                      background: "#01311f",
                      color: "gray",
                      borderRadius: "8px",
                      border: "2px solid #01311f"
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Library Hours */}
        <section className="mb-5">
          <h2 className="fw-bold mb-4 text-center" style={{ color: "#c6aa58" }}>Library Hours</h2>
          <div className="p-4 rounded shadow-lg" style={{ background: "white", border: "1px solid #ddd" }}>
            {timings.map((time, index) => (
              <div key={index} className="d-flex justify-content-between border-bottom pb-2 mb-2" style={{ color: "gray" }}>
                <span>{time.day}</span>
                <span>{time.hours}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & Location */}
        <section>
          <h2 className="fw-bold mb-4 text-center" style={{ color: "#c6aa58" }}>Contact & Location</h2>
          <div className="p-4 rounded shadow-lg" style={{ background: "white", border: "1px solid #ddd" }}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <h3 className="mb-2" style={{ color: "gray" }}>Contact Information</h3>
                <p style={{ color: "gray" }}>📧 library@chenabcollege.edu</p>
                <p style={{ color: "gray" }}>📞 +92-XXX-XXXXXXX</p>
                <p style={{ color: "gray" }}>💬 Live Chat Available (Mon-Fri, 9 AM - 5 PM)</p>
              </div>
              <div className="col-md-6 mb-3">
                <h3 className="mb-2" style={{ color: "gray" }}>Location</h3>
                <p style={{ color: "gray" }}>
                  Main Campus, Ground Floor<br />
                  Academic Block A<br />
                  Chenab College
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}






// 'use client';

// import NavBar from '../../../components/layout/NavBar';
// import Footer from '../../../components/layout/Footer';

// export default function LibraryPage() {
//   const libraryServices = [
//     {
//       title: "Digital Resources",
//       description: "Access to extensive online databases, e-books, and academic journals.",
//       features: [
//         "24/7 Online Access",
//         "Research Databases",
//         "E-book Collections",
//         "Academic Journals",
//         "Digital Archives"
//       ],
//       icon: "📱"
//     },
//     {
//       title: "Physical Collection",
//       description: "Extensive collection of books, journals, and reference materials.",
//       features: [
//         "Textbooks",
//         "Reference Books",
//         "Academic Journals",
//         "Magazines",
//         "Newspapers"
//       ],
//       icon: "📚"
//     },
//     {
//       title: "Study Spaces",
//       description: "Modern facilities for individual and group study sessions.",
//       features: [
//         "Individual Study Carrels",
//         "Group Study Rooms",
//         "Discussion Areas",
//         "Quiet Zones",
//         "Computer Labs"
//       ],
//       icon: "🏛️"
//     },
//     {
//       title: "Library Services",
//       description: "Professional assistance and support for academic research.",
//       features: [
//         "Research Assistance",
//         "Inter-library Loans",
//         "Printing & Scanning",
//         "Bibliography Support",
//         "Library Workshops"
//       ],
//       icon: "🔍"
//     }
//   ];

//   const timings = [
//     { day: "Monday - Friday", hours: "8:00 AM - 9:00 PM" },
//     { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
//     { day: "Sunday", hours: "Closed" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
//       <NavBar />
//       <main className="container mx-auto px-4 py-24">
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
//           College Library
//         </h1>

//         {/* Library Overview */}
//         <section className="mb-16">
//           <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg mb-8">
//             <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Welcome to Our Library</h2>
//             <p className="text-white/80 mb-6">
//               Our state-of-the-art library provides students and faculty with comprehensive resources
//               for academic excellence. With both digital and physical collections, we support research,
//               learning, and intellectual growth across all disciplines.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="bg-white/5 p-4 rounded-lg">
//                 <p className="text-[#FFC107] text-xl font-bold mb-2">50,000+</p>
//                 <p className="text-white/60">Books</p>
//               </div>
//               <div className="bg-white/5 p-4 rounded-lg">
//                 <p className="text-[#FFC107] text-xl font-bold mb-2">100+</p>
//                 <p className="text-white/60">Digital Databases</p>
//               </div>
//               <div className="bg-white/5 p-4 rounded-lg">
//                 <p className="text-[#FFC107] text-xl font-bold mb-2">500+</p>
//                 <p className="text-white/60">Study Spaces</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Library Services */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Library Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {libraryServices.map((service, index) => (
//               <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
//                 <div className="text-4xl mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
//                 <p className="text-white/80 mb-4">{service.description}</p>
//                 <ul className="space-y-2">
//                   {service.features.map((feature, idx) => (
//                     <li key={idx} className="text-white/70 flex items-center">
//                       <span className="text-[#FFC107] mr-2">•</span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Library Hours */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Library Hours</h2>
//           <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
//             <div className="space-y-4">
//               {timings.map((time, index) => (
//                 <div key={index} className="flex justify-between items-center border-b border-white/10 pb-4">
//                   <span className="text-white font-medium">{time.day}</span>
//                   <span className="text-white/80">{time.hours}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact & Location */}
//         <section>
//           <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Contact & Location</h2>
//           <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
//                 <div className="space-y-3 text-white/80">
//                   <p>📧 library@chenabcollege.edu</p>
//                   <p>📞 +92-XXX-XXXXXXX</p>
//                   <p>💬 Live Chat Available (Mon-Fri, 9 AM - 5 PM)</p>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
//                 <p className="text-white/80">
//                   Main Campus, Ground Floor<br />
//                   Academic Block A<br />
//                   Chenab College
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// } 