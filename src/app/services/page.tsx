import Header from "@/components/Header";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Main Content */}
      <main className="grow">
        {/* Top Green Bar Title - Aligned with Header */}
        <div className="bg-[#1E4D2B] w-full h-[100px] flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wider pt-2">
            Услуги
          </h1>
        </div>

        {/* Hero / Split Image Section */}
        <div className="relative w-full grow flex flex-col min-h-[calc(100vh-100px)]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/services.png"
              alt="Services Background"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Centered Text Content */}
          <div className="relative z-10 grow flex flex-col items-center justify-center text-center px-6 md:px-12">
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-xl max-w-5xl leading-tight">
              Комплексни решения за управление на отпадъци.
            </h2>
            <p className="text-white/95 text-lg md:text-xl lg:text-2xl font-medium max-w-4xl drop-shadow-lg leading-relaxed">
              Ние се грижим за всичко – от извозването и тегленето до
              рециклирането и документацията.
            </p>
          </div>
        </div>

        {/* Services Cards Section */}
        <div className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-340 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg py-8 px-10 flex flex-col lg:flex-row items-center text-center lg:text-left gap-10 hover:shadow-xl transition-shadow duration-300">
              <div className="shrink-0 -ml-20 lg:-ml-36 -mr-12">
                <Image
                  src="/images/gather.png"
                  alt="Изкупуване и Събиране"
                  width={450}
                  height={450}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center h-full">
                <h3 className="text-[#1E4D2B] text-2xl font-bold mb-4">
                  Изкупуване и Събиране
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Изкупуваме велпапе, хартия и пластмаса на конкурентни пазарни
                  цени. Плащане веднага след кантара.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg py-8 px-10 flex flex-col lg:flex-row items-center text-center lg:text-left gap-10 hover:shadow-xl transition-shadow duration-300">
              <div className="shrink-0 -ml-20 lg:-ml-30">
                <Image
                  src="/images/transport.png"
                  alt="Транспорт и Логистика"
                  width={380}
                  height={380}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center h-full">
                <h3 className="text-[#1E4D2B] text-2xl font-bold mb-4">
                  Транспорт и Логистика
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Разполагаме със собствен автопарк – от бусове за малки обеми
                  до камиони с контейнери за индустриални количества.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg py-8 px-10 flex flex-col lg:flex-row items-center text-center lg:text-left gap-10 hover:shadow-xl transition-shadow duration-300">
              <div className="shrink-0 -ml-20 lg:-ml-24">
                <Image
                  src="/images/press.png"
                  alt="Оборудване под наем"
                  width={340}
                  height={340}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center h-full">
                <h3 className="text-[#1E4D2B] text-2xl font-bold mb-4">
                  Оборудване под наем
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Предоставяме преси за балиране и специализирани контейнери, за
                  да оптимизирате мястото във вашия склад.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg py-8 px-10 flex flex-col lg:flex-row items-center text-center lg:text-left gap-10 hover:shadow-xl transition-shadow duration-300">
              <div className="shrink-0 -ml-20 lg:-ml-24">
                <Image
                  src="/images/destroy.png"
                  alt="Унищожаване на Архиви"
                  width={340}
                  height={340}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center h-full">
                <h3 className="text-[#1E4D2B] text-2xl font-bold mb-4">
                  Унищожаване на Архиви
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Сигурно унищожаване на поверителни документи с гаранция за
                  конфиденциалност и протокол.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer / Contact section reuse or simple footer? 
          The screenshot only shows the top part. 
          I'll leave the footer out for now or just end the page.
      */}
    </div>
  );
}
