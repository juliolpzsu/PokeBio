"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { arteOficial, capitalizar } from "@/lib/pokeapi";

const POR_TANDA = 60;

/** Normaliza para buscar sin tildes ni mayusculas. */
function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export default function Catalogo({
  especies,
  documentadas,
}: {
  especies: { nombre: string; id: number }[];
  documentadas: string[];
}) {
  const [consulta, setConsulta] = useState("");
  const [soloDocumentadas, setSoloDocumentadas] = useState(true);
  const [visibles, setVisibles] = useState(POR_TANDA);

  const conMonografia = useMemo(() => new Set(documentadas), [documentadas]);

  const filtradas = useMemo(() => {
    const base = soloDocumentadas
      ? especies.filter((e) => conMonografia.has(e.nombre))
      : especies;
    const q = normalizar(consulta.trim());
    if (!q) return base;
    // Un numero busca por entrada del catalogo; el texto, por nombre.
    if (/^\d+$/.test(q)) return base.filter((e) => String(e.id).includes(q));
    return base.filter((e) => normalizar(e.nombre).includes(q));
  }, [consulta, especies, soloDocumentadas, conMonografia]);

  const mostradas = filtradas.slice(0, visibles);

  return (
    <section>
      <div className="sticky top-0 z-10 -mx-6 mb-8 border-b border-regla/70 bg-papel/90 px-6 py-4 backdrop-blur">
        <label htmlFor="buscador" className="rotulo mb-2 block">
          Buscar especimen
        </label>
        <input
          id="buscador"
          type="search"
          value={consulta}
          onChange={(evento) => {
            setConsulta(evento.target.value);
            setVisibles(POR_TANDA);
          }}
          placeholder="Nombre o numero de catalogo (p. ej. bulbasaur, 025)"
          className="w-full rounded-sm border border-regla bg-papel-hondo/60 px-4 py-2.5 text-tinta outline-none transition placeholder:text-tinta-suave/70 focus:border-herbario focus:ring-2 focus:ring-herbario/25"
        />
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className="rotulo">
            {filtradas.length} {filtradas.length === 1 ? "registro" : "registros"}
          </p>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-tinta-suave">
            <input
              type="checkbox"
              checked={soloDocumentadas}
              onChange={(evento) => {
                setSoloDocumentadas(evento.target.checked);
                setVisibles(POR_TANDA);
              }}
              className="size-4 accent-[var(--herbario)]"
            />
            Solo ejemplares con monografia redactada
          </label>
        </div>
      </div>

      {filtradas.length === 0 ? (
        <p className="py-16 text-center text-tinta-suave">
          Ningun ejemplar coincide con esa busqueda.
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {mostradas.map((especie) => (
            <li key={especie.id}>
              <Link
                href={`/especie/${especie.nombre}`}
                className="group block rounded-sm p-2 transition hover:bg-papel-hondo/70"
              >
                <div className="relative aspect-square">
                  <Image
                    src={arteOficial(especie.id)}
                    alt={capitalizar(especie.nombre)}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                    className="lamina object-contain transition-transform duration-300 group-hover:scale-105"
                    // Solo la primera fila entra en la ventana inicial.
                    loading={especie.id <= 10 ? "eager" : "lazy"}
                  />
                </div>
                <p className="rotulo mt-3 flex items-center gap-1.5">
                  N.&ordm; {String(especie.id).padStart(4, "0")}
                  {conMonografia.has(especie.nombre) && (
                    <span
                      title="Monografia biologica redactada"
                      aria-label="Monografia biologica redactada"
                      className="inline-block size-1.5 rounded-full bg-herbario"
                    />
                  )}
                </p>
                <p className="font-display text-lg leading-tight font-semibold text-tinta">
                  {capitalizar(especie.nombre)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {visibles < filtradas.length && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibles((v) => v + POR_TANDA)}
            className="rounded-sm border border-herbario px-6 py-2.5 text-sm font-medium text-herbario transition hover:bg-herbario hover:text-papel"
          >
            Mostrar mas ejemplares
          </button>
        </div>
      )}
    </section>
  );
}
