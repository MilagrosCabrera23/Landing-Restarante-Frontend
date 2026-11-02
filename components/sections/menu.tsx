"use client";

import { useState } from "react";
import Image from "next/image";
import menuDataRaw from "../../data/menu.json";
import footerData from "../../data/footer.json";
import type { MenuCategory, MenuData } from "@/types/menu";

export default function Menu() {

  const { encabezado, categorias, platos } = menuDataRaw as MenuData;
  const [categoriaActiva, setCategoriaActiva] = useState<MenuCategory | "todos">("todos");
  const [paginaActual, setPaginaActual] = useState(1);
  const platosFiltrados = categoriaActiva === "todos"
    ? platos
    : platos.filter((plato) => plato.categoria === categoriaActiva);
  const platosPorPagina = 6;
  const totalPaginas = Math.ceil(platosFiltrados.length / platosPorPagina);
  const platosVisibles = categoriaActiva === "todos"
    ? platosFiltrados.slice(
        (paginaActual - 1) * platosPorPagina,
        paginaActual * platosPorPagina,
      )
    : platosFiltrados;
  const whatsappUrl = footerData.redesSociales.find(
    (red) => red.plataforma === "whatsapp",
  )?.url;

  if (!whatsappUrl) {
    throw new Error("No se encontró la URL de WhatsApp en data/footer.json");
  }

  const cambiarCategoria = (categoria: MenuCategory | "todos") => {
    setCategoriaActiva(categoria);
    setPaginaActual(1);
  };

  return (
    <section id="menu" className="w-full py-16 max-w-6xl mx-auto px-8 bg-luxury-ivory">
      <div className="space-y-16">

        <div className="text-center space-y-4">
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
            {encabezado.subtitulo}
          </span>
          <h2 className="text-3xl md:text-5xl text-luxury-charcoal leading-tight">
            {encabezado.titulo} 
          </h2>

          <div className="w-12 h-px bg-luxury-gold mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2" aria-label="Filtrar menú por categoría">
          <button
            type="button"
            onClick={() => cambiarCategoria("todos")}
            className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-bold transition-colors ${
              categoriaActiva === "todos"
                ? "bg-luxury-gold text-white"
                : "border border-luxury-gold/30 text-luxury-charcoal hover:bg-luxury-gold/10"
            }`}
          >
            Todo
          </button>
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              type="button"
              onClick={() => cambiarCategoria(categoria.id)}
              className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-bold transition-colors ${
                categoriaActiva === categoria.id
                  ? "bg-luxury-gold text-white"
                  : "border border-luxury-gold/30 text-luxury-charcoal hover:bg-luxury-gold/10"
              }`}
            >
              {categoria.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platosVisibles.map((item) => {
            const precio = new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
              maximumFractionDigits: 0,
            }).format(item.precio);

            return (
              <article key={item.id} className="group flex flex-col overflow-hidden rounded-sm bg-white shadow-sm">
                <div className="relative h-54 md:h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.imageSrc}
                    alt={item.titulo}
                    fill
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl font-bold italic text-luxury-gold">{item.titulo}</h3>
                    <span className="shrink-0 text-sm font-bold text-luxury-charcoal">{precio}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">{item.descripcion}</p>
                  <a
                    href={`${whatsappUrl}?text=${encodeURIComponent(
                      `Hola, me gustaría saber sobre ${item.titulo} y su disponibilidad.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex justify-center border border-luxury-gold/40 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-luxury-charcoal transition-colors hover:bg-luxury-gold hover:text-white"
                  >
                    Consultar disponibilidad
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {categoriaActiva === "todos" && totalPaginas > 1 && (
          <nav className="flex items-center justify-center gap-4" aria-label="Paginación del menú">
            <button
              type="button"
              onClick={() => setPaginaActual((pagina) => pagina - 1)}
              disabled={paginaActual === 1}
              className="border border-luxury-gold/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-luxury-charcoal transition-colors hover:bg-luxury-gold hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Anterior
            </button>
            <span className="text-sm text-luxury-charcoal" aria-live="polite">
              Página {paginaActual} de {totalPaginas}
            </span>
            <button
              type="button"
              onClick={() => setPaginaActual((pagina) => pagina + 1)}
              disabled={paginaActual === totalPaginas}
              className="border border-luxury-gold/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-luxury-charcoal transition-colors hover:bg-luxury-gold hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Siguiente
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
