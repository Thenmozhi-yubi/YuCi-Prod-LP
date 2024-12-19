import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info Column */}
          <div className="lg:col-span-2">
            <img 
              src="https://www.go-yubi.com/wp-content/uploads/2022/12/Yubi-900x0-1.png" 
              alt="Yubi Logo" 
              className="h-12 w-auto mb-6 object-contain"
            />
            <p className="text-gray-300 mb-6">
              India's largest credit platform enabling discovery, execution and fulfilment of credit.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Supply Chain Finance</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Co-Lending</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Direct Assignment</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Pool Buyout</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Business Loans</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">API Reference</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Security</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Yubi (CredAvenue Private Limited). All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Notice
              </a>
              <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
              <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;