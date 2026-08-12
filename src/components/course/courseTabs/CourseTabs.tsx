"use client"; // ضروري لأننا نستخدم useState

import { Component, useState } from "react";
import Overview from "./overview/Overview";
import Curriculum from "./curriculum/Curriculum";
import Instractor from "./instractor/Instractor";
import Faqs from "./faqs/Faqs";
import Reviews from "./reviews/Reviews";

// 1. مصفوفة البيانات (يمكنك وضعها في ملف منفصل لاحقاً)
const tabs = [
  { name: "Overview" , component : <Overview/>},
  { name: "Curriculum" , component : <Curriculum/>},
  { name: "Instructor" , component : <Instractor/>},
  { name: "FAQs" , component : <Faqs/>},
  { name: "Reviews" , component : <Reviews/>},
];

const CourseTabs = () => {
  // 2. إدارة الحالة لمعرفة التبويب المختار
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="p-10">
      <div className="border border-gray-200 max-w-200 rounded-2xl max-sm:mt-4 max-lg:mt-20 max-xl:max-w-140">
        {/* القائمة: إضافة onClick لتغيير الحالة */}
        <ul className="flex flex-wrap items-center divide-x divide-gray-200 border-b border-gray-200">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex-1 p-4 text-center cursor-pointer border-b border-gray-200 transition-colors duration-200 hover:bg-gray-50 hover:text-orange-500
                ${activeTab == tab.name 
                  && "text-orange-500 font-bold bg-gray-100" 
                  }`}
            >
              {tab.name}
            </li>
          ))}
        </ul>

        {/* المحتوى الديناميكي */}
       <div className="p-6 bg-gray-100  rounded-b-2xl max-sm:p-3">
          {tabs.find((tabe) => tabe.name == activeTab)?.component}
        </div>
      </div>
    </div>
  );
};

export default CourseTabs;