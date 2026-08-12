import { ReactNode } from 'react'
import BtnPrimary from '../btn/btnPrimary/BtnPrimary'
import { IoIosCheckmark } from 'react-icons/io'

interface InfoData {
    image: string
    title: string
    description: string
    list: string[]
}

const contentInfo: InfoData = {
    image: "/images/vector.png",
    title: "Grow Us Your Skill With LearnPress LMS",
    description: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.",
    list: ["Certification", "Certification", "Certification", "Certification"]
}

const InfoSection = () => {
    return (
        <div className='flex gap-50 items-center p-20 max-sm:p-10 max-sm:gap-10 max-lg:flex-col-reverse'>
            {/*الصورة*/}
            <div>
                <img src={contentInfo.image} alt=""/>
            </div>

            {/*القسم اليمين*/}
            <div className="flex flex-col gap-4 ">
                {/* العنوان و الوصف */}
                <h2 className="text-[45px] font-bold max-sm:text-[33px]">{contentInfo.title}</h2>
                <p className="text-gray-600">{contentInfo.description}</p>
                {/* القائمة */}
                <ul>
                    {contentInfo.list.map((item, index) => (
                        // الحاوية للايقونة و الجملة
                        <div key={index} className='flex items-center gap-2'>
                            <p><IoIosCheckmark className='text-3xl text-green-500' /></p>
                            <li  className="text-gray-700">{item}</li>
                        </div>
                    ))}
                </ul>
                    {/* الزر */}
                <div className='w-37'>
                    <BtnPrimary btnContent='Explorer course'/>
                </div>
            </div>
        </div>
    )
}

export default InfoSection