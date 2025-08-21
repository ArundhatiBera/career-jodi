import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  // Filter navigation based on user role
  const getFilteredNavLinks = () => {
    const baseLinks = [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' }
    ];

    if (user?.role === 'student') {
      return [
        ...baseLinks.slice(0, 1), // Home
        { name: 'Career Match', path: '/career-match' },
        { name: 'Student Results', path: '/student-results' },
        { name: 'Career Explorer', path: '/career-suggestions' },
        ...baseLinks.slice(1) // About, Contact
      ];
    } else if (user?.role === 'parent') {
      return [
        ...baseLinks.slice(0, 1), // Home
        { name: 'Parent Preferences', path: '/parent-preferences' },
        { name: 'Student Results', path: '/student-results' },
        ...baseLinks.slice(1) // About, Contact
      ];
    }

    return baseLinks;
  };

  const navLinks = getFilteredNavLinks();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-bounce">
            <div className="w-10 h-10 gradient-fun rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-bubblegum-pink to-lavender bg-clip-text text-transparent">
              Career Jodi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover-jiggle ${
                  isActive(link.path)
                    ? 'bg-primary text-white shadow-fun'
                    : 'text-foreground hover:bg-primary/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* User Info & Logout */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-primary/20">
              <div className="flex items-center space-x-2 px-3 py-2 bg-primary/10 rounded-full">
                <User className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary capitalize">
                  {user?.role} - {user?.name}
                </span>
              </div>
              <button
                onClick={logout}
                className="p-2 rounded-full hover:bg-destructive/10 text-destructive transition-colors hover-bounce"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors hover-bounce"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 bg-white/95 backdrop-blur-lg">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-primary text-white shadow-fun'
                      : 'text-foreground hover:bg-primary/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile User Info & Logout */}
              <div className="pt-4 mt-4 border-t border-primary/20">
                <div className="px-4 py-2 mb-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <User className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-primary capitalize">
                      {user?.role} - {user?.name}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 rounded-lg font-medium text-destructive hover:bg-destructive/10 transition-all duration-300 flex items-center"
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;