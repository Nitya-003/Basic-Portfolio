import React from 'react';
import { Code, Database, Wrench, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['C', 'Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frameworks',
      icon: <Database className="w-6 h-6" />,
      skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'Three.js', 'R3F'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'Postman', 'Figma', 'VS Code', 'MongoDB'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Design & Others',
      icon: <Palette className="w-6 h-6" />,
      skills: ['TailwindCSS', 'UI/UX', 'Responsive Design', 'REST APIs', 'Problem Solving', 'Team Work'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-xl text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-700/50 rounded-lg p-3 text-center border border-gray-600/50 hover:border-purple-500/50 hover:bg-gray-600/50 transition-all duration-300"
                  >
                    <span className="text-sm font-medium text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
