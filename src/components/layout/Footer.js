export default function Footer() {
    return (
      <footer className="footer-custom py-5">
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col-md-3 mb-4">
              <div className="d-flex align-items-center mb-3">
                <img 
                  src="/logo.png" 
                  alt="Oxford House System Logo" 
                  style={{ height: '40px', width: '40px', objectFit: 'contain' }}
                  className="me-2"
                />
                <h3 className="h5 fw-bold text-warning mb-0">Oxford House System</h3>
              </div>
              <p className="text-white-50">
                Where Excellence meets perfection
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="col-md-3 mb-4">
              <h3 className="h5 fw-bold text-warning mb-3">Quick Links</h3>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white-50 text-decoration-none hover-text-warning">Home</a></li>
                <li><a href="/academics" className="text-white-50 text-decoration-none hover-text-warning">Academics</a></li>
                <li><a href="/admissions" className="text-white-50 text-decoration-none hover-text-warning">Admissions</a></li>
                <li><a href="/contact" className="text-white-50 text-decoration-none hover-text-warning">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div className="col-md-3 mb-4">
              <h3 className="h5 fw-bold text-warning mb-3">Contact Info</h3>
              <ul className="list-unstyled text-white-50">
                <li>123 Oxford Road</li>
                <li>Oxford, UK</li>
                <li>Phone: +44 123 456 7890</li>
                <li>Email: info@oxfordhousesystem.edu</li>
              </ul>
            </div>
  
            {/* Social Links */}
            <div className="col-md-3 mb-4">
              <h3 className="h5 fw-bold text-warning mb-3">Follow Us</h3>
              <div className="d-flex gap-3">
                <a href="#" className="text-white-50 text-decoration-none hover-text-warning">
                  <i className="fab fa-facebook-f fa-lg"></i>
                </a>
                <a href="#" className="text-white-50 text-decoration-none hover-text-warning">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" className="text-white-50 text-decoration-none hover-text-warning">
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
                <a href="#" className="text-white-50 text-decoration-none hover-text-warning">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-4 pt-3 border-top border-white-10 text-center text-white-50">
            <p>&copy; {new Date().getFullYear()} Oxford House System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }