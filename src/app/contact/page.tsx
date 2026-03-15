"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20 bg-[#f5e6d3] min-h-screen">
      <div className="container mx-auto px-6">

        {/* TITULO */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#3b2a1a]">
            Contáctanos
          </h1>

          <div className="w-24 h-1 bg-[#6f4e37] mx-auto mt-4 rounded"></div>

          <p className="text-gray-600 mt-4">
            ¿Tienes alguna pregunta? Nos encantará escucharte
          </p>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-14 mb-20">

          {/* FORMULARIO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-xl shadow-lg"
          >

            <h2 className="text-2xl font-semibold text-[#3b2a1a] mb-6">
              Envíanos un mensaje
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#6f4e37]"
              />

              <input
                type="email"
                placeholder="Tu email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#6f4e37]"
              />

              <textarea
                rows={5}
                placeholder="Tu mensaje"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#6f4e37]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#6f4e37] text-white px-6 py-3 rounded-lg hover:bg-[#5a3d2b] transition"
              >
                Enviar mensaje
              </button>

            </form>

          </motion.div>

          {/* INFORMACION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* DIRECCION */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">

              <MapPin className="text-[#6f4e37]" />

              <div>
                <h3 className="font-semibold text-[#3b2a1a] text-lg">
                  Dirección
                </h3>

                <p className="text-gray-600">
                  Av. Café 123, Puerto Vallarta, Jalisco
                </p>
              </div>

            </div>

            {/* TELEFONO */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">

              <Phone className="text-[#6f4e37]" />

              <div>
                <h3 className="font-semibold text-[#3b2a1a] text-lg">
                  Teléfono
                </h3>

                <p className="text-gray-600">
                  +52 322 44 33 729
                </p>
              </div>

            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">

              <Mail className="text-[#6f4e37]" />

              <div>
                <h3 className="font-semibold text-[#3b2a1a] text-lg">
                  Email
                </h3>

                <p className="text-gray-600">
                  JuanMejia@brewlabcafe.com
                </p>
              </div>

            </div>

            {/* HORARIO */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">

              <Clock className="text-[#6f4e37]" />

              <div>
                <h3 className="font-semibold text-[#3b2a1a] text-lg">
                  Horario
                </h3>

                <p className="text-gray-600">
                  Lunes - Viernes: 7:00 AM – 8:00 PM
                </p>

                <p className="text-gray-600">
                  Sábado - Domingo: 8:00 AM – 9:00 PM
                </p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* MAPA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-xl"
        >

          <iframe
            src="https://www.google.com/maps?q=Puerto%20Vallarta%20Jalisco&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

        </motion.div>

      </div>
    </section>
  );
}
