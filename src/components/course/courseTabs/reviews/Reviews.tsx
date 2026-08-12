"use client";

import { useDispatch, useSelector } from "react-redux";
import { State } from "@/data/coursesData";
import { useParams } from "next/navigation";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { nextPage, prevPage, setPage } from "@/redux/slices";
import { ReactNode } from "react";
import { BiShare } from "react-icons/bi";

interface btnSlideData {
  btnContent: string | ReactNode;
  action: () => void;
}

const Reviews = () => {
  const renderStars = (rating?: string) => {
    const numRating = Math.round(Number(rating) || 0);
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i}>
        {i < numRating ? (
          <AiFillStar className="text-yellow-400" />
        ) : (
          <CiStar className="text-yellow-400" />
        )}
      </span>
    ));
  };

  const dispatch = useDispatch();
  const { id } = useParams();

  const allCourses = useSelector((state: State) => state.courses.allCourses);
  const currentPage = useSelector((state: State) => state.courses.currentPage);
  
  const course = allCourses.find((c) => c.id == id);

  // منطق الترقيم للتعليقات
  const commentsPerPage = 3; 
  const startIndex = (currentPage - 1) * commentsPerPage;
  const currentComments = course?.comments?.slice(startIndex, startIndex + commentsPerPage);

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
    <div>
      <p className="mb-3.5 font-bold text-xl">{course?.titlereviews}</p>
      
      {/* 1. قسم التقييم العام */}
      <div className="flex items-center gap-2.5">
        <h2 className="text-4xl font-bold">{course?.Ratingreview?.averageRating}</h2>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            {renderStars(course?.Ratingreview?.averageRating)}
          </div>
          <p className="text-sm text-gray-500">{course?.Ratingreview?.ratingLabel}</p>
        </div>
      </div>

      {/* 2. قسم توزيع النجوم */}
      <div className="stars-distribution mt-4">
        {course?.starsDistribution?.map((item, index) => (
          <div key={index} className="flex items-center gap-4 mb-2">
            <div className="flex items-center">
              {[...Array(item.stars)].map((_, i) => (
                <AiFillStar key={i} className="text-yellow-400 text-sm" />
              ))}
              {[...Array(5 - item.stars)].map((_, i) => (
                <CiStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>
            
            <span className="text-sm font-medium w-10">{item.percentage}%</span>
            
            <div className="w-full h-2 bg-gray-200">
              <div 
                className="h-full bg-yellow-400" 
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* 3. قائمة التعليقات المحدثة */}
      <div className="mt-6 border-t border-gray-300">
        {currentComments?.map((comment) => (
          <div key={comment.id} className="flex items-center gap-4 py-4 max-sm:items-start">
            <img src={comment.userAvatar} alt={comment.userName} />
            <div className="w-full">
              <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start">
                <h4 className="font-semibold">{comment.userName}</h4>
                <p className="text-[15px] text-gray-400">{comment.date}</p>
                {/* <BiShare /> */}
              </div>
              <p className="mt-1 mb-4 max-sm:mt-3">{comment.content}</p>
              <div className="flex items-center gap-3 text-lg font-medium cursor-pointer rounded-xl w-20 transition-all hover:bg-gray-200">
                <BiShare className="text-red-600" />
                <p>reply</p>
              </div>
            </div>
              
          </div>
        ))}

        <div className="flex justify-center gap-3 w-full mt-6">
          {btnSlideContent.map((item, index) => {
            const isPageNumber = typeof item.btnContent == 'string' && !isNaN(Number(item.btnContent));
            const pageNum = Number(item.btnContent);
            const isActive = isPageNumber && pageNum == currentPage;

            return (
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
    </div>
  );
};

export default Reviews;