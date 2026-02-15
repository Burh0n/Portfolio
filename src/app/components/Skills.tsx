import { Code2, Database, Palette, Server, Smartphone, Zap } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
      color: 'blue',
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL'],
      color: 'purple',
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      skills: ['MongoDB', 'PostgreSQL', 'AWS', 'Firebase', 'Redis'],
      color: 'green',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Responsive Design', 'PWA', 'Mobile-First'],
      color: 'orange',
    },
    {
      icon: Zap,
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'CI/CD', 'Webpack', 'Vite'],
      color: 'red',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      color: 'pink',
    },
  ];

  const colorMap: Record<string, string> = {
    blue: 'bg-blue-600',
    purple: 'bg-purple-600',
    green: 'bg-green-600',
    orange: 'bg-orange-600',
    red: 'bg-red-600',
    pink: 'bg-pink-600',
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-lg text-sm font-medium mb-4">
            Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Technical Expertise</h2>
          <div className="w-24 h-1 bg-purple-600 mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Proficient in a comprehensive range of modern technologies and development tools, 
            enabling the delivery of high-quality, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${
                    colorMap[category.color]
                  } flex items-center justify-center mb-6`}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${colorMap[category.color]} mr-3`}></div>
                      <span className="text-base">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}