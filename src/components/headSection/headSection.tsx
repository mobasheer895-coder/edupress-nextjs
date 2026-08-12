import Link from "next/link";
// اعدادات البروبس
interface contentData {
    title: string;
    subTitle?: string;
    btnContent?: string;
    link?: string;
}
const HeadSection = ({title , subTitle , btnContent , link = ""}: contentData) => {
    return (
        <div className="flex justify-between items-center">
            {/* حاوية العنوان و جملة شرح */}
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold max-sm:text-xl">{title}</h1>
                {/*(subTitle props) تكون موجودة اذا كان موجود*/}
                {subTitle && <p className="text-gray-500 text-[12px]">{subTitle}</p>}
            </div>
            {/*(link props) يكون موجود اذا كان موجود*/}
        {link && (
            <Link
            href={link}
            className="p-4 border border-gray-500 rounded-4xl cursor-pointer transition-all hover:bg-[#FF782D] hover:-translate-y-2 hover:shadow-xl/40 hover:shadow-[#FF782D] hover:border-none hover:text-white max-sm:p-2"
        >
            {btnContent}
        </Link>
        )}
        </div>
    );
};

export default HeadSection;
