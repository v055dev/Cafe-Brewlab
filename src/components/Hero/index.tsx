import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/cafe.jpg')" }}
    >
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container py-0">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="mx-auto max-w-[800px] text-center">

              <h1 className={`${playfair.className} mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl animate-fadeInUp`}>
                Donde cada taza cuenta una historia
              </h1>
            
              <p className="mx-auto mb-10 max-w-[600px] text-base text-gray-200 sm:text-lg md:text-xl animate-fadeInUp">
                En BrewLab creemos que el café es más que una bebida: es un
                momento para conectar, relajarse y disfrutar. Usamos granos de
                origen mexicano tostados cuidadosamente para lograr sabores
                únicos en cada taza.
              </p>

              <div className="flex items-center justify-center gap-4 animate-fadeInUp">

                <Link
                  href="/menu"
                  className="rounded-md bg-[#6f4e37] px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-[#3b2a1a]"
                >
                  Ver menú
                </Link>

                <Link
                  href="/contact"
                  className="rounded-md border border-[#d6a77a] px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-[#d6a77a] hover:text-[#3b2a1a]"

                >
                  Visítanos
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Background decorativo */}
      <div className="absolute right-0 top-0 -z-10 opacity-30">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="277" cy="63" r="225" fill="#C08457" opacity="0.3" />
          <circle cx="325" cy="302" r="180" fill="#8B5E3C" opacity="0.2" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 -z-10 opacity-30">
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="100" r="120" fill="#D6A77A" opacity="0.2" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
