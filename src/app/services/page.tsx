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
        <div className="bg-[#1E4D2B] w-full h-[100px] flex items-center justify-center"></div>

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
                  className="object-contain lg:-ml-40 mt-16 hover:scale-105 transition-transform duration-300"
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

        {/* Law and Ecology Section */}
        <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            {/* Left Icon: Document */}
            <div className="shrink-0">
              <Image
                src="/images/document.png"
                alt="Лиценз и Документи"
                width={200}
                height={200}
                className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Center Text */}
            <div className="flex flex-col items-center text-center max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 tracking-tight">
                Законност и Екология
              </h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                Издаваме всички необходими документи за отчетност пред РИОСВ.
                Работим с лиценз за дейности с отпадъци.
              </p>
            </div>

            {/* Right Icon: Green Cycle */}
            <div className="shrink-0">
              <Image
                src="/images/green.png"
                alt="Екология"
                width={180}
                height={180}
                className="object-contain drop-shadow-xl hover:rotate-12 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Process Steps Section */}
        <div className="w-full py-20 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-[#589d40]/40 z-0 transform -translate-y-1/2" />

              {/* Step 1 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/4 group z-10">
                <div className="w-28 h-28 rounded-full bg-[#589d40] border-[6px] border-[#a1c293] ring-4 ring-[#a1c293] flex items-center justify-center text-white text-4xl font-bold shadow-lg mb-6 transition-transform duration-300 group-hover:scale-110">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 h-14 flex items-center justify-center leading-tight">
                  Обаждане /<br />
                  Заявка
                </h3>
                <div className="text-gray-600">
                  {/* Phone Icon */}
                  <svg
                    className="w-10 h-10 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/4 group z-10">
                <div className="w-28 h-28 rounded-full bg-[#589d40] border-[6px] border-[#a1c293] ring-4 ring-[#a1c293] flex items-center justify-center text-white text-4xl font-bold shadow-lg mb-6 transition-transform duration-300 group-hover:scale-110">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 h-14 flex items-center justify-center leading-tight">
                  Посещение и<br />
                  Оценка
                </h3>
                <div className="text-gray-600">
                  {/* Clipboard/Check Icon */}
                  <svg
                    className="w-10 h-10 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/4 group z-10">
                <div className="w-28 h-28 rounded-full bg-[#589d40] border-[6px] border-[#a1c293] ring-4 ring-[#a1c293] flex items-center justify-center text-white text-4xl font-bold shadow-lg mb-6 transition-transform duration-300 group-hover:scale-110">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 h-14 flex items-center justify-center leading-tight">
                  Извозване и<br />
                  Теглене
                </h3>
                <div className="flex gap-2 text-gray-600 items-center justify-center">
                  {/* Truck Icon */}
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1"
                    />
                  </svg>
                  {/* Weight Icon */}
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/4 group z-10">
                <div className="w-28 h-28 rounded-full bg-[#589d40] border-[6px] border-[#a1c293] ring-4 ring-[#a1c293] flex items-center justify-center text-white text-4xl font-bold shadow-lg mb-6 transition-transform duration-300 group-hover:scale-110">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 h-14 flex items-center justify-center leading-tight">
                  Плащане и<br />
                  Документи
                </h3>
                <div className="flex gap-2 text-gray-600 items-center justify-center">
                  {/* Payment/Money Icon */}
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {/* Document Icon */}
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
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
