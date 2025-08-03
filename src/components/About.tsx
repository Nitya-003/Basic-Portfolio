import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Frontend and Full Stack Developer with a deep love for creating
              amazing digital experiences. Currently pursuing my B.Tech in Computer Science
              Engineering, I specialize in modern web technologies.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in development spans across various technologies including React, Node.js,
              TypeScript, and MongoDB. I believe in crafting solutions that not only function
              flawlessly but also provide exceptional user experiences.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <GraduationCap className="text-purple-400" size={20} />
                <span>B.Tech CSE at Panipat Institute of Engineering and Technology</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="text-cyan-400" size={20} />
                <span>2024 – 2028</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-green-400" size={20} />
                <span>Kurukshetra, India</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Key Strengths</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'React.js',
                'Node.js',
                'TypeScript',
                'TailwindCSS',
                'MongoDB',
                'Express.js',
                'GitHub',
                'Postman'
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-700/50 rounded-lg p-3 text-center border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <span className="text-sm font-medium text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
