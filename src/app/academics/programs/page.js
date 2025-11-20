'use client';

import NavBar from '../../../components/layout/NavBar';
import Footer from '../../../components/layout/Footer';

export default function AcademicProgramsPage() {
  const programs = [
    {
      title: "Computer Science",
      description: "A comprehensive program covering programming, algorithms, and software development.",
      duration: "4 Years",
      seats: 120,
      features: [
        "Modern Programming Languages",
        "Data Structures & Algorithms",
        "Software Engineering",
        "Artificial Intelligence",
        "Web Development"
      ]
    },
    {
      title: "Business Administration",
      description: "Develop business acumen and management skills for the modern corporate world.",
      duration: "4 Years",
      seats: 60,
      features: [
        "Marketing Management",
        "Financial Accounting",
        "Business Ethics",
        "Strategic Management",
        "Entrepreneurship"
      ]
    },
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
          Academic Programs
        </h1>

        {/* CENTER BOTH BOXES */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "60vh", gap: "20px", flexWrap: "wrap" }}
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className="p-4 rounded shadow-lg"
              style={{
                width: "350px",
                background: "white",
                border: "1px solid #ddd",
              }}
            >
              {/* TITLE */}
              <h2
                className="fw-bold mb-3"
                style={{ color: "#c6aa58", fontSize: "1.5rem" }}
              >
                {program.title}
              </h2>

              {/* DESCRIPTION */}
              <p style={{ color: "gray" }}>{program.description}</p>

              {/* DURATION + SEATS */}
              <div className="d-flex justify-content-between my-3">
                <span style={{ color: "gray" }}>Duration: {program.duration}</span>
                <span style={{ color: "gray" }}>Seats: {program.seats}</span>
              </div>

              {/* FEATURES */}
              <h5 className="fw-semibold mb-2" style={{ color: "gray" }}>
                Key Features:
              </h5>

              <ul className="list-unstyled">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="d-flex mb-2" style={{ color: "gray" }}>
                    <span style={{ color: "#c6aa58", marginRight: "8px" }}>•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                className="btn w-100 mt-3 fw-semibold"
                style={{
                  background: "#01311f",
                  color: "white",
                  borderRadius: "8px",
                  border: "2px solid #01311f",
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}





// 'use client';

// import NavBar from '../../../components/layout/NavBar';
// import Footer from '../../../components/layout/Footer';

// export default function AcademicProgramsPage() {
//   const programs = [
//     {
//       title: "Computer Science",
//       description: "A comprehensive program covering programming, algorithms, and software development.",
//       duration: "4 Years",
//       seats: 120,
//       features: [
//         "Modern Programming Languages",
//         "Data Structures & Algorithms",
//         "Software Engineering",
//         "Artificial Intelligence",
//         "Web Development"
//       ]
//     },
//     {
//       title: "Business Administration",
//       description: "Develop business acumen and management skills for the modern corporate world.",
//       duration: "4 Years",
//       seats: 60,
//       features: [
//         "Marketing Management",
//         "Financial Accounting",
//         "Business Ethics",
//         "Strategic Management",
//         "Entrepreneurship"
//       ]
//     },
//     // Add more programs as needed
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
//       <NavBar />
//       <main className="container mx-auto px-4 py-24">
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
//           Academic Programs
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {programs.map((program, index) => (
//             <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
//               <h2 className="text-2xl font-bold text-[#FFC107] mb-4">{program.title}</h2>
//               <p className="text-white/80 mb-4">{program.description}</p>
              
//               <div className="flex justify-between mb-6">
//                 <span className="text-white/60">Duration: {program.duration}</span>
//                 <span className="text-white/60">Seats: {program.seats}</span>
//               </div>

//               <h3 className="text-lg font-semibold text-white mb-3">Key Features:</h3>
//               <ul className="space-y-2">
//                 {program.features.map((feature, idx) => (
//                   <li key={idx} className="text-white/80 flex items-center">
//                     <span className="text-[#FFC107] mr-2">•</span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>

//               <button className="w-full mt-6 bg-[#FFC107] text-[#034D27] py-3 px-6 rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors duration-300">
//                 Learn More
//               </button>
//             </div>
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// } 