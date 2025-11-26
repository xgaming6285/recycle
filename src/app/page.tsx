import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/first_background.png"
            alt="Recycling facility background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Header Navigation */}
        <Header />

        {/* Hero Content */}
        <main className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center px-6">
            {/* Main Headline */}
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Превърнете отпадъците в приходи.{" "}
              <span className="block mt-2">
                Лидер в рециклирането на картон и пластмаса.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium mb-10 leading-relaxed">
              Най-добри цени, собствен транспорт и
              <br />
              незабавно плащане.
            </p>

            {/* CTA Button */}
            <a
              href="#contacts"
              className="inline-block bg-[#05A44A] hover:bg-[#236B43] text-white text-lg font-bold px-[40px] py-[14px] rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ marginTop: "1px" }}
            >
              Поискай оферта
            </a>
          </div>
        </main>
      </div>

      {/* How We Work Section */}
      <section className="bg-[#FAFAFA] py-10 px-0 overflow-hidden" id="about">
        <div className="w-full">
          {/* Section Title */}
          <h2 className="text-[#236b3e] text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-6 -mb-12">
            Как работим?
          </h2>

          {/* Steps Container */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-0 lg:gap-0 md:-ml-10 lg:-ml-16">
            {/* Step 1 - Transport */}
            <div className="flex flex-col items-center text-center w-full md:w-auto md:-mr-[100px] lg:-mr-[140px]">
              <div className="w-[480px] h-[480px] md:w-[500px] md:h-[500px] lg:w-[560px] lg:h-[560px] relative">
                <Image
                  src="/images/emojie_11.png"
                  alt="Transport truck"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#236b3e] text-xl md:text-2xl font-bold -mt-32">
                Транспорт
              </h3>
              <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed">
                Ние идваме на вашето място.
              </p>
            </div>

            {/* Step 2 - Weighing */}
            <div className="flex flex-col items-center text-center w-full md:w-auto md:-mr-[100px] lg:-mr-[140px]">
              <div className="w-[480px] h-[480px] md:w-[500px] md:h-[500px] lg:w-[560px] lg:h-[560px] relative">
                <Image
                  src="/images/emojie_22.png"
                  alt="Digital scale"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#236b3e] text-xl md:text-2xl font-bold -mt-32">
                Теглене
              </h3>
              <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed">
                Прецизни цифрови везни.
              </p>
            </div>

            {/* Step 3 - Payment */}
            <div className="flex flex-col items-center text-center w-full md:w-auto md:-mr-[100px] lg:-mr-[140px]">
              <div className="w-[480px] h-[480px] md:w-[500px] md:h-[500px] lg:w-[560px] lg:h-[560px] relative">
                <Image
                  src="/images/emojie_33.png"
                  alt="Cash payment"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#236b3e] text-xl md:text-2xl font-bold -mt-32">
                Плащане
              </h3>
              <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed">
                Гарантирано плащане по
                <br />
                банков път или в брой.
              </p>
            </div>

            {/* Price Box */}
            <div className="flex flex-col bg-[#236B43] rounded-xl overflow-hidden shadow-lg w-full md:w-auto min-w-[380px] max-w-[450px] self-center md:self-center md:ml-24 lg:ml-40 md:mt-48">
              <div className="bg-[#b59161] px-10 py-6">
                <h4 className="text-white text-2xl font-bold text-center">
                  Актуални изкупни цени
                </h4>
              </div>
              <div className="px-10 py-8 space-y-4">
                <p className="text-white text-lg">
                  <span className="font-semibold">Картон:</span> 120 - 160
                  лв./тон
                </p>
                <p className="text-white text-lg">
                  <span className="font-semibold">Пластмаса:</span> 200 - 350
                  лв./тон
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cardboard & Paper + Industrial Solutions Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          {/* Cardboard and Paper Header */}
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-8">
            Картон и Хартия
          </h2>

          <h3 className="text-black text-xl md:text-2xl font-medium mb-6">
            Приети материали
          </h3>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1: Cardboard */}
            <div className="border border-gray-200 rounded-xl p-2 shadow-sm hover:shadow-md transition-shadow aspect-square flex flex-col">
              <div className="relative w-full flex-1 mb-2 overflow-hidden">
                <Image
                  src="/images/carton.png"
                  alt="Велпапе и Кашони"
                  fill
                  className="object-contain scale-150"
                />
              </div>
              <div className="flex items-center justify-between px-2 pb-2 shrink-0">
                <span className="font-bold text-lg text-gray-800">
                  Велпапе/Кашони
                </span>
                <div className="bg-[#236B43] rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="white"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2: Mixed Paper */}
            <div className="border border-gray-200 rounded-xl p-2 shadow-sm hover:shadow-md transition-shadow aspect-square flex flex-col">
              <div className="relative w-full flex-1 mb-2 overflow-hidden">
                <Image
                  src="/images/mixed_paper.png"
                  alt="Смесена хартия"
                  fill
                  className="object-contain scale-[1.75] translate-x-3"
                />
              </div>
              <div className="flex items-center justify-between px-2 pb-2 shrink-0">
                <span className="font-bold text-lg text-gray-800">
                  Смесена хартия
                </span>
                <div className="bg-[#236B43] rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="white"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 3: Archives */}
            <div className="border border-gray-200 rounded-xl p-2 shadow-sm hover:shadow-md transition-shadow aspect-square flex flex-col">
              <div className="relative w-full flex-1 mb-2 overflow-hidden">
                <Image
                  src="/images/archives.png"
                  alt="Архиви"
                  fill
                  className="object-contain scale-125"
                />
              </div>
              <div className="flex items-center justify-between px-2 pb-2 shrink-0">
                <span className="font-bold text-lg text-gray-800">Архиви</span>
                <div className="bg-[#236B43] rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="white"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements Box */}
          <div className="border border-gray-300 rounded-lg p-4 mb-16">
            <p className="text-gray-800 text-lg">
              <span className="font-bold">Изисквания:</span> Сухи, без остатъци
              от храна, сплескани.
            </p>
          </div>

          {/* Industrial Solutions Header */}
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-8">
            Индустриални Решения
          </h2>

          {/* Industrial Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Machine Image */}
            <div className="border border-gray-200 rounded-xl p-1 flex items-center justify-center shadow-sm h-[400px]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/machinee.png"
                  alt="Балираща преса"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Rental Info */}
            <div className="border border-gray-200 rounded-xl p-8 md:p-12 flex flex-col justify-center shadow-sm h-[400px]">
              <p className="text-gray-800 text-xl md:text-2xl mb-8 leading-relaxed">
                Наем на балиращи преси и контейнери за големи обекти.
                <br />
                <br />
                Свържете се с нас за оферта.
              </p>
              <a
                href="#contacts"
                className="inline-block w-fit border-2 border-gray-400 text-[#236b43] hover:border-[#236B43] hover:text-[#236B43] text-lg font-medium px-8 py-3 rounded-lg transition-colors"
              >
                Поискай Оферта
              </a>
            </div>
          </div>

          {/* Plastic Section */}
          <div className="mb-20 mt-16">
            <h2 className="text-black text-4xl md:text-5xl font-bold text-center mb-4">
              Пластмаса
            </h2>
            <p className="text-center text-lg md:text-xl text-gray-600 mb-10">
              Изкупуваме найлон (LDPE) и твърда пластмаса (HDPE/PP).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Nylon Item */}
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] md:h-[300px] rounded-2xl overflow-hidden mb-4 shadow-sm">
                  <Image
                    src="/images/nylon.png"
                    alt="Найлон (LDPE)"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xl md:text-2xl font-medium text-gray-800">
                  Найлон (LDPE)
                </p>
              </div>

              {/* Hard Plastic Item */}
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] md:h-[300px] rounded-2xl overflow-hidden mb-4 shadow-sm">
                  <Image
                    src="/images/pipes.png"
                    alt="Твърда пластмаса (HDPE/PP)"
                    fill
                    className="object-cover scale-x-110"
                  />
                </div>
                <p className="text-xl md:text-2xl font-medium text-gray-800">
                  Твърда пластмаса (HDPE/PP)
                </p>
              </div>
            </div>
          </div>

          {/* Transport and Logistics Section */}
          <div className="mt-24 mb-16">
            <h2 className="text-[#236b3e] text-3xl md:text-4xl font-bold text-center mb-4">
              Транспорт и Логистика
            </h2>
            <p className="text-center text-gray-600 text-lg md:text-xl mb-12">
              Надеждни логистични решения за извозване на материали
            </p>

            {/* Vehicles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Bus */}
              <div className="relative h-[250px] md:h-[300px] w-full group">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-8 border-l-8 border-[#1E4D2B] hidden md:block lg:border-t-12 lg:border-l-12"></div>
                <Image
                  src="/images/bus.png"
                  alt="Transport Bus"
                  fill
                  className="object-contain relative z-10"
                />
              </div>
              {/* Crane */}
              <div className="relative h-[250px] md:h-[300px] w-full">
                <Image
                  src="/images/crane.png"
                  alt="Truck with Crane"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Truck */}
              <div className="relative h-[250px] md:h-[300px] w-full">
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-8 border-r-8 border-[#b59161] hidden md:block lg:border-t-12 lg:border-r-12"></div>
                <Image
                  src="/images/truck.png"
                  alt="Truck with Container"
                  fill
                  className="object-contain relative z-10"
                />
              </div>
            </div>

            {/* Map and Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="relative w-full md:w-[400px] h-[250px] md:h-[300px]">
                <Image
                  src="/images/map.png"
                  alt="Service Map"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-6 max-w-md">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  Редовни графици за извозване.
                  <br />
                  Свържете се с нас за изготвяне на
                  <br />
                  индивидуален план.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-white" id="contacts">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-16">
            Контакти
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 mb-16">
            {/* Contact Form */}
            <div>
              <h3 className="text-[#236b3e] text-xl md:text-2xl font-bold mb-6">
                Поискай индивидуална оферта
              </h3>

              <ContactForm />
            </div>

            {/* Map */}
            <div className="h-full min-h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden relative shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186126.44345323135!2d23.203811332647668!3d42.69535828706274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia%2C%20Bulgaria!5e0!3m2!1sen!2sus!4v1652887444862!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Footer / Partners - Removed as it is replaced by global Footer */}
          {/* <div className="mt-32"> ... </div> */}
        </div>
      </section>
    </div>
  );
}
