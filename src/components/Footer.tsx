import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-slate-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold">Thinkinginwordpress</div>
                <div className="text-blue-400 text-sm font-medium">Solutions</div>
              </div>
            </div>
            <p className="text-slate-300">
              Helping organizations implement, customize, and optimize CRM systems to streamline sales workflows and improve productivity.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <span>Powered by</span>
              <a
                href="https://salescentri.com?utm_source=thinkinginwordpress.com&utm_medium=footer&utm_campaign=partner_network"
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center space-x-1 transition-colors"
              >
                <span>Sales Intelligence Platform</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/features" className="hover:text-blue-400 transition-colors">CRM Implementation</Link></li>
              <li><Link to="/features" className="hover:text-blue-400 transition-colors">System Integration</Link></li>
              <li><Link to="/features" className="hover:text-blue-400 transition-colors">Custom Dashboards</Link></li>
              <li><Link to="/features" className="hover:text-blue-400 transition-colors">Automation Workflows</Link></li>
              <li><Link to="/features" className="hover:text-blue-400 transition-colors">Migration Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li>
                <a 
                  href="https://salescentri.com/resources/case-studies" 
                  className="hover:text-blue-400 transition-colors flex items-center space-x-1"
                >
                  <span>Case Studies</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/resources/whitepapers-ebooks" 
                  className="hover:text-blue-400 transition-colors flex items-center space-x-1"
                >
                  <span>Free Guides</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Henderson, NV</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:info@thinkinginwordpress.com" className="hover:text-blue-400 transition-colors">
                  info@thinkinginwordpress.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+17022551234" className="hover:text-blue-400 transition-colors">
                  (702) 255-1234
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              © 2025 Thinkinginwordpress Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a 
                href="https://salescentri.com/legal/privacy-policy" 
                className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-1"
              >
                <span>Privacy Policy</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://salescentri.com/legal/terms" 
                className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-1"
              >
                <span>Terms of Service</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://salescentri.com/get-started/contact" 
                className="text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-1"
              >
                <span>Support</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;