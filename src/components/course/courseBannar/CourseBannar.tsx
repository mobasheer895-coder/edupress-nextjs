    "use client";
    import { Course } from "@/data/coursesData";
    import { useParams } from "next/navigation";
    import { MdKeyboardArrowRight } from "react-icons/md";
    import { useSelector } from "react-redux";

    type State = {
    courses: {
        allCourses: Array<Course>;
    };
    };
    interface CourseBannerProps {
    category?: string; // العبارة الثانية
    title?: string;    // العبارة الثالثة
    }
    const CourseBannar = ({category , title} : CourseBannerProps) => {
        // 2. استخدام useParams لجلب الـ id
    const params = useParams();
    const id = params.id;

    // 3. جلب المصفوفة الكاملة
    const allCourses = useSelector((state: State) => state.courses.allCourses);

    // 4. جلب الكورس المحدد بناءً على الـ id
    const course = allCourses.find((course) => course.id == id);

        return (
            <div className='bg-gray-100 py-6 px-10 flex gap-3 max-sm:flex-col'>
                <div className="flex">
                    <div className="flex items-center">
                    <p>Homepage </p>
                <MdKeyboardArrowRight className="text-gray-400 text-2xl"/>
                </div>
                <div className="flex items-center gap-3">
                    <p>{category}</p>
                {category && <MdKeyboardArrowRight className="text-gray-400 text-2xl"/>}
                </div>
                </div>
                <p className="text-gray-400 max-sm:text-[10p]">{course?.title || title}  </p>
            </div>
        )
    }

    export default CourseBannar
