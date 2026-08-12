"use client";

import { State } from "@/data/coursesData";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ReactNode } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidGraduation } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";
import { MdFileCopy } from "react-icons/md";
import { useSelector } from "react-redux";

interface linkSocialData {
    icon : ReactNode
    link : string
}
const linkSocial : linkSocialData[] = [
        { icon: <FaFacebookF />, link: "https://facebook.com" },
        { icon: <FaPinterestP />, link: "https://pinterest.com" },
        { icon: <BsTwitterX />, link: "https://x.com" },
        { icon: <AiFillInstagram />, link: "https://instagram.com" },
        { icon: <FaYoutube />, link: "https://youtube.com" }]

const Instractor = () => {
    const params = useParams();
  const id = params.id;
  
  // جلب المصفوفة الكاملة من الـ State
  const allCourses = useSelector((state: State) => state.courses.allCourses);
  
  // جلب الكورس المحدد بناءً على الـ id
  const course = allCourses.find((course) => course.id == id);
    return (
        <div>
            {course?.instructorBio?.map((item, index) => (
                <div key={index} className="flex flex-col gap-6"> 
                    
                    {/* الديف الرئيسي: يحتوي على الصورة، العنوان، والطلاب/الدروس */}
                    <div className="flex gap-8 max-sm:flex-col">
                        
                            <img src={item.imgInstractor} alt="" />
                        <div className="flex flex-col gap-6">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">{item.titleInstractor}</h2>
                            <p className="text-gray-600">{item.subTitleInstractor}</p>
                            </div>
                            
                            <div className="flex gap-5 text-gray-500 max-sm:flex-col">
                                <div className="flex gap-3">
                                    <BiSolidGraduation className="text-orange-500 text-2xl"/>
                                <p>  {item.studentsInstractor}</p>
                                </div>
                                <div className="flex gap-3">
                                    <MdFileCopy className="text-2xl text-orange-500" />
                                    <p>{item.lessonsInstractor}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* الفقرة هنا ستظهر تحت الديف الحاوي لكل ما سبق */}
                    <p className="text-gray-600">
                        {item.descriptionInstractor}
                    </p>
                    <div className="flex items-center gap-4 text-gray-700">
                        <p className="text-lg">{item.social}</p>
                    <div className="flex flex-wrap gap-2">
                        {linkSocial.map((social, socialIndex) => (
                            <Link
                                key={socialIndex}
                                href={social.link}
                                className="hover:text-orange-400 hover:scale-125 cursor-pointer text-2xl transition-all"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Instractor
