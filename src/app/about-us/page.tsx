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
    </div>
  );
}
