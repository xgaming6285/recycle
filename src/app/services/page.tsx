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
      <main className="flex-grow">
        {/* Top Green Bar Title - Aligned with Header */}
        <div className="bg-[#1E4D2B] w-full h-[100px] flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wider pt-2">
            Услуги
          </h1>
        </div>

        {/* Hero / Split Image Section */}
        <div className="relative w-full flex-grow flex flex-col min-h-[calc(100vh-100px)]">
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
            <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-6 md:px-12">
                <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-xl max-w-5xl leading-tight">
                    Комплексни решения за управление на отпадъци.
                </h2>
                <p className="text-white/95 text-lg md:text-xl lg:text-2xl font-medium max-w-4xl drop-shadow-lg leading-relaxed">
                    Ние се грижим за всичко – от извозването и тегленето до рециклирането и документацията.
                </p>
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

