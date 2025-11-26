import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

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

        {/* New Section: Equipment / Press & Container */}
        <div className="w-full py-20 px-4 md:px-8 lg:px-16 bg-white overflow-visible">
          <div className="max-w-[1500px] mx-auto">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E4D2B] mb-24 leading-tight text-center">
              Нуждаете се от преса или контейнер?
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 lg:ml-24">
              {/* Left Image */}
              <div className="w-full lg:w-1/2 flex justify-center overflow-visible">
                <Image
                  src="/images/machinee.png"
                  alt="Vertical Press"
                  width={1400}
                  height={1700}
                  className="object-contain lg:-ml-40 mt-16"
                />
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-1/2 flex flex-col text-left">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Вертикални преси
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Идеални за магазини и супермаркети.",
                      "Спестяват място и намаляват обема на отпадъците.",
                      "Лесни за управление и поддръжка.",
                      "Различни размери според нуждите ви.",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-700 text-lg"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-800 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Контейнери
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "За строителни отпадъци или големи обеми пластмаса.",
                      "Здрава конструкция и различни вместимости.",
                      "Удобни за товарене и транспортиране.",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-700 text-lg"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-800 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link
                    href="/#contacts"
                    className="inline-block bg-[#F47C20] hover:bg-[#d66b1a] text-white font-bold text-lg py-3 px-8 rounded-lg transition-colors duration-300 shadow-md"
                  >
                    Заявете оборудване
                  </Link>
                </div>
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
