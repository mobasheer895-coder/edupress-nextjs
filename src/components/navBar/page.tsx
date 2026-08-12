"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { BsList } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import BtnPrimary from "../btn/btnPrimary/BtnPrimary";
import { AiOutlineClose } from "react-icons/ai";
// اعدادات قائمة الصفحات التي في الناف
interface NavItem {
    link: string;
    content: string;
}
//Logoاعدادات ال
interface logoItem {
    icon: string;
    content: string;
}
// اعدادات صفحة تسجيل الدخول من الناف
interface login {
  link: string;
  contentLog: string;
  iconLog: ReactNode;
}
// محتوى تسجيل الدخول
const loginItem: login = {
    link: "/login",
    contentLog: "Login / Register",
    iconLog: (
        <FaSearch className="text-xl text-orange-500 hover:scale-125 flex items-center hover:bg-gray-50 transition-all cursor-pointer" />
    ),
    };
    //Logoمحتوى ال
const logoData: logoItem = {
    icon: "/images/Isolation_Mode.png",
    content: "edupress",
};
// محتوى قائمة الصفحات
    const navData: NavItem[] = [
    {
        link: "/",
        content: "Home",
    },
    {
        link: "/courses",
        content: "Courses",
    },
    {
        link: "/blog",
        content: "Blog",
    },
    {
        link: "/page",
        content: "Page",
    },
    {
        link: "/premiumTheme",
        content: "Premium Theme",
    },
    ];
    const NavBar = () => {
        
        // تفعيل الصفحة التي نكون ضمنها
    const [active, setActive] = useState("/");
    // فتح و اغلاق ايقونة القائمة عند الشاشات الصغيرة
    const [open, setOpen] = useState(false);
    
    return (
        <nav className="flex justify-between items-center fixed z-50 w-full h-15 px-9 bg-white">
            {/* اللوغو */}
        <div className="flex items-center gap-2.5">
            <img src={logoData.icon} alt="" />
            <h1 className="text-2xl">{logoData.content}</h1>
        </div>
        {/* القوائم */}
        <div className="h-full max-lg:hidden">
            <ul className="flex items-center h-full ">
            {navData.map((item, index) => {
                // التحقق اذا كان المسار الحالي هو الصفحة الموجودين فيها
                const isActive = active == item.link;
                return (
                <li
                    key={index}
                    
                    className={`px-4 h-full flex items-center cursor-pointer hover:bg-gray-100 hover:text-orange-500 transition-all duration-400 ${isActive ? "bg-gray-200 text-orange-400" : ""}`}
                >
                    {/* رابط الصفحة */}
                    <Link href={item.link} onClick={() => setActive(item.link)}>{item.content}</Link>
                </li>
                );
            })}
            </ul>
        </div>
        {/* صفحة تسجيل الدخول */}
        <div className="flex items-center gap-2.5 h-full max-lg:hidden">
            {/* الرابط */}
            <Link
            href={loginItem.link}
            onClick={() => setActive("/")}
            className="h-full flex items-center cursor-pointer hover:bg-gray-100 hover:text-orange-500 transition-all duration-400 p-2"
            >
            {loginItem.contentLog}
            </Link>
            {/* ايقونة البحث */}
            <p className=" border border-orange-500 p-2 rounded-full hover:border-2">
            {loginItem.iconLog}
            </p>
        </div>
        {/* ايقونة القائمة في الشاشات الصغيرة */}
        <div
            className="text-2xl hidden max-lg:block cursor-pointer"
            onClick={() => setOpen(!open)}
        >
            {/* تبديل بين ايقونة القائمة عندما تكون مغلقة و عندما تكون مفتوحة */}
            {open ? <AiOutlineClose /> : <BsList />}
        </div>

            {/* محتوا الايقونة في الشاشات الصغيرة */}
        <div
            className={`fixed top-16 right-0 w-50 bg-white shadow-lg transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "translate-x-full"}`}
        >
            {/* الايقونة */}
            <ul className="flex flex-col ">
            {navData.map((item, index) => {
                const isActive = active == item.link;
                return (
                <li
                    key={index}
                    onClick={() => setActive(item.link)}
                    className={`border-b border-gray-300 p-4 w-full flex items-center cursor-pointer hover:bg-gray-200 hover:text-orange-500 transition-all ${isActive ? "bg-gray-100 text-orange-400" : ""}`}
                >
                    <Link href={item.link} onClick={() => setOpen(false)}>
                    {item.content}
                    </Link>
                </li>
                );
            })}
            </ul>
            {/* البحث */}
            <div className="px-3 py-3 w-full">
            <form className="flex justify-between items-center border-b border-gray-300 py-2">
                <input
                type="text"
                placeholder="Search"
                className="w-full focus:outline-none py-1"
                />
                <FaSearch className="text-orange-500 text-lg cursor-pointer hover:scale-110 transition-all" />
            </form>
            </div>
            <div className="flex justify-center">
                {/* زر صفحة تسجيل الدخول */}
            <Link href="/login">
                <BtnPrimary
                btnContent="Login"
                onClick={() => setOpen(!open)}
                className="w-40 m-10"
                />
            </Link>
            </div>
        </div>
        </nav>
    );
};

export default NavBar;
