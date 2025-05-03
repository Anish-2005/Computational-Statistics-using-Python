import { motion } from 'framer-motion';
import topics from './data/topics';

const LearningPathways = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-amber-400 border-l-4 border-amber-500 pl-4">
        Core Learning Pathways
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -5 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-amber-500 transition-all shadow-lg"
          >
            <div className="text-3xl mb-4 text-amber-400">{topic.icon}</div>
            <h3 className="text-xl font-semibold mb-4 text-gray-100">{topic.title}</h3>
            <ul className="space-y-3">
              {topic.items.map((item, i) => (
                <li key={i} className="flex items-center text-gray-400">
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

export default LearningPathways;