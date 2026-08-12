// بيانات القسم
interface stateData {
    label : string
    value : string
}
// النصوص الموجودة
const stateContent : stateData[] = [
    {
        label : "Active Students",
        value : "25K+"
    },
    {
        label : "Total Courses",
        value : "899"
    },
    {
        label : "Instructor",
        value : "158"
    },
    {
        label : "Satisfaction rate",
        value : "100%"
    },
]
const StateSection = () => {
    return (
        // الاب فيه الكروت
        <div className="grid grid-cols-4 gap-7 py-15 px-12 max-sm:px-5 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-items-center">
            {/* map على الموجود ضمن كل كرت */}
                {stateContent.map((state , index) => {
                    return (
                        // الكرت فيه العنوان و العبارة
                        <div key={index} className="bg-gray-100 rounded-2xl w-full max-sm:max-w-100 p-15 flex flex-col gap-3 items-center">
                            <h2 className="text-2xl text-orange-400 font-bold">{state.value}</h2>
                            <p className="font-bold">{state.label}</p>
                        </div>
                    )
                })}
            
        </div>
    )
}

export default StateSection
