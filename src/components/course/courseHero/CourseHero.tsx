"use client";
import CourseDetailCard from "@/components/card/CourseDetailCard";
import { Course, State } from "@/data/coursesData";
import { useParams } from "next/navigation";
import React, { ReactNode } from "react";
import { BiSolidGraduation } from "react-icons/bi";
import { CiSquareQuestion } from "react-icons/ci";
import { LuFiles } from "react-icons/lu";
import { MdAccessTimeFilled, MdSignalCellularAlt } from "react-icons/md";
import { useSelector } from "react-redux";

interface courseData {
    icon: ReactNode;
    text?: string;
}

const CourseHero = () => {
  // 2. استخدام useParams لجلب الـ id من الرابط
    const params = useParams();
    const id = params.id;

  // 3. جلب المصفوفة الكاملة من الـ State
    const allCourses = useSelector((state: State) => state.courses.allCourses);

  // 4. جلب الكورس المحدد بناءً على الـ id
    const course = allCourses.find((course) => course.id == id);
    const courseContent: courseData[] = [
    {
        icon: <MdAccessTimeFilled className="text-orange-500 text-xl" />,
        text: course?.duration,
    },
    {
        icon: <BiSolidGraduation className="text-orange-500 text-xl" />,
        text: course?.students,
    },
    {
        icon: <MdSignalCellularAlt className="text-orange-500 text-xl" />,
        text: course?.levels,
    },
    {
        icon: <LuFiles className="text-orange-500 text-xl" />,
        text: course?.lessons,
    },
    {
        icon: <CiSquareQuestion className="text-orange-600 text-3xl font-extrabold" />,
        text: course?.quizzes,
    },
    ];
    return (
    <div>
        <div className="bg-black flex justify-between p-12 max-sm:py-8 max-sm:px-4 max-md:flex-col">
            {/* عرض بيانات الكورس من الـ State */}
            <div className="flex flex-col gap-6 ">
            <div className="flex items-center gap-8 max-sm:gap-2">
                <div className="bg-[#555555] rounded-2xl px-4 py-3">
                <p className="text-white">{course?.category}</p>
                </div>
                <p className="text-2xl text-white max-sm:text-[13px]">
                <span className="text-gray-600">{course?.firstInstructor}</span>
                {course?.instructor}
            </p>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-white">
                {course?.title}
            </h1>

            <div className="flex flex-wrap gap-5">
                {courseContent.map((cour, index) => {
                return (
                    <div className="flex items-center gap-2" key={index}>
                    <span>{cour.icon}</span>
                    <p className="text-white">{cour.text}</p>
                </div>
                );
                })}
            </div>
            </div>
                <CourseDetailCard/>
        </div>
        </div>
    );
};

export default CourseHero;
