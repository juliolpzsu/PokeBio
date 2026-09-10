import Catalogo from "@/components/Catalogo";
import { listarEspecies } from "@/lib/pokeapi";
import { ESPECIES_DOCUMENTADAS } from "@/data/monografias";

// El catalogo de especies no cambia entre generaciones: se prerenderiza y se
// revalida una vez al mes.
export const revalidate = 2592000;

export default async function Portada() {
  const especies = await listarEspecies();

  return (
    <>
      <section className="mb-12 max-w-3xl">
        <p className="rotulo">Tratado de historia natural</p>
        <h1 className="mt-3 font-display text-4xl leading-[1.1] font-semibold tracking-tight text-tinta sm:text-5xl">
          Que pasaria si estas criaturas fuesen{" "}
          <span className="text-herbario italic">organismos reales</span>?
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-tinta-suave">
          PokeBio toma los datos morfometricos de cada especie &mdash;masa, talla, habitat,
          compatibilidad reproductiva, cadena de desarrollo&mdash; y los somete al mismo
          analisis que un biologo aplicaria a un animal del planeta: nicho ecologico,
          presiones selectivas, posicion trofica y estrategia reproductiva.
        </p>
        <p className="mt-4 rounded-sm border-l-2 border-herbario bg-papel-hondo/50 px-4 py-3 text-sm leading-relaxed text-tinta-suave">
          <strong className="font-semibold text-tinta">Nota metodologica.</strong> Lo que la
          franquicia llama &laquo;evolucion&raquo; no lo es en sentido biologico: es una
          metamorfosis ontogenetica, un cambio dentro de un mismo individuo. La evolucion
          real actua sobre poblaciones a lo largo de generaciones. Cada ficha respeta esa
          distincion.
        </p>
      </section>

      <Catalogo especies={especies} documentadas={ESPECIES_DOCUMENTADAS} />
    </>
  );
}
