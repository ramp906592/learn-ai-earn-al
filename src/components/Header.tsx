import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import alClubLogo from "@/assets/al-club-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={alClubLogo} alt="Al Club" className="h-8 w-8" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-primary to-teal-light bg-clip-text text-transparent">
              Al Club
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-teal-primary transition-colors">
              Home
            </Link>
            <Link to="/courses" className="text-foreground hover:text-teal-primary transition-colors">
              Courses
            </Link>
            <Link to="/about" className="text-foreground hover:text-teal-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-teal-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-teal-primary">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-teal-primary to-teal-dark hover:from-teal-light hover:to-teal-primary">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-teal-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-teal-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/courses" 
                className="text-foreground hover:text-teal-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-teal-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-teal-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="ghost" className="text-foreground hover:text-teal-primary">
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-teal-primary to-teal-dark hover:from-teal-light hover:to-teal-primary">
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;