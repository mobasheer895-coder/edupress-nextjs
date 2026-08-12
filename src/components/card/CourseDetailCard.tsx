"use client";

import { State } from "@/data/coursesData";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import BtnPrimary from "../btn/btnPrimary/BtnPrimary";

const CourseDetailCard = () => {
     const params = useParams();
        const id = params.id;
    
      // 3. جلب المصفوفة الكاملة من الـ State
        const allCourses = useSelector((state: State) => state.courses.allCourses);
    
      // 4. جلب الكورس المحدد بناءً على الـ id
        const course = allCourses.find((course) => course.id == id);
    return (
        <div className="border border-gray-500 rounded-2xl sticky max-sm:w-70 max-md:m-auto max-sm:translate-y-20 translate-y-40">
            <img src={course?.image} alt="" />
            <div className="bg-white rounded-b-2xl flex justify-between items-center py-5 px-8 max-sm:px-2 max-lg:px-4">
                <div className="flex items-center gap-3">
                    <del className="text-xl text-gray-500">{course?.dealPrice}</del>
                    <p className="text-2xl text-red-600 font-bold">{course?.price}</p>
                </div>
                    <BtnPrimary btnContent="Start now"/>
                </div>
        </div>
    )
}

export default CourseDetailCard
