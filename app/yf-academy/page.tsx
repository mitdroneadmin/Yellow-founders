import AcademyHero from '@/components/AcademyHero';
import LearningPaths from '@/components/LearningPaths';
import CourseGrid from '@/components/CourseGrid';
import InstructorSpotlight from '@/components/InstructorSpotlight';
import CommunityStats from '@/components/CommunityStats';

export default function YFAcademyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AcademyHero />
        <LearningPaths />
        <CourseGrid />
        <InstructorSpotlight />
        <CommunityStats />
      </div>
    </div>
  );
}