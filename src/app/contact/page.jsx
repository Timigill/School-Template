"use client";


export default function Contact() {
  return (
    <div style={{ minHeight: "100vh" }}>

      <main className="container py-5">
        <div
          className="mx-auto"
          style={{ maxWidth: "100%", padding: "0 1rem" }}
        >
          {/* MAIN HEADING */}
          <h1
            className="text-center fw-bold mb-4 mt-3"
            style={{ fontSize: "clamp(2rem, 6vw, 3rem)", color: "#01311f" }}
          >
            Contact Us
          </h1>

          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-12 col-md-6">
              <div
                className="p-3 p-md-4 rounded shadow"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* FORM HEADING */}
                <h2
                  className="fw-semibold mb-4 text-center"
                  style={{
                    color: "#c6aa58",
                    fontSize: "clamp(1.5rem, 4vw, 2.3rem)", 
                  }}
                >
                  Get in Touch
                </h2>

                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="form-label"
                      style={{ color: "gray" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control bg-transparent"
                      placeholder="Your name"
                      style={{ border: "1px solid #01311f", color: "gray" }}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="form-label"
                      style={{ color: "gray" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control bg-transparent"
                      placeholder="your@email.com"
                      style={{ border: "1px solid #01311f", color: "gray" }}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="message"
                      className="form-label"
                      style={{ color: "gray" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="form-control bg-transparent"
                      placeholder="Your message"
                      style={{ border: "1px solid #01311f", color: "gray" }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn w-100 fw-semibold"
                    style={{
                      background: "#01311f",
                      color: "#c6aa58",
                      border: "1px solid #c6aa58",
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-12 col-md-6">
              <div
                className="p-3 p-md-4 rounded shadow"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <h2
                  className="fw-semibold mb-4 text-center"
                  style={{ color: "#c6aa58",
                    fontSize: "clamp(1.5rem, 4vw, 2.3rem)", 
                    
                   }}
                >
                  Contact Information
                </h2>

                <div className="mb-3 text-center">
                  <h5 style={{ color: "gray" }}>Address</h5>
                  <p style={{ color: "gray", fontSize: "clamp(0.8rem, 2.5vw, 1rem)" }}>
                    Samundri Road Near Umer Medical Store Gojra, Punjab,
                    Pakistan
                  </p>
                </div>

                <div className="mb-3 text-center">
                  <h5 style={{ color: "gray" }}>Phone</h5>
                  <p style={{ color: "gray", fontSize: "clamp(0.8rem, 2.5vw, 1rem)" }}>0463511488 | 0300-6558589</p>
                </div>

                <div className="mb-3 text-center">
                  <h5 style={{ color: "gray" }}>Email</h5>
                  <p style={{ color: "gray", fontSize: "clamp(0.8rem, 2.5vw, 1rem)" }}>oxfordhousesystem@gmail.com</p>
                </div>

                <div className="mb-4 text-center">
                  <h5 style={{ color: "gray" }}>Office Hours</h5>
                  <p style={{ color: "gray", fontSize: "clamp(0.8rem, 2.5vw, 1rem)" }}>
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </p>
                  <p style={{ color: "gray", fontSize: "clamp(0.8rem, 2.5vw, 1rem)" }}>Saturday: 9:00 AM - 1:00 PM</p>
                </div>

                <h5 className="mb-3 text-center" style={{ color: "gray" }}>
                  Follow Us
                </h5>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  {/* Social icons same as before */}
                  <a href="#" style={{ color: "gray", }}>
                    <svg
                      width="26"
                      height="26"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" style={{ color: "gray" }}>
                    <svg
                      width="26"
                      height="26"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" style={{ color: "gray" }}>
                    <svg
                      width="26"
                      height="26"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

// 'use client';

// import NavBar from '../../components/layout/NavBar';
// import Footer from '../../components/layout/Footer';

// export default function Contact() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
//       <NavBar />
//       <main className="container mx-auto px-4 py-24">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
//             Contact Us
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Contact Form */}
//             <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
//               <h2 className="text-2xl font-semibold text-[#FFC107] mb-6">Get in Touch</h2>
//               <form className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-white mb-2">Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-white mb-2">Email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-white mb-2">Message</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={4}
//                     className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
//                     placeholder="Your message"
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-[#FFC107] text-[#034D27] py-3 px-6 rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors duration-300"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>

//             {/* Contact Information */}
//             <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
//               <h2 className="text-2xl font-semibold text-[#FFC107] mb-6">Contact Information</h2>
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-white font-medium mb-2">Address</h3>
//                   <p className="text-white/80">123 College Road, City, Country</p>
//                 </div>
//                 <div>
//                   <h3 className="text-white font-medium mb-2">Phone</h3>
//                   <p className="text-white/80">+1 234 567 8900</p>
//                 </div>
//                 <div>
//                   <h3 className="text-white font-medium mb-2">Email</h3>
//                   <p className="text-white/80">info@oxfordhousesystem.edu</p>
//                 </div>
//                 <div>
//                   <h3 className="text-white font-medium mb-2">Office Hours</h3>
//                   <p className="text-white/80">Monday - Friday: 9:00 AM - 5:00 PM</p>
//                   <p className="text-white/80">Saturday: 9:00 AM - 1:00 PM</p>
//                 </div>
//               </div>

//               {/* Social Media Links */}
//               <div className="mt-8">
//                 <h3 className="text-white font-medium mb-4">Follow Us</h3>
//                 <div className="flex space-x-4">
//                   <a href="#" className="text-white/80 hover:text-[#FFC107] transition-colors">
//                     <span className="sr-only">Facebook</span>
//                     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-white/80 hover:text-[#FFC107] transition-colors">
//                     <span className="sr-only">Twitter</span>
//                     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-white/80 hover:text-[#FFC107] transition-colors">
//                     <span className="sr-only">LinkedIn</span>
//                     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }
