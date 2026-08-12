import BtnPrimary from "@/components/btn/btnPrimary/BtnPrimary";

interface inputData {
  name: string;
  type: string;
  placeHolder?: string;
  label?: string;
  className?: string;
}
interface contentData {
  title: string;
  subTitle?: string;
  footerLink?: string;
  btnText: string;
}

interface formData {
  content: contentData;
  input: inputData[];
}
const FormComment = ({ content, input }: formData) => {
  return (
    <div className="w-220 p-12 mb-30 flex flex-col gap-4 max-lg:w-auto">
      <h1 className="text-2xl font-medium">{content.title}</h1>
      <p className="text-gray-500">{content.subTitle}</p>

      <div className="grid grid-cols-2 gap-6 max-lg:flex max-lg:flex-col">
        {input.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 ${item.type === "textArea" || item.type === "checkbox" ? "col-span-2" : "col-span-1"}`}
          >
            {/* 1. رسم الحقل (Textarea أو Input) */}
            {item.type === "textArea" ? (
              <textarea
                id={item.name}
                placeholder={item.placeHolder}
                className="w-full border border-gray-300 p-3 rounded-xl outline-none hover:border-orange-500 focus:border-3 focus:border-orange-500 transition-all h-32 resize-none"
              />
            ) : item.type == "checkbox" ? (
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={item.name}
                  className="w-5 h-5 accent-orange-500"
                />
                <label
                  htmlFor={item.name}
                  className="text-sm text-gray-700 hover:text-orange-400 transition-all"
                >
                  {item.label}
                </label>
              </div>
            ) : (
              <input
                id={item.name}
                type={item.type}
                placeholder={item.placeHolder}
                className="w-full border border-gray-300 p-3 rounded-xl outline-none hover:border-orange-500 focus:border-3 focus:border-orange-500 transition-all"
              />
              
            )}

            {/* 2. رسم الليبل (يظهر فقط للحقول غير الـ checkbox) */}
          </div>
        ))}
      </div>
      <div className="mt-5">
        <BtnPrimary btnContent={content.btnText} />
      </div>
    </div>
  );
};

export default FormComment;
