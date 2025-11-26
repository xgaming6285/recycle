"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState("");

  const materials = [
    { value: "cardboard", label: "Картон" },
    { value: "plastic", label: "Пластмаса" },
    { value: "mixed", label: "Смесени" },
  ];

  const getMaterialLabel = (value: string) => {
    const material = materials.find((m) => m.value === value);
    return material ? material.label : "Вид материал";
  };

  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Име/Фирма"
        className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#236B43] text-black placeholder-gray-700 placeholder:font-semibold"
      />

      <div className="flex flex-col sm:flex-row gap-4 relative z-20">
        {/* Custom Select */}
        <div className="w-full sm:w-[40%] relative">
          {isDropdownOpen && (
            <div 
              className="fixed inset-0 z-10 cursor-default" 
              onClick={() => setIsDropdownOpen(false)}
            ></div>
          )}
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-full px-6 py-3 border border-gray-300 rounded-full bg-white flex items-center justify-between focus:outline-none focus:border-[#236B43] relative z-20 ${
              selectedMaterial ? "text-black" : "text-gray-700 font-semibold"
            }`}
          >
            <span className="truncate">{getMaterialLabel(selectedMaterial)}</span>
            <svg
              className={`w-4 h-4 fill-current text-gray-700 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
            >
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-30 overflow-hidden">
              {materials.map((material) => (
                <div
                  key={material.value}
                  onClick={() => {
                    setSelectedMaterial(material.value);
                    setIsDropdownOpen(false);
                  }}
                  className="px-6 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 font-medium transition-colors first:pt-4 last:pb-4"
                >
                  {material.label}
                </div>
              ))}
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder="Приблизително количество (кг/тон)"
          className="w-full sm:w-[60%] px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#236B43] text-black placeholder-gray-700 placeholder:font-semibold relative z-10"
        />
      </div>

      <input
        type="text"
        placeholder="Населено място"
        className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#236B43] text-black placeholder-gray-700 placeholder:font-semibold"
      />

      <input
        type="tel"
        placeholder="Телефон за връзка"
        className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#236B43] text-black placeholder-gray-700 placeholder:font-semibold"
      />

      <button
        type="button"
        className="w-full px-6 py-3 border-2 border-black rounded-full flex items-center justify-center gap-2 text-black font-bold hover:bg-gray-50 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        Прикачи снимка на отпадъка
      </button>

      <button
        type="submit"
        className="w-full bg-[#34623b]! hover:bg-[#2a5030]! text-white font-bold py-3 px-4 rounded-full transition-colors"
      >
        Изпрати запитване
      </button>
    </form>
  );
}

