import BtnPrimary from "../btn/btnPrimary/BtnPrimary"
// بيانات النصوص
interface contentData {
    headTitle : string
    title : string
    description : string
}
// النصوص الموجودة
const content : contentData = {
    headTitle : "GET MORE POWER FROM",
    title : "LearnPress Add-Ons",
    description : "The next level of LearnPress - LMS WordPress Plugin. More Powerful, Flexible and Magical Inside."
}
const PromoSection = () => {
    return (
        // الاب مع الخلفية
        <div 
        className="bg-[url('/images/learnPress.png')] max-lg:bg-[url('/images/learnPress2.png')] bg-cover bg-center bg-no-repeat mx-15 rounded-2xl p-16 max-sm:p-7 max-sm:mx-0 max-sm:rounded-none max-sm:text-center">
            {/* القسم الموجود على اليسار */}
            <div className="flex flex-col gap-3.5 w-113 max-sm:w-auto">
                {/* قسم العنوان و العباة الاولى */}
                <div>
                    <p className="text-gray-600 mb-1.5">{content.headTitle}</p>
                    <h1 className="text-3xl font-bold max-sm:text-2xl">{content.title}</h1>
                </div>
                {/* العبارة الثانية و الزر */}
                <div>
                    <p className="text-gray-600 mb-4 text-[14px]">{content.description}</p>
                    <BtnPrimary btnContent="Explorer course"/>
                </div>
            </div>
        </div>
    )
}

export default PromoSection
