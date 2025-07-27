import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut, Shield } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import alClubLogo from '@/assets/al-club-logo.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={alClubLogo} alt="Al Club" className="h-8 w-8" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-primary to-teal-light bg-clip-text text-transparent">Learner AI</h1>
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

          {/* Auth Section - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                {isAdmin && (
                  <Button 
                    variant="ghost" 
                    className="text-foreground hover:text-teal-primary"
                    onClick={() => navigate('/admin')}
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Admin
                  </Button>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-foreground hover:text-teal-primary">
                      <User className="w-4 h-4 mr-2" />
                      Account
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => signOut()}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  className="text-foreground hover:text-teal-primary"
                  onClick={() => navigate('/auth')}
                >
                  Login
                </Button>
                <Button 
                  className="bg-gradient-to-r from-teal-primary to-teal-dark hover:from-teal-light hover:to-teal-primary"
                  onClick={() => navigate('/auth')}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground hover:text-teal-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link to="/" className="text-foreground hover:text-teal-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/courses" className="text-foreground hover:text-teal-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Courses
              </Link>
              <Link to="/about" className="text-foreground hover:text-teal-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="text-foreground hover:text-teal-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-4">
                {user ? (
                  <>
                    {isAdmin && (
                      <Button 
                        variant="ghost" 
                        className="text-foreground hover:text-teal-primary"
                        onClick={() => navigate('/admin')}
                      >
                        <Shield className="w-4 h-4 mr-2" />
                        Admin
                      </Button>
                    )}
                    <Button 
                      variant="ghost" 
                      className="text-foreground hover:text-teal-primary"
                      onClick={() => signOut()}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="ghost" 
                      className="text-foreground hover:text-teal-primary"
                      onClick={() => navigate('/auth')}
                    >
                      Login
                    </Button>
                    <Button 
                      className="bg-gradient-to-r from-teal-primary to-teal-dark hover:from-teal-light hover:to-teal-primary"
                      onClick={() => navigate('/auth')}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;