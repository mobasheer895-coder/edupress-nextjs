import Link from "next/link";
import { ReactNode } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";
// القائمة لكل قسم
interface FooterList {
    title : string
    items : string[]
}
// روابط التواصل مع الايقونة
interface SocialLink {
    icon: ReactNode;
    href: string;
}
// فسم التواصل
interface ContactData {
    title : string
    address: string;
    phone: string;
    email: string;
    socialIcons: SocialLink[];
}
// بيانات الفوتر كامل
interface FooterData {
    logo : string
    titleLogo : string
    description : string
    list : FooterList[]
    contact : ContactData
    copiright : string
}
// النصوص الموجودة
const FooterContent : FooterData = {
    logo : "/images/Isolation_Mode.png",
    titleLogo : "EduPress",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    list : [
        {
            title : "GET HELP",
            items : [
                'Contact Us',
                'Latest Articles',
                'FAQ'
            ]
        },
        {
            title : "PROGRAMS",
            items : [
                'Art & Design',
                'Business',
                'IT & Software',
                'Languages',
                'Programming'
            ]
        }
    ],
    contact : {
        title : 'CONTACT US',
        address : 'Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA',
        phone : 'Tel: + (123) 2500-567-8988',
        email : 'Mail: supportlms@gmail.com',
        socialIcons: [
        { icon: <FaFacebookF />, href: "https://facebook.com" },
        { icon: <FaPinterestP />, href: "https://pinterest.com" },
        { icon: <BsTwitterX />, href: "https://x.com" },
        { icon: <AiFillInstagram />, href: "https://instagram.com" },
        { icon: <FaYoutube />, href: "https://youtube.com" }
    ]
    },
    copiright : "Copyright © 2024 LearnPress LMS | Powered by ThimPress"
}
const Footer = () => {
    return (
        <footer className="bg-gray-100 p-15 flex flex-col gap-10">
        {/* الحاوية التي تحتوي على الأعمدة الثلاثة (اللوغو، القوائم، التواصل) */}
        <div className="flex flex-wra gap-5 max-lg:flex-col">
            {/* القسم الأول: اللوغو والوصف */}
            <div className="flex flex-col gap-5 w-96 max-sm:w-auto">
            <div className="flex gap-3">
                <img src={FooterContent.logo} alt="" />
                <h2>{FooterContent.titleLogo}</h2>
            </div>
            <p className="text-gray-600">{FooterContent.description}</p>
            </div>

            {/* map على قائمة الروابط */}
            {FooterContent.list.map((items, index) => (
            <div key={index} className="flex flex-col gap-5 w-60">
                <h3 className="text-3xl font-medium">{items.title}</h3>
                <ul className="flex flex-col gap-2">
                {items.items.map((item, i) => (
                    <li key={i} className="hover:text-orange-400 cursor-pointer text-gray-600 font-medium">
                    {item}
                    </li>
                ))}
                </ul>
            </div>
            ))}

            {/* قسم التواصل */}
            <div className="w-96 max-sm:w-auto flex flex-col gap-5">
                {/* العنوان الرئيسي و الموقع */}
                <h3 className="text-3xl font-medium">{FooterContent.contact.title}</h3>
                <p className="text-gray-600">{FooterContent.contact.address}</p>
                {/* الرقم و الايميل */}
            <div>
                <p className="text-gray-600">{FooterContent.contact.phone}</p>
                <p className="text-gray-600">{FooterContent.contact.email}</p>
            </div>
            {/* حاوية مواقع التواصل */}
            <div className="flex gap-2">
                {FooterContent.contact.socialIcons.map((item, j) => (
                    // رابط كل موقع
                <Link
                    key={j}
                    href={item.href}
                    className="hover:text-orange-400 hover:scale-125 cursor-pointer text-2xl transition-all"
                >
                    {item.icon}
                </Link>
                ))}
            </div>
            </div>
        </div>

        {/* قسم الكوبيرايت*/}
            <p className="text-gray-600 text-center">{FooterContent.copiright}</p>
        </footer>
    );
};

export default Footer
