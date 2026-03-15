import { Instagram, Facebook, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3b2a1a] text-white pt-6 pb-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">

          {/* LOGO + DESCRIPCION */}
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <Coffee size={18} />
              <h3 className="text-lg font-bold">BrewLab Café</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Café de especialidad y repostería artesanal.
              Un lugar perfecto para disfrutar una buena taza
              de café y compartir momentos.
            </p>
          </div>

          {/* HORARIOS + REDES (lado derecho) */}
          <div className="text-right">
            <h4 className="text-base font-semibold mb-2">Horario</h4>
            <p className="text-gray-300 text-sm">Lun - Vie: 7:00–20:00</p>
            <p className="text-gray-300 text-sm mb-2">Sáb - Dom: 8:00–21:00</p>

            <div className="flex justify-end gap-2">
              <a href="#" className="bg-[#6f4e37] p-1.5 rounded hover:bg-[#5a3d2b]">
                <Instagram size={16} />
              </a>
              <a href="#" className="bg-[#6f4e37] p-1.5 rounded hover:bg-[#5a3d2b]">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-[#6f4e37] pt-2 text-center text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} BrewLab Café. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
