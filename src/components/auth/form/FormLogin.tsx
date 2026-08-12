"use client";

import BtnPrimary from "@/components/btn/btnPrimary/BtnPrimary";
import { registerUser } from "@/redux/slices/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface inputData {
  name: string;
  type: string;
  placeHolder: string;
  label?: string;
  className?: string;
}

interface contentData {
  title: string;

  footerLink?: string;

  btnText: string;
}

interface formData {
  content: contentData;

  input: inputData[];
}
const Form = ({ content, input }: formData) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<any>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // هنا نرسل البيانات للـ Redux Store
    dispatch(registerUser(formData));
    console.log("البيانات المرسلة:", formData);
  };
  return (
    // الإطار العام: إضافة خلفية بيضاء وتنسيق الظل حسب التصميم
    <div className=" border border-gray-200 p-8 flex flex-col gap-6 rounded-3xl max-sm:p-5">
      <h1 className="text-3xl font-bold text-gray-900">{content.title}</h1>
      <div className="grid grid-cols-1 gap-6">
        {input.map((item, index) => (
          <div
            key={index}
            className={`flex ${item.type === "checkbox" ? "" : "flex-col"} gap-2 w-full`}
          >
            <input
              onChange={handleChange}
              id={item.name}
              name={item.name}
              type={item.type}
              placeholder={item.placeHolder}
              className={`border border-gray-300 p-3 rounded-xl outline-none hover:border-orange-500 focus:border-3 focus:border-orange-500 transition-all ${item.className}`}
            />
            {/* عرض الليبل (سيعمل مع كل الأنواع) */}
            {item.label && (
              <label
                htmlFor={item.name}
                className="text-sm font-medium text-gray-500 cursor-pointer hover:text-orange-500"
              >
                {item.label}
              </label>
            )}

          </div>
        ))}
      </div>

        <BtnPrimary btnContent={content.btnText} onClick={handleSubmit}/>
      {content.footerLink && (
        <p className=" text-left text-xl font-medium hover:text-orange-600 cursor-pointer transition-all">
          {content.footerLink}
        </p>
      )}
    </div>
  );
};

export default Form;
