import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Code,
      title: 'WordPress Expert',
      description: 'Proficient in WordPress development, customization, and plugin integration',
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Creating stunning responsive websites with attention to detail',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimizing WordPress sites for speed and SEO excellence',
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Delivering tailored solutions that grow your business',
    },
  ];

  return (
    <section id="about" className="section-container bg-white dark:bg-dark-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image/Avatar Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 p-1">
              <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-dark-800 flex items-center justify-center overflow-hidden">
                <img
                  src="/borsa.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white dark:bg-dark-800 rounded-xl shadow-xl p-4"
            >
              <div className="text-3xl">💻</div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-primary-600 dark:text-primary-400 font-semibold">WordPress Web Designer</span> with
              over 6 months of experience in building beautiful, functional websites that
              help businesses succeed. I specialize in crafting custom solutions and delivering
              exceptional client experiences through thoughtful design and development.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in WordPress development started with mastering the platform's capabilities,
              and has evolved into a career dedicated to creating custom themes, plugins, and
              tailored solutions that turn business goals into reality.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not building WordPress sites, you'll find me exploring the latest plugins,
              optimizing site performance, staying updated with WordPress best practices, and
              helping other developers master the platform.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: '6+', label: 'Months Exp.' },
                { value: '12+', label: 'Projects' },
                { value: '6+', label: 'Happy Clients' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card text-center group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                <feature.icon size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
