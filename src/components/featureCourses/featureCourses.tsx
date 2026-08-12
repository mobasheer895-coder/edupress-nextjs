'use client'; 
import { useSelector } from 'react-redux';
import HeadSection from '../headSection/headSection';
import FeaturedCard from '../card/feutureCard';
import { Course } from '@/data/coursesData';

type State = {
  courses : {
    allCourses : Array<Course>
}}
const FeatureCourses = () => {
  // Storeجلب البيانات من ال 
  const courses = useSelector((state: State) => state.courses.allCourses);

  return (
    <section className="px-20 py-10 max-sm:px-4">
      <HeadSection
      title="Featured Courses"
      subTitle="Explore our Popular Courses" 
      btnContent="All courses"
      link='/courses' 
      />
      
      <div className="grid grid-cols-3 gap-6 mt-15 max-lg:grid-cols-1">
        {courses.slice(0, 3).map((course) => (
          <FeaturedCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default FeatureCourses;