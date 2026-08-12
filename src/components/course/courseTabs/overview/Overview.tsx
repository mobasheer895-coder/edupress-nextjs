"use client";

import { State } from "@/data/coursesData";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

const Overview = () => {
  const params = useParams();
  const id = params.id;
  
  // جلب المصفوفة الكاملة من الـ State
  const allCourses = useSelector((state: State) => state.courses.allCourses);
  
  // جلب الكورس المحدد بناءً على الـ id
  const course = allCourses.find((course) => course.id == id);

  return (
    <div className="">
      {/* نقوم بعمل map على مصفوفة overView */}
      {course?.overView.map((item, index) => (
        <div key={index}  className="flex flex-col gap-6">
          <p>{item.overviewText}</p>
          <p>{item.lastOverviewText}</p>
        </div>
      ))}
    </div>
  );
};

export default Overview;