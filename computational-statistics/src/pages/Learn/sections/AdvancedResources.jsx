import { motion } from 'framer-motion';
import resources from './data/resources';

const AdvancedResources = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-amber-400 border-l-4 border-amber-500 pl-4">
        Advanced Resources
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-amber-500 transition-all"
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl text-amber-400 mr-3">{resource.icon}</span>
              <h3 className="text-xl font-semibold text-gray-100">{resource.title}</h3>
            </div>
            <ul className="space-y-3">
              {resource.content.map((item, i) => (
                <li key={i} className="text-gray-400 flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AdvancedResources;