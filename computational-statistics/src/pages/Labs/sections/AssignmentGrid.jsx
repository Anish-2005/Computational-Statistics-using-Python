import { motion } from 'framer-motion';
import AssignmentCard from './AssignmentCard';

export default function AssignmentGrid({ assignments, onViewAssignment, pinVerified, onEditAssignment }) {
  return (
    <div className="mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {assignments.map((assignment) => (
        <motion.div
          key={assignment._id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <AssignmentCard 
            assignment={assignment}
            onView={onViewAssignment}
            pinVerified={pinVerified}
            onEdit={onEditAssignment}
          />
        </motion.div>
      ))}
    </div>
  );
}