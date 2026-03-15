"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    name: "Espresso",
    description: "Café intenso preparado con granos seleccionados.",
    price: "$45 MXN",
    image: "/images/menu/espresso.jpg",
    category: "cafe",
  },
  {
    name: "Cappuccino",
    description: "Espresso con leche vaporizada y espuma cremosa.",
    price: "$60 MXN",
    image: "/images/menu/cappuccino.jpg",
    category: "cafe",
  },
  {
    name: "Latte",
    description: "Café suave con leche caliente y un toque cremoso.",
    price: "$65 MXN",
    image: "/images/menu/latte.jpg",
    category: "cafe",
  },
  {
    name: "Cold Brew",
    description: "Café frío preparado lentamente por 12 horas.",
    price: "$70 MXN",
    image: "/images/menu/coldbrew.jpg",
    category: "bebidas",
  },
  {
    name: "Cheesecake",
    description: "Postre cremoso con base de galleta.",
    price: "$80 MXN",
    image: "/images/menu/cheesecake.jpg",
    category: "postres",
  },
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "cafe", label: "Café" },
  { id: "bebidas", label: "Bebidas frías" },
  { id: "postres", label: "Postres" },
];

export default function MenuPage() {
  const [category, setCategory] = useState("all");

  const filteredItems =
    category === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-[#f5e6d3] to-[#efe2d0] min-h-screen">
      <div className="container mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-[#3b2a1a]">
            Nuestro Menú
          </h1>

          <div className="w-24 h-1 bg-[#6f4e37] mx-auto mt-4 rounded"></div>
        </div>

        {/* FILTROS MEJORADOS */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-6 py-2 rounded-full border font-medium transition-all duration-300
              
              ${
                category === cat.id
                  ? "bg-[#3b2a1a] text-white border-[#3b2a1a] shadow-lg scale-105"
                  : "bg-transparent text-[#3b2a1a] border-[#6f4e37] hover:bg-[#6f4e37] hover:text-white"
              }
              
              `}
            >
              {cat.label}
            </button>
          ))}

        </div>

        {/* TARJETAS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                {/* Imagen */}
                <div className="relative h-56 w-full overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>

                  {/* Categoría */}
                  <span className="absolute top-3 left-3 bg-[#3b2a1a]/90 text-white text-xs px-3 py-1 rounded-full capitalize">
                    {item.category}
                  </span>

                </div>

                {/* Contenido */}
                <div className="p-6">

                  <h2 className="text-xl font-semibold text-[#3b2a1a]">
                    {item.name}
                  </h2>

                  <p className="text-gray-600 mt-2 text-sm">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center mt-5">

                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-1 bg-[#6f4e37] text-white rounded-full text-sm font-bold"
                    >
                      {item.price}
                    </motion.span>

                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
