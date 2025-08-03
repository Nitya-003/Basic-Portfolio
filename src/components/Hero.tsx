import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-6">
          Frontend & Full Stack Developer
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">
          Nitya Gosain
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Passionate developer crafting amazing digital experiences with modern technologies.
          Currently pursuing B.Tech CSE at PIET (2024–2028).
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
          <MapPin size={16} />
          <span>Kurukshetra, India</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:nityagosain@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={20} />
            Contact Me
          </a>
          <a
            href="https://github.com/Nitya-003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/nitya-gosain1103"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Nitya-003"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href="tel:+919275508054"
            className="p-3 bg-gray-800 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
