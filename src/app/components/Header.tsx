import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import logo from "../../assets/truelab.png";


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+918398989804" className="flex items-center gap-1 hover:text-secondary transition-colors">
                <Phone className="w-3 h-3" />
                <span>+91 8398989804</span>
              </a>
              <a href="mailto:info@truelab.com" className="flex items-center gap-1 hover:text-secondary transition-colors">
                <Mail className="w-3 h-3" />
                <span>info@truelab.com</span>
              </a>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <a href=" https://maps.app.goo.gl/PWMby4Wceykmo8MH8?g_st=iw" target="_blank" rel="noopener noreferrer"><span>95-R, Model Town, Rewari, Haryana-123401</span></a>
              {/* <span>24/7 Service Available</span> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <img src={logo} alt="logo" className='w-50 h-auto' />
              {/* <span className="text-2xl font-bold text-primary">True Lab</span> */}
              {/* <span className="text-xs text-secondary">Trusted Diagnostics</span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-secondary hover:bg-secondary/90">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t pt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    isActive(link.path)
                      ? 'text-primary font-semibold'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  Contact Us
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
