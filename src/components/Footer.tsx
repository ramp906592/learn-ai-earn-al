import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import alClubLogo from "@/assets/al-club-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with{" "}
            <span className="bg-gradient-to-r from-teal-primary to-teal-light bg-clip-text text-transparent">
              Latest AI Trends
            </span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get exclusive access to new courses, AI insights, and industry updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 bg-background border-border focus:border-teal-primary"
            />
            <Button className="bg-gradient-to-r from-teal-primary to-teal-dark hover:from-teal-light hover:to-teal-primary">
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="mb-16" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <img src={alClubLogo} alt="Al Club" className="h-8 w-8" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-primary to-teal-light bg-clip-text text-transparent">
                Al Club
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empowering the next generation of AI creators through world-class education and practical training.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-teal-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-teal-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-teal-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-teal-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-teal-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/courses" className="block text-muted-foreground hover:text-teal-primary transition-colors">
                All Courses
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-teal-primary transition-colors">
                About Us
              </Link>
              <Link to="/instructors" className="block text-muted-foreground hover:text-teal-primary transition-colors">
                Instructors
              </Link>
              <Link to="/blog" className="block text-muted-foreground hover:text-teal-primary transition-colors">
                Blog
              </Link>
              <Link to="/careers" className="block text-muted-foreground hover:text-teal-primary transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <div className="space-y-3">
              <Link to="/help" className="block text-muted-foreground hover:text-teal-primary transition-colors">
                Help Center
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-teal-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/faq" className="block text-muted-foreground hover:text-teal-primary transition-colors">
                FAQ
              </Link>
              <Link to="/community" className="block text-muted-foreground hover:text-teal-primary transition-colors">
                Community
              </Link>
              <Link to="/refund-policy" className="block text-muted-foreground hover:text-teal-primary transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-teal-primary" />
                <span>support@alclub.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-teal-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-teal-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-3">Certified by</h5>
              <div className="flex flex-wrap gap-2">
                <div className="text-xs bg-teal-primary/10 text-teal-primary px-2 py-1 rounded">
                  ISO 9001
                </div>
                <div className="text-xs bg-teal-primary/10 text-teal-primary px-2 py-1 rounded">
                  GDPR Compliant
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © 2024 Al Club. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-teal-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-teal-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-teal-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;