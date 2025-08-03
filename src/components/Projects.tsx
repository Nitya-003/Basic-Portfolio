import React from 'react';
import { ExternalLink, Github, Cpu, Palette } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CropChain',
      description: 'Agriculture Transparency Platform tracking crops from farm to fork with blockchain technology',
      features: [
        'Ethereum Blockchain Integration',
        'QR Code Tracking System',
        'Role-based Access Control',
        'Supply Chain Transparency'
      ],
      techStack: ['Solidity', 'Ether.js', 'Express.js', 'MongoDB', 'React'],
      github: 'https://github.com/Nitya-003/CropChain.git',
      icon: <Cpu className="w-6 h-6" />,
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'Shadé',
      description: '3D E-Commerce Experience with immersive UI built using advanced 3D components',
      features: [
        'Immersive 3D Product Display',
        'Stylish Dark Theme',
        'Interactive User Experience',
        'Modern E-commerce Features'
      ],
      techStack: ['React', 'Three.js', 'TailwindCSS', 'Framer Motion'],
      github: 'https://github.com/Nitya-003/Shade.git',
      icon: <Palette className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-xl text-white`}>
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-600 hover:border-gray-500 hover:text-white transition-all duration-300"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
