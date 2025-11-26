import Image from "next/image";
import Header from "@/components/Header";

export default function AboutUs() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_us.png"
            alt="About Us Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Header Navigation */}
        <Header />

        {/* Hero Content */}
        <main className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Вашият надежден партньор{" "}
              <span className="block mt-2">в рециклирането.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium mb-10 leading-relaxed max-w-3xl">
              От малък пункт за изкупуване до лидер в управлението на отпадъци.
              Ние затваряме цикъла на суровините.
            </p>
          </div>
        </main>
      </div>

      {/* Principles Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#236b3e] text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16">
            Нашите Принципи
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Principle 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-[200px] h-[200px] mb-6">
                <Image
                  src="/images/cantar.png"
                  alt="Коректност"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#236b3e] text-3xl font-bold mb-4">
                Коректност
              </h3>
              <p className="text-gray-600 text-xl max-w-sm">
                Точно теглене на електронни везни и плащане на момента.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-[200px] h-[200px] mb-6">
                <Image
                  src="/images/listo.png"
                  alt="Екология"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#236b3e] text-3xl font-bold mb-4">
                Екология
              </h3>
              <p className="text-gray-600 text-xl max-w-sm">
                Намаляваме депонирането на отпадъци и пестим природни ресурси.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="flex flex-col items-center">
              <div className="relative w-[300px] h-[200px] mr-20 mt-6">
                <Image
                  src="/images/rush.png"
                  alt="Ефективност"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#236b3e] text-3xl font-bold mb-4">
                Ефективност
              </h3>
              <p className="text-gray-600 text-xl max-w-sm">
                Бърза логистика и гъвкави решения за вашия бизнес.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-16 px-6 bg-white overflow-hidden mb-20">
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#236b3e] transform -translate-x-1/2"></div>

          {/* Item 1: 2010 (Left) */}
          <div className="relative flex items-center justify-center mb-24">
            {/* Left Content */}
            <div className="w-1/2 pr-4 md:pr-12 text-right flex items-center justify-end">
              <span className="text-xl md:text-2xl text-gray-800 font-medium">
                Основаване на
                <br />
                фирмата
              </span>
              <div className="h-[3px] w-8 md:w-12 bg-[#236b3e] ml-4"></div>
            </div>
            {/* Center Circle */}
            <div className="absolute flex items-center justify-center w-20 h-20 bg-[#236b3e] rounded-full border-4 border-white z-10 shadow-sm">
              <span className="text-white text-xl font-bold">2010</span>
            </div>
            {/* Right Content (Empty) */}
            <div className="w-1/2 pl-4 md:pl-12"></div>
          </div>

          {/* Item 2: 2014 (Right) */}
          <div className="relative flex items-center justify-center mb-24">
            {/* Left Content (Empty) */}
            <div className="w-1/2 pr-4 md:pr-12"></div>
            {/* Center Circle */}
            <div className="absolute flex items-center justify-center w-20 h-20 bg-[#236b3e] rounded-full border-4 border-white z-10 shadow-sm">
              <span className="text-white text-xl font-bold">2014</span>
            </div>
            {/* Right Content */}
            <div className="w-1/2 pl-4 md:pl-12 text-left flex items-center justify-start">
              <div className="h-[3px] w-8 md:w-12 bg-[#236b3e] mr-4"></div>
              <span className="text-xl md:text-2xl text-gray-800 font-medium">
                Откриване на
                <br />
                собствена база
              </span>
            </div>
          </div>

          {/* Item 3: 2018 (Left) */}
          <div className="relative flex items-center justify-center mb-24">
            {/* Left Content */}
            <div className="w-1/2 pr-4 md:pr-12 text-right flex items-center justify-end">
              <span className="text-xl md:text-2xl text-gray-800 font-medium">
                Лицензиране
                <br />
                от РИОСВ
              </span>
              <div className="h-[3px] w-8 md:w-12 bg-[#236b3e] ml-4"></div>
            </div>
            {/* Center Circle */}
            <div className="absolute flex items-center justify-center w-20 h-20 bg-[#236b3e] rounded-full border-4 border-white z-10 shadow-sm">
              <span className="text-white text-xl font-bold">2018</span>
            </div>
            {/* Right Content (Empty) */}
            <div className="w-1/2 pl-4 md:pl-12"></div>
          </div>

          {/* Item 4: 2023 (Right) */}
          <div className="relative flex items-center justify-center">
            {/* Left Content (Empty) */}
            <div className="w-1/2 pr-4 md:pr-12"></div>
            {/* Center Circle */}
            <div className="absolute flex items-center justify-center w-20 h-20 bg-[#236b3e] rounded-full border-4 border-white z-10 shadow-sm">
              <span className="text-white text-xl font-bold">2023</span>
            </div>
            {/* Right Content */}
            <div className="w-1/2 pl-4 md:pl-12 text-left flex items-center justify-start">
              <div className="h-[3px] w-8 md:w-12 bg-[#236b3e] mr-4"></div>
              <span className="text-xl md:text-2xl text-gray-800 font-medium">
                Инвестиция в
                <br />
                модерен автопарк
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/factory.png"
            alt="Factory Background"
            fill
            className="object-cover"
          />
          {/* Dark green overlay */}
          <div className="absolute inset-0 bg-[#1a3d2a]/70" />
        </div>

        {/* Statistics Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
            {/* Stat 1: Tons Recycled */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                  15,000+
                </span>
                {/* Truck Icon */}
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  <Image
                    src="/images/last_1.png"
                    alt="Recycling Truck"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-white/90 text-xl md:text-2xl font-medium">
                Тонове рециклирани
                <br />
                годишно
              </p>
            </div>

            {/* Stat 2: Corporate Clients */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                  500+
                </span>
                {/* Handshake Icon */}
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  <Image
                    src="/images/last_2.png"
                    alt="Corporate Clients"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-white/90 text-xl md:text-2xl font-medium">
                Доволни корпоративни
                <br />
                клиенти
              </p>
            </div>

            {/* Stat 3: Trees Saved */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                  255,000+
                </span>
                {/* Tree Icon */}
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  <Image
                    src="/images/last_3.png"
                    alt="Trees Saved"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-white/90 text-xl md:text-2xl font-medium">
                Спасени дървета
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
