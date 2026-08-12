import BtnPrimary from "../btn/btnPrimary/BtnPrimary"
import BtnSecondary from "../btn/btnSecondary/BtnSecondary"
// بيانات قسم للدعوة
interface JoinBannerData {
    image : string
    title : string
}
// النصوص و الصورة
const JoinBannerContent : JoinBannerData = {
    image : "/images/studentIcon.png",
    title : "Let’s Start With Academy LMS"
}
const JoinBanner = () => {
    return (
        // الاب الموجود فيه الخلفية
        <div className="bg-[url('/images/bg-student.png')] bg-cover bg-center bg-no-repeat flex justify-between items-center py-16 px-8 m-15 rounded-2xl max-lg:flex-col max-lg:gap-6">
            {/* القسم اليساري الموجود فيه الصورة و العبارة */}
            <div className="flex items-center gap-8 max-lg:flex-col max-lg:gap-4"> 
                <img src={JoinBannerContent.image} alt="" />
                <p className="font-medium text-lg">{JoinBannerContent.title}</p>
            </div>
            {/* قسم الازرار الموجودة على اليمين */}
            <div className="flex gap-3 max-lg:flex-col max-lg:gap-6">
                <BtnSecondary btnContent="I’m a student"/>
                <BtnPrimary btnContent="Become an Instructor"/>
            </div>
        </div>
    )
}

export default JoinBanner
