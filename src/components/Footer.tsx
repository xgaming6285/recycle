import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Бързи връзки</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Начало
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  За Нас
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacts"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Контакти
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacts"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Поискай Оферта
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакти</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white mt-1 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+359 888 123 456</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white mt-1 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>office@example.bg</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white mt-1 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>ул. Индустриална 12, София, България</span>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Правна информация</h3>
            <div className="space-y-2 text-gray-300">
              <p className="font-bold text-white">„Еко Ресурс Груп“ ЕООД</p>
              <p>ЕИК: BG206012345</p>
              <p>
                Притежаваме лиценз № 12-34567/2023 от РИОСВ за дейности с
                отпадъци.
              </p>
              <div className="pt-2 flex flex-col gap-1">
                <Link
                  href="#"
                  className="hover:text-white transition-colors underline"
                >
                  Политика за лични данни (GDPR)
                </Link>
                <Link
                  href="#"
                  className="hover:text-white transition-colors underline"
                >
                  Общи условия
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Logos & Copyright */}
        <div className="border-t border-gray-700 pt-3 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="relative w-18 h-18 -mt-2">
              <Image
                src="/images/iso9001.png"
                alt="ISO 9001"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <div className="relative w-14 h-14">
              <Image
                src="/images/iso14001.png"
                alt="ISO 14001"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <div className="relative w-24 h-12">
              <Image
                src="/images/riosv.png"
                alt="RIOSV"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>
          <p className="text-gray-400 text-sm text-center">
            © 2025 Еко Ресурс Груп ЕООД. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
