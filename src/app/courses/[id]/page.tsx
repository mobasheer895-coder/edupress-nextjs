
import CourseDetailCard from "@/components/card/CourseDetailCard";
import Comment from "@/components/course/comment/Comment";
import CourseHero from "@/components/course/courseHero/CourseHero";
import CourseTabs from "@/components/course/courseTabs/CourseTabs";



const CourseDetailsPage = () => {

  return (
    <div>
      <CourseHero/>
      <CourseTabs/>
      <Comment/>  
    </div>
  );
};

export default CourseDetailsPage;