import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { arteOficial, capitalizar, obtenerEspecimen, type Especimen } from "@/lib/pokeapi";
import { obtenerMonografia, type FichaBiologica } from "@/data/monografias";

// Solo se revalidan los datos de PokeAPI; la monografia es contenido estatico
// del repositorio y no depende de ningun servicio externo.
export const revalidate = 2592000;

// Nada se prerenderiza en el build (serian 1025 llamadas al modelo). Las paginas
// se generan bajo demanda la primera vez que alguien las pide.
export function generateStaticParams() {
  return [];
}

type Props = { params: Promise<{ nombre: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { nombre } = await params;
  try {
    const e = await obtenerEspecimen(nombre);
    return {
      title: `${e.nombre} - ${e.genero}`,
      description: `Ficha de biologia de campo de ${e.nombre}: nicho ecologico, adaptaciones, alimentacion y desarrollo ontogenetico.`,
    };
  } catch {
    return { title: "Especie no catalogada" };
  }
}

export default async function Ficha({ params }: Props) {
  const { nombre } = await params;

  let especimen: Especimen;
  try {
    especimen = await obtenerEspecimen(nombre);
  } catch {
    notFound();
  }

  const ficha = obtenerMonografia(nombre);

  return (
    <article className="surge">
      <Link href="/" className="rotulo transition hover:text-herbario">
        &larr; Volver al catalogo
      </Link>

      <Cabecera especimen={especimen} />

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="order-2 lg:order-1">
          {ficha ? (
            <Monografia ficha={ficha} />
          ) : (
            <div className="rounded-sm border border-regla bg-papel-hondo/50 p-6">
              <p className="rotulo">Ejemplar sin monografia</p>
              <p className="mt-2 leading-relaxed text-tinta-suave">
                Este volumen recoge el registro morfometrico de las 1025 especies
                catalogadas, pero la monografia biologica completa solo se ha redactado
                para una seleccion de ellas. Los datos de la derecha proceden
                integramente del registro de campo.
              </p>
              <Link
                href="/"
                className="mt-4 inline-block text-sm text-herbario underline underline-offset-4 hover:text-tinta"
              >
                Ver los ejemplares con monografia
              </Link>
            </div>
          )}
        </div>

        <aside className="order-1 space-y-8 lg:order-2">
          <Morfometria especimen={especimen} />
          <Perfil especimen={especimen} />
        </aside>
      </div>

      {especimen.cadena.length > 1 && <CadenaDesarrollo especimen={especimen} />}
    </article>
  );
}

function Cabecera({ especimen: e }: { especimen: Especimen }) {
  return (
    <header className="mt-6 grid items-center gap-8 border-b border-regla/70 pb-10 sm:grid-cols-[minmax(0,1fr)_240px]">
      <div>
        <p className="rotulo">
          Registro n.&ordm; {String(e.id).padStart(4, "0")}
          {e.esLegendario && " · Poblacion legendaria"}
          {e.esSingular && " · Avistamiento singular"}
        </p>
        <h1 className="mt-2 font-display text-5xl leading-[1.05] font-semibold tracking-tight">
          {e.nombre}
        </h1>
        <p className="mt-2 font-display text-xl text-herbario italic">{e.genero}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {e.tipos.map((tipo) => (
            <li
              key={tipo}
              className="rounded-full border border-herbario/45 bg-herbario/10 px-3 py-1 text-sm font-medium text-herbario"
            >
              {tipo}
            </li>
          ))}
        </ul>

        {e.descripcionPokedex && (
          <blockquote className="mt-6 max-w-xl border-l-2 border-regla pl-4 text-sm leading-relaxed text-tinta-suave italic">
            {e.descripcionPokedex}
            <footer className="rotulo mt-2 not-italic">Observacion de campo previa</footer>
          </blockquote>
        )}
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-[240px]">
        <Image
          src={e.arte}
          alt={`Lamina del especimen ${e.nombre}`}
          fill
          sizes="240px"
          className="lamina object-contain"
          priority
        />
      </div>
    </header>
  );
}

/** Bloque de texto con rotulo, la unidad de composicion de la monografia. */
function Seccion({
  rotulo,
  titulo,
  children,
}: {
  rotulo: string;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-regla/60 pt-6 first:border-t-0 first:pt-0">
      <p className="rotulo">{rotulo}</p>
      <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight">{titulo}</h2>
      <div className="mt-3 leading-relaxed text-tinta/90">{children}</div>
    </section>
  );
}

function Monografia({ ficha }: { ficha: FichaBiologica }) {
  return (
    <div className="space-y-8">
      <Seccion rotulo="I. Clasificacion" titulo="Posicion taxonomica">
        <p>{ficha.clasificacion}</p>
      </Seccion>

      <Seccion rotulo="II. Ecologia" titulo="Nicho y distribucion">
        <p className="capitular">{ficha.nicho}</p>
      </Seccion>

      <Seccion rotulo="III. Morfologia funcional" titulo="Adaptaciones">
        <dl className="space-y-4">
          {ficha.adaptaciones.map((a) => (
            <div key={a.rasgo} className="border-l-2 border-herbario/40 pl-4">
              <dt className="font-display text-lg font-semibold">{a.rasgo}</dt>
              <dd className="mt-1 text-tinta/90">{a.funcion}</dd>
            </div>
          ))}
        </dl>
      </Seccion>

      <Seccion rotulo="IV. Trofismo" titulo="Alimentacion y cadena trofica">
        <p>{ficha.alimentacion}</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <Recuadro rotulo="Nivel trofico">
            <p className="text-sm">{ficha.posicionTrofica}</p>
          </Recuadro>
          <Recuadro rotulo="Recursos">
            <Lista elementos={ficha.presas} />
          </Recuadro>
          <Recuadro rotulo="Amenazas">
            <Lista elementos={ficha.depredadores} />
          </Recuadro>
        </div>
      </Seccion>

      <Seccion rotulo="V. Ontogenia" titulo="El proceso mal llamado evolucion">
        <p>{ficha.desarrollo}</p>
      </Seccion>

      <Seccion rotulo="VI. Reproduccion" titulo="Estrategia reproductiva">
        <p>{ficha.reproduccion}</p>
      </Seccion>

      <Seccion rotulo="VII. Convergencia" titulo="Analogo terrestre">
        <p>{ficha.analogoTerrestre}</p>
      </Seccion>

      <Seccion rotulo="VIII. Conservacion" titulo="Estado de las poblaciones">
        <p>{ficha.conservacion}</p>
      </Seccion>
    </div>
  );
}

function Recuadro({ rotulo, children }: { rotulo: string; children: React.ReactNode }) {
  return (
    <div className="rounded-sm border border-regla bg-papel-hondo/40 p-4">
      <p className="rotulo mb-2">{rotulo}</p>
      {children}
    </div>
  );
}

function Lista({ elementos }: { elementos: string[] }) {
  return (
    <ul className="space-y-1 text-sm text-tinta/90">
      {elementos.map((elemento) => (
        <li key={elemento} className="flex gap-2">
          <span aria-hidden className="text-herbario">
            &middot;
          </span>
          <span>{elemento}</span>
        </li>
      ))}
    </ul>
  );
}

function Morfometria({ especimen: e }: { especimen: Especimen }) {
  // Los valores base de PokeAPI van de 1 a 255; normalizamos a 255 para la barra.
  const filas = [
    { etiqueta: "Talla", valor: `${e.altura.toFixed(2)} m` },
    { etiqueta: "Masa", valor: `${e.peso.toFixed(1)} kg` },
    { etiqueta: "Plan corporal", valor: e.forma ?? "No documentado" },
    { etiqueta: "Habitat", valor: e.habitat ?? "No documentado" },
    { etiqueta: "Desarrollo", valor: e.ritmoCrecimiento },
    { etiqueta: "Grupos reproductivos", valor: e.gruposHuevo.join(", ") || "Ninguno" },
  ];

  return (
    <div className="rounded-sm border border-regla bg-papel-hondo/40 p-5">
      <p className="rotulo">Registro morfometrico</p>
      <dl className="mt-3 divide-y divide-regla/60 text-sm">
        {filas.map((fila) => (
          <div key={fila.etiqueta} className="flex justify-between gap-4 py-2">
            <dt className="text-tinta-suave">{fila.etiqueta}</dt>
            <dd className="text-right font-medium">{fila.valor}</dd>
          </div>
        ))}
      </dl>

      <p className="rotulo mt-6">Perfil fisiologico</p>
      <ul className="mt-3 space-y-2.5">
        {e.estadisticas.map((estadistica) => (
          <li key={estadistica.nombre}>
            <div className="flex justify-between text-xs">
              <span className="text-tinta-suave">{estadistica.nombre}</span>
              <span className="font-medium tabular-nums">{estadistica.valor}</span>
            </div>
            <div className="mt-1 h-1 overflow-hidden rounded-full bg-regla/60">
              <div
                className="h-full rounded-full bg-herbario"
                style={{ width: `${Math.min(100, (estadistica.valor / 180) * 100)}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Perfil({ especimen: e }: { especimen: Especimen }) {
  // La tasa de captura de PokeAPI (3-255) es el mejor proxy publico de abundancia.
  const abundancia =
    e.tasaCaptura <= 15
      ? "Muy escaso o extremadamente esquivo"
      : e.tasaCaptura <= 75
        ? "Poco frecuente"
        : e.tasaCaptura <= 150
          ? "Frecuente"
          : "Abundante y facil de observar";

  return (
    <div className="rounded-sm border border-regla bg-papel-hondo/40 p-5">
      <p className="rotulo">Rasgos fisiologicos</p>
      <ul className="mt-3 space-y-2 text-sm">
        {e.habilidades.map((h) => (
          <li key={h.nombre} className="flex items-baseline justify-between gap-3">
            <span>{h.nombre}</span>
            {h.oculta && <span className="rotulo shrink-0">Recesivo</span>}
          </li>
        ))}
      </ul>

      <p className="rotulo mt-6">Abundancia estimada</p>
      <p className="mt-2 text-sm leading-relaxed text-tinta/90">
        {abundancia}{" "}
        <span className="text-tinta-suave">(indice de campo {e.tasaCaptura}/255)</span>
      </p>
    </div>
  );
}

function CadenaDesarrollo({ especimen: e }: { especimen: Especimen }) {
  return (
    <section className="mt-16 border-t border-regla/70 pt-10">
      <p className="rotulo">Serie ontogenetica</p>
      <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight">
        Estadios de desarrollo documentados
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-tinta-suave">
        Estadios sucesivos de un mismo individuo, no especies descendientes. Bajo cada
        uno figura el estimulo que precipita la metamorfosis.
      </p>

      <ol className="mt-8 flex flex-wrap items-start gap-x-2 gap-y-8">
        {e.cadena.map((etapa, indice) => (
          <li key={`${etapa.id}-${indice}`} className="flex items-start gap-2">
            {indice > 0 && (
              <span aria-hidden className="pt-14 text-2xl text-regla">
                &rarr;
              </span>
            )}
            <Link
              href={`/especie/${etapa.nombre}`}
              className={`group block w-32 rounded-sm p-2 text-center transition hover:bg-papel-hondo/70 ${
                etapa.id === e.id ? "bg-papel-hondo/70 ring-1 ring-herbario/40" : ""
              }`}
            >
              <div className="relative mx-auto aspect-square w-24">
                <Image
                  src={arteOficial(etapa.id)}
                  alt={capitalizar(etapa.nombre)}
                  fill
                  sizes="96px"
                  className="lamina object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 font-display text-sm font-semibold">
                {capitalizar(etapa.nombre)}
              </p>
              {etapa.condiciones.length > 0 && (
                <p className="mt-1 text-[0.7rem] leading-snug text-tinta-suave">
                  {etapa.condiciones.join(" + ")}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
