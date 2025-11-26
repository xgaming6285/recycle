"use client";

import { useState, useRef, useEffect } from "react";

export default function ContactForm() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedImages, setSelectedImages] = useState<{ file: File; preview: string }[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    location: "",
    phone: "",
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const objectUrlsRef = useRef<string[]>([]);

  const materials = [
    { value: "cardboard", label: "Картон" },
    { value: "plastic", label: "Пластмаса" },
    { value: "mixed", label: "Смесени" },
  ];

  const getMaterialLabel = (value: string) => {
    const material = materials.find((m) => m.value === value);
    return material ? material.label : "Вид материал";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      // Limit max file size to roughly 500KB to avoid payload issues
      const MAX_WIDTH = 800;
      const reader = new FileReader();
      
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        
        img.onload = () => {
          const elem = document.createElement('canvas');
          const scaleFactor = MAX_WIDTH / img.width;
          
          if (scaleFactor < 1) {
            elem.width = MAX_WIDTH;
            elem.height = img.height * scaleFactor;
          } else {
            elem.width = img.width;
            elem.height = img.height;
          }

          const ctx = elem.getContext('2d');
          ctx?.drawImage(img, 0, 0, elem.width, elem.height);
          
          // Compress to JPEG with 0.7 quality
          resolve(elem.toDataURL('image/jpeg', 0.7));
        };
        img.onerror = (error) => reject(error);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });
    setIsSubmitting(true);

    if (!selectedMaterial) {
      setStatus({ type: 'error', message: 'Моля, изберете вид материал.' });
      setIsSubmitting(false);
      return;
    }

    try {
      // Convert images to Base64
      const base64Images = await Promise.all(
        selectedImages.map((img) => convertToBase64(img.file))
      );

      const response = await fetch('/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          material: selectedMaterial,
          images: base64Images,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Запитването е изпратено успешно!' });
        // Reset form
        setFormData({ name: "", quantity: "", location: "", phone: "" });
        setSelectedMaterial("");
        setSelectedImages([]);
      } else {
        setStatus({ type: 'error', message: data.error || 'Възникна грешка при изпращането.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Възникна грешка при свързване със сървъра.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file) => {
        const preview = URL.createObjectURL(file);
        objectUrlsRef.current.push(preview);
        return { file, preview };
      });
      setSelectedImages((prev) => [...prev, ...newFiles]);
    }
    // Reset input value to allow selecting the same file again if needed
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages((prev) => {
      const newImages = [...prev];
      const imageToRemove = newImages[index];
      
      // Clean up the specific URL being removed
      URL.revokeObjectURL(imageToRemove.preview);
      objectUrlsRef.current = objectUrlsRef.current.filter(url => url !== imageToRemove.preview);
      
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    // Cleanup only on unmount
    return () => {
      objectUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
      objectUrlsRef.current = [];
    };
  }, []);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Име/Фирма"
        className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#236B43] text-black placeholder-gray-700 placeholder:font-semibold"
        required
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
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          placeholder="Приблизително количество (кг/тон)"
          className="w-full sm:w-[60%] px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#236B43] text-black placeholder-gray-700 placeholder:font-semibold relative z-10"
          required
        />
      </div>

      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        placeholder="Населено място"
        className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#236B43] text-black placeholder-gray-700 placeholder:font-semibold"
        required
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Телефон за връзка"
        className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#236B43] text-black placeholder-gray-700 placeholder:font-semibold"
        required
      />

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        multiple
        accept="image/*"
      />

      {selectedImages.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedImages.map((image, index) => (
            <div key={index} className="relative w-20 h-20">
              <img
                src={image.preview}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 w-5 h-5 flex items-center justify-center text-xs shadow-md hover:bg-red-600 transition-colors"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={triggerFileInput}
        className="w-full px-6 py-3 border-2 border-black rounded-full flex items-center justify-center gap-2 text-black font-bold hover:bg-gray-50 transition-colors cursor-pointer"
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
        disabled={isSubmitting}
        className={`w-full bg-[#34623b]! hover:bg-[#2a5030]! text-white font-bold py-3 px-4 rounded-full transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? 'Изпращане...' : 'Изпрати запитване'}
      </button>

      {status.message && (
        <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {status.message}
        </div>
      )}
    </form>
  );
}

