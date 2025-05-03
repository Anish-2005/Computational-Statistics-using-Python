import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import LearningPathways from './sections/LearningPathways';
import InteractiveCode from './sections/InteractiveCode';
import AdvancedResources from './sections/AdvancedResources';
import QuickStartGuide from './sections/QuickStartGuide';
import Footer from '../../components/Footer';
import PythonBackground from '../../components/PythonBackground';
export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 animate-pulse bg-[length:100px_100px] bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)]" />
      </div>
      <PythonBackground />
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <Hero />

        {/* Learning Pathways */}
        <LearningPathways />

        {/* Interactive Code Example */}
        <InteractiveCode />

        {/* Advanced Resources */}
        <AdvancedResources />

        {/* Quick Start Guide */}
        <QuickStartGuide />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};