import BtnPrimary from "../btn/btnPrimary/BtnPrimary"

// اعدادات البيانات
interface contentData {
    title : string
    subTitle : string
    btnContent : string
}
// محتوى البيانات
const content : contentData = {
    title : "Build Skills with Online Course",
    subTitle : "We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.",
    btnContent : "Posts comment"
}
const Hero = () => {
    return (
        // الأب فيه الخلفية في شاشات الكبيرة و الصغيرة
        <div className="bg-[url('/images/bg-hero.png')] max-lg:bg-[url('/images/bg-heroMobile.png')] bg-cover bg-center bg-no-repeat min-h-screen mt-16 flex items-center ">
            {/* العبارة الموجودة على اليسار */}
            <div className="px-20 w-150 flex flex-col items-start gap-9 max-sm:p-6 max-lg:text-center max-lg:items-center max-lg:w-full">
                <h1 className="text-5xl max-sm:text-4xl font-bold">{content.title}</h1>
                <div>
                    {/* الزر و العبارة الثانية */}
                    <p className="text-gray-600 mb-4">{content.subTitle}</p>
                    <BtnPrimary btnContent={content.btnContent}/>
                </div>
            </div>
        </div>
    )
}

export default Hero
