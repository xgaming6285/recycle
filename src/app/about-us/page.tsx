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
    </div>
  );
}

