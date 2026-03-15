"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="pt-32 pb-20 bg-[#f5e6d3] min-h-screen">
      <div className="container mx-auto px-6">

        {/* TITULO */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#3b2a1a]">
            Sobre Nosotros
          </h1>

          <div className="w-24 h-1 bg-[#6f4e37] mx-auto mt-4 rounded"></div>
        </div>

        {/* HISTORIA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >

          <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/about/cafe.jpg"
              alt="BrewLab Café"
              fill
              className="object-cover"
            />
          </div>

          <div>

            <h2 className="text-3xl font-semibold text-[#3b2a1a] mb-6">
              La historia de BrewLab Café
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              En BrewLab Café creemos que cada taza de café cuenta una historia.
              Nuestro objetivo es ofrecer café de especialidad preparado con
              granos cuidadosamente seleccionados y técnicas que resaltan su
              sabor y aroma.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Creamos un espacio acogedor donde las personas pueden disfrutar
              de una buena conversación, trabajar o simplemente relajarse
              mientras disfrutan de una excelente bebida.
            </p>

            <ul className="space-y-3 text-[#3b2a1a]">
              <li className="flex items-center gap-3">☕ Café de especialidad</li>
              <li className="flex items-center gap-3">🌱 Ingredientes frescos</li>
              <li className="flex items-center gap-3">🤝 Ambiente acogedor</li>
            </ul>

          </div>

        </motion.div>

        {/* FILOSOFIA */}
        <div className="mb-24">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#3b2a1a]">
              Nuestra Filosofía
            </h2>

            <p className="text-gray-600 mt-3">
              Lo que hace especial a BrewLab Café
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >

            {/* CALIDAD */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              <div className="text-4xl mb-4">☕</div>

              <h3 className="text-xl font-semibold text-[#3b2a1a] mb-2">
                Calidad
              </h3>

              <p className="text-gray-600">
                Seleccionamos granos de café premium para ofrecer una experiencia
                auténtica en cada taza.
              </p>
            </div>

            {/* SUSTENTABILIDAD */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              <div className="text-4xl mb-4">🌱</div>

              <h3 className="text-xl font-semibold text-[#3b2a1a] mb-2">
                Sustentabilidad
              </h3>

              <p className="text-gray-600">
                Apoyamos productores locales y prácticas responsables con el medio ambiente.
              </p>
            </div>

            {/* COMUNIDAD */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              <div className="text-4xl mb-4">❤️</div>

              <h3 className="text-xl font-semibold text-[#3b2a1a] mb-2">
                Comunidad
              </h3>

              <p className="text-gray-600">
                Creamos un espacio donde las personas pueden reunirse,
                trabajar y disfrutar juntos del café.
              </p>
            </div>

          </motion.div>

        </div>

        {/* ESTADISTICAS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24 bg-[#6f4e37] text-white rounded-xl py-14 px-8"
        >

          <div className="grid md:grid-cols-3 text-center gap-10">

            <div>
              <h3 className="text-4xl font-bold">+10</h3>
              <p className="mt-2 text-lg">Años de experiencia</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">+500</h3>
              <p className="mt-2 text-lg">Clientes felices</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">+20</h3>
              <p className="mt-2 text-lg">Variedades de café</p>
            </div>

          </div>

        </motion.div>

        {/* VISITANOS */}
        <div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3b2a1a]">
              Visítanos
            </h2>

            <p className="text-gray-600 mt-3">
              Nos encantará prepararte una excelente taza de café
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* INFO */}
            <div className="space-y-6 text-[#3b2a1a]">

              <div>
                <h3 className="font-semibold text-xl">📍 Dirección</h3>
                <p className="text-gray-600">
                  Av. Café 123, Puerto Vallarta, Jalisco
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl">📞 Teléfono</h3>
                <p className="text-gray-600">
                  +52 322 44 33 729
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl">🕒 Horario</h3>
                <p className="text-gray-600">
                  Lunes - Viernes: 7:00 AM – 8:00 PM
                </p>
                <p className="text-gray-600">
                  Sábado - Domingo: 8:00 AM – 9:00 PM
                </p>
              </div>

            </div>

            {/* MAPA */}
            <div className="rounded-xl overflow-hidden shadow-xl">

              <iframe
                src="https://www.google.com/maps?q=Puerto%20Vallarta%20Jalisco&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
