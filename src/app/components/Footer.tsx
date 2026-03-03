import { Link } from 'react-router';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl mb-4">True Lab</h3>
            <p className="text-gray-300 text-sm mb-4">
              Leading diagnostic laboratory providing accurate, reliable, and timely medical test results with state-of-the-art technology.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/book-test" className="text-gray-300 hover:text-secondary transition-colors">
                  Book a Test
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Pathology Tests</li>
              <li>Radiology Services</li>
              <li>Home Sample Collection</li>
              <li>Health Packages</li>
              <li>Corporate Health Plans</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  <a href=" https://maps.app.goo.gl/PWMby4Wceykmo8MH8?g_st=iw" className="text-gray-300 hover:text-secondary transition-colors">
                    95-R, Model Town, Rewari, Haryana-123401
                  </a></span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+918398989804" className="text-gray-300 hover:text-secondary transition-colors">
                  +91 8398989804
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@truelab.com" className="text-gray-300 hover:text-secondary transition-colors">
                  info@truelab.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>&copy; 2026 True Lab. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-secondary transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
