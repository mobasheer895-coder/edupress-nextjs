// بيانات تصنيفات الكورسات
interface CategoriesData {
    icon : string
    title : string
    numberCourses : string
}
// معلومات كل نوع
const CategoriesContent : CategoriesData[] = [
    {
        icon : '/images/art.svg',
        title : 'Art & Design',
        numberCourses : '38 Courses'
    },
    {
        icon : '/images/development.svg',
        title : 'Development',
        numberCourses : '38 Courses'
    },
    {
        icon : '/images/Icon.svg',
        title : 'Communication',
        numberCourses : '38 Courses'
    },
    {
        icon : '/images/vidio.svg',
        title : 'Videography',
        numberCourses : '38 Courses'
    },
    {
        icon : '/images/marketing.svg',
        title : 'Marketing',
        numberCourses : '38 Courses'
    },
    {
        icon : '/images/riting.svg',
        title : 'Content writing',
        numberCourses : '38 Courses'
    },
    {
        icon : '/images/finance.svg',
        title : 'Finance',
        numberCourses : '38 Courses'
    },
    {
        icon : '/images/Science.svg',
        title : 'Science',
        numberCourses : '38 Courses'
    }
    
]
const CategoriesCard = () => {
    return (
        // الحاوية للكروت
        <div className="grid grid-cols-4 max-sm:m-auto max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:px-0 gap-10 px-20">
            {/* map على انواع الكورسات*/}
            {CategoriesContent.map((item, index) => (
                // الكرت
                <div 
                    key={index}
                    className="flex max-sm:w-60 max-lg:w flex-col gap-2 items-center p-6 border border-gray-300 rounded-xl hover:shadow-xl hover:-translate-y-2 hover:border-2 cursor-pointer transition-all">
                        <img src={item.icon} alt="" />
                        <h2 className="font-bold text-lg">{item.title}</h2>
                        <p className="text-gray-500">{item.numberCourses}</p>
                </div>
            ))}
        </div>
    )
}

export default CategoriesCard
