import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-lg text-sm font-medium mb-4">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Professional Background</h2>
          <div className="w-24 h-1 bg-purple-600"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                As a dedicated Full Stack Developer and Team Leader, I specialize in creating 
                enterprise-level web applications that combine robust functionality with exceptional 
                user experience. Together with my talented team, we deliver cutting-edge solutions 
                that drive business growth.
              </p>
              <p>
                With extensive experience in both frontend and backend development, we have 
                successfully delivered numerous projects across various industries. Our expertise 
                spans modern JavaScript frameworks, cloud infrastructure, and database management.
              </p>
              <p>
                We are committed to continuous learning and staying current with emerging technologies, 
                ensuring that we deliver solutions using the most effective and efficient tools available. 
                Our collaborative approach ensures high-quality deliverables and satisfied clients.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10 rounded-xl border border-purple-100 dark:border-purple-800/30">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">25+</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Projects Completed</div>
              </div>
              <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-xl border border-blue-100 dark:border-blue-800/30">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-600/20 dark:to-blue-600/20 rounded-2xl opacity-30 blur-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759661990336-51bd4b951fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbGFwdG9wJTIwY29kZXxlbnwxfHx8fDE3NzExNTM4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}