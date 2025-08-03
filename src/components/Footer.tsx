import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2">
          © 2024 Nitya Gosain. Made with <Heart size={16} className="text-red-500" /> and React.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
