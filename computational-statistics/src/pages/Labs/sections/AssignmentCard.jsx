import { FaFolder } from "react-icons/fa";
export default function AssignmentCard({ assignment, onView, pinVerified, onEdit }) {
    const IconComponent = assignment.icon;
    
    return (
      <div 
        className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all shadow-lg hover:shadow-xl h-full flex flex-col"
        onClick={() => onView(assignment)}
      >
        <div className="text-4xl mb-4 text-orange-400">
          <IconComponent />
        </div>
        <h3 className="text-2xl font-semibold text-gray-100 mb-2">
          {assignment.title}
        </h3>
        <div className="flex items-center text-sm text-orange-400/80 mt-auto">
          <FaFolder className="mr-2" />
          {assignment.problems.length} case studies
        </div>
      </div>
    );
  }