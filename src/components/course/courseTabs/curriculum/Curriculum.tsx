"use client";

import { State } from "@/data/coursesData";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowUp, IoMdLock } from "react-icons/io";
import { MdFileCopy, MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";

const Curriculum = () => {
    // نستخدم null كقيمة ابتدائية (لا يوجد قسم مفتوح عند التحميل)
    const [open, setOpen] = useState<number | null>(null); 
    
    const params = useParams();
    const id = params.id;
    
    const allCourses = useSelector((state: State) => state.courses.allCourses);
    const course = allCourses.find((course) => course.id == id);

    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-xl text-gray-600">{course?.titleSection}</h2>
            
            {course?.curriculum?.map((item, index) => {
                const openIndex = open == index;

                return (
                    <div 
                        key={index} 
                        className="rounded-2xl bg-white mb-2 flex flex-col"
                    >
                        <div 
                            className="flex justify-between cursor-pointer hover:text-orange-500 transition-all p-3 max-sm:flex-col"
                            onClick={() => setOpen(openIndex ? null : index)}
                        >
                            <div className="flex items-center gap-2" >
                                {openIndex ? 
                                    <IoIosArrowUp className="text-3xl max-sm:text-xl"/> :
                                    <MdKeyboardArrowDown className="text-3xl max-sm:text-xl"/>
                                }
                                <h2 className={`font-bold max-sm:text-[12px] ${openIndex && "text-orange-500"}`}>{item.titleBar}</h2>
                            </div>  
                            <div className="flex items-center gap-3.5 text-gray-500">
                                <p className="max-sm:text-[13px]">{item.lessoncount}</p>
                                <p className="max-sm:text-[13px]">{item.mins}</p>
                            </div>
                        </div>

                        {/* حاوية التفاصيل */}
                        <div className={`
                            flex flex-col gap-3 transition-all duration-400 
                            ${openIndex ? "max-h-125 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}
                        `}>
                            {item.lessonss?.map((lesson, lessonIndex) => (
                                <div key={lessonIndex} className="flex justify-between p-2 max-sm:flex-col max-sm:gap-3">
                                    <div className="flex items-center gap-4 ml-10 max-sm:ml-6">
                                        <MdFileCopy className="text-2xl text-gray-700" />
                                        <span className="hover:text-orange-500 cursor-pointer">{lesson.title}</span>
                                    </div>
                                    <div className="flex items-center gap-3 max-sm:ml-3 max-sm:gap-1.5">
                                        <button className="rounded-2xl bg-blue-600 text-white py-3 px-5 max-sm:px-3 max-sm:py-1.5">preview</button>
                                        <span>{lesson.duration}</span>
                                        {lesson.isLocked ? <IoMdLock className="text-2xl" /> : <FaCheck className="text-gray-700" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Curriculum;