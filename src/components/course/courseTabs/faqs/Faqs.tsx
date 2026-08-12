"use client";

import { State } from "@/data/coursesData";
import { useParams } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";

const Faqs = () => {
    const [open, setOpen] = useState<number | null>(null);
    const params = useParams();
    const id = params.id;

    // جلب المصفوفة الكاملة من الـ State
    const allCourses = useSelector((state: State) => state.courses.allCourses);

    // جلب الكورس المحدد بناءً على الـ id
    const course = allCourses.find((course) => course.id == id);
  // ... (جلب البيانات كما هو)

    return (
        <div className="flex flex-col gap-5">
        {course?.faqs?.map((item, index) => {
            const openIndex = open === index;
            return (
            <div
                key={index}
                className="flex flex-col p-3 bg-white rounded-xl transition-all"
            >
                {/* السؤال (الزر) */}
                <div
                className={`flex justify-between items-center cursor-pointer hover:text-orange-600 ${openIndex ? "text-orange-500" : ""}`}
                onClick={() => setOpen(openIndex ? null : index)}
                >
                <h2 className="font-bold py-1 max-sm:text-sm">{item.title}</h2>
                {openIndex ? (
                    <IoIosArrowUp className="text-xl text-gray-600" />
                ) : (
                    <IoIosArrowDown className="text-xl text-gray-600" />
                )}
                </div>

                {/* الحاوية التي تحتوي النص - بدون style */}
                <div
                className={`grid transition-all duration-500 ${openIndex ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                <div className="overflow-hidden">
                    <p className="pt-2 text-gray-600">{item.description}</p>
                </div>
                </div>
            </div>
            );
        })}
        </div>
    );
};

export default Faqs;
