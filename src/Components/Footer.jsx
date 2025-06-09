import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="text-white pt-5 pb-3" style={{ backgroundColor: 'purple' }}>
      <div className="container">
        <div className="row">
          {/* App Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">🎓 Student Portal</h5>
            <p>Empowering students through easy registration and management tools.</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white"><Facebook size={20} /></a>
              <a href="#" className="text-white"><Twitter size={20} /></a>
              <a href="#" className="text-white"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/add" className="text-white text-decoration-none">Add Student</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Contact</h6>
            <p className="mb-1"><MapPin size={16} className="me-2" />123 College Lane, Education City</p>
            <p className="mb-1"><Phone size={16} className="me-2" />+91 98765 43210</p>
            <p className="mb-1"><Mail size={16} className="me-2" />support@studentportal.com</p>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Student Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
