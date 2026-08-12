"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const NotFound = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  }
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      {/* رقم 404 */}
        <h1 className="text-8xl font-bold text-red-500">404</h1>
      
      {/* الرسالة النصية */}
      <h2 className="text-3xl font-semibold text-gray-700">
        This page could not be found.
      </h2>

      {/* زر العودة */}
      <button
        onClick={() => handleGoBack()}
        className="px-15 py-6 rounded-4xl bg-orange-500 cursor-pointer text-white transition-all hover:-translate-y-2 hover:shadow-xl/40 hover:shadow-orange-500"
      >
        back
      </button>
    </div>
  );
}

export default NotFound