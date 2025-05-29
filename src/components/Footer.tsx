
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-earth-800 text-cream-50 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-terracotta-300 mb-4">Boho Vibes</h3>
            <p className="text-cream-200 mb-6 max-w-md">
              Discover your unique style with our curated collection of boho-chic clothing. 
              Embrace the free spirit within you with earthy tones and flowing fabrics.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-sage-200">Stay Connected</h4>
              <form onSubmit={handleNewsletterSignup} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-earth-700 border-earth-600 text-cream-50 placeholder:text-cream-300 focus:border-terracotta-400"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-terracotta-600 hover:bg-terracotta-700 text-white whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-cream-200 hover:text-terracotta-300 hover:bg-earth-700 transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-cream-200 hover:text-terracotta-300 hover:bg-earth-700 transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-cream-200 hover:text-terracotta-300 hover:bg-earth-700 transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sage-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog" className="text-cream-200 hover:text-terracotta-300 transition-colors duration-200">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/lookbook" className="text-cream-200 hover:text-terracotta-300 transition-colors duration-200">
                  Lookbook
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-200 hover:text-terracotta-300 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#size-guide" className="text-cream-200 hover:text-terracotta-300 transition-colors duration-200">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold mb-4 text-sage-200">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <a href="#shipping" className="text-cream-200 hover:text-terracotta-300 transition-colors duration-200">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#returns" className="text-cream-200 hover:text-terracotta-300 transition-colors duration-200">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cream-200 hover:text-terracotta-300 transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="text-cream-200 hover:text-terracotta-300 transition-colors duration-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-earth-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Boho Vibes. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-cream-300 hover:text-terracotta-300 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" className="text-cream-300 hover:text-terracotta-300 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
