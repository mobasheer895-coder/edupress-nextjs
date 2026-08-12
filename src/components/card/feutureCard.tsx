import { Course } from "@/data/coursesData"
import Link from "next/link";
import { BiSolidGraduation } from "react-icons/bi";
import { MdAccessTimeFilled } from "react-icons/md";
// ضمن بروبس نخزن معلومات الكاملة للكورس
interface FeaturedCardProps {
  course: Course;
}
const FeaturedCard = ({course} : FeaturedCardProps) => {
    return (
      // الاب لكل كرت من الكروت
        <div className="border m-auto max-lg:w-[80%] max-sm:w-full border-gray-400 rounded-2xl transition-all cursor-pointer  hover:-translate-y-2 hover:shadow-xl/20 hover:border-2">
          {/* من اجل قسم الصورة فقط */}
          <div className="flex">
            <img src={course.image} alt="" className="w-full"/>
          </div>
          {/* القسم تحت الصورة */}
          <div className="p-5 flex flex-col gap-2 border-b border-gray-400">
            {/* الجملة الاولى الموجودة تحت الصورة */}
            <div className="flex gap-2 items-center text-sm">
              <p className="text-gray-500"> {course.firstInstructor}</p>
              <span className="">{course.instructor}</span>
            </div>
            {/* العنوان */}
            <h2 className="text-2xl font-bold">{course.title}</h2>
            {/* حاوية لعدد الدروس و المدة */}
          <div className="flex gap-5 max-sm:text-[10px] max-sm:font-medium">
            {/* مدة الكورس مع الايقونة */}
            <div className="flex items-center gap-2">
              <MdAccessTimeFilled className="text-orange-500 text-xl" />
              <p>{course.duration}</p>
            </div>
            {/* عدد الدروس مع الايقونة */}
            <div className="flex items-center gap-2">
              <BiSolidGraduation className="text-orange-500 text-xl" />
              <p>{course.students}</p>
            </div>
          </div>
          </div>
          {/* القسم السفلي للكرت */}
          <div className="flex justify-between items-center p-4">
            {/* سعر الكورس */}
            <div className="flex gap-2">
              <del className="text-gray-500">{course.price}</del>
              <p className="text-green-600 font-bold">{course.subPrice}</p>
            </div>
            {/* الانتقال الى صفحة معلومات الكورس */}
            <Link 
  href={`/courses/${course.id}`} 
  className="hover:text-orange-400 font-bold transition-all"
>
  {course.btnContent}
</Link>
          </div>
        </div>
    )
}

export default FeaturedCard
