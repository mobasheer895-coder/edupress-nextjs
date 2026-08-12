"use client";
import FeaturedCard from "@/components/card/feutureCard";
import HeadSection from "@/components/headSection/headSection";
import { Course } from "@/data/coursesData";
import { nextPage, prevPage, setPage } from "@/redux/slices";
import { ReactNode } from "react";
import { FaList } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdWindow,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

type State = {
  courses: {
    allCourses: Array<Course>;
    currentPage: number;
    itemsPerPage: number;
  };
};

interface btnSlideData {
  btnContent: string | ReactNode;
  action: () => void;
}

const Page = () => {
  const dispatch = useDispatch();
  const { allCourses, currentPage, itemsPerPage } = useSelector(
    (state: State) => state.courses,
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCourses = allCourses.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
// محتوى السلايد
  const btnSlideContent: btnSlideData[] = [
    {
      btnContent: <MdKeyboardArrowLeft className="text-xl" />,
      action: () => dispatch(prevPage()),
    },
    { btnContent: "1", action: () => dispatch(setPage(1)) },
    { btnContent: "2", action: () => dispatch(setPage(2)) },
    { btnContent: "3", action: () => dispatch(setPage(3)) },
    {
      btnContent: <MdKeyboardArrowRight className="text-xl" />,
      action: () => dispatch(nextPage()),
    },
  ];

  return (
    <div className="p-20 max-lg:py-20 max-lg:px-10">
      {/* حاوية لفورم البحث و الايقونات */}
      <div className="flex justify-between items-center max-md:flex-col max-lg:items-stretch max-lg:gap-5">
        <HeadSection title="All Courses" />

        {/* الحاوية الثانية للفورم*/}
        <div className="flex items-center gap-5">
          <form className="flex p-1 justify-between border-b">
            <input
              type="text"
              placeholder="Search..."
              className="outline-0 w-full"
            />
            <IoSearch className="text-2xl cursor-pointer" />
          </form>

          {/*حاوية الأيقونات */}
          <div className="flex gap-3">
            <MdWindow className="text-orange-500 text-2xl hover:scale-125 transition-all cursor-pointer" />
            <FaList className="text-2xl hover:scale-125 transition-all cursor-pointer" />
          </div>
        </div>
      </div>
      {/* حاوية مكان الكروت */}
      <div className="grid grid-cols-3 gap-6 mt-15 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:justify-items-center">
        {currentCourses.map((course) => (
          <FeaturedCard key={course.id} course={course} />
        ))}
      </div>

      <div className="flex justify-center gap-3 w-full mt-6">
        {btnSlideContent.map((item, index) => {
          const isPageNumber =
            typeof item.btnContent == "string" &&
            !isNaN(Number(item.btnContent));
          const pageNum = Number(item.btnContent);
          const isActive = isPageNumber && pageNum == currentPage;

          return (
            // حاوية الانتقال بين كل ست كورسات
            <div
              key={index}
              className={`flex justify-center items-center border border-gray-300 rounded-full w-10 h-10 transition-all cursor-pointer 
                ${isActive ? "bg-black text-white" : "hover:bg-gray-700 hover:text-white"}`}
              onClick={item.action}
            >
              <button className="cursor-pointer">{item.btnContent}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
