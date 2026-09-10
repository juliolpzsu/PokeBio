/**
 * Capa de acceso a PokeAPI.
 *
 * PokeAPI no requiere clave ni impone esperas, pero sus datos son practicamente
 * inmutables: cacheamos 30 dias para no castigar un servicio publico y gratuito
 * y para que la ficha se sirva desde el CDN en vez de recalcularse.
 */

const BASE = "https://pokeapi.co/api/v2";
const REVALIDAR = 60 * 60 * 24 * 30;

async function pedir<T>(ruta: string): Promise<T> {
  const res = await fetch(`${BASE}${ruta}`, { next: { revalidate: REVALIDAR } });
  if (!res.ok) throw new Error(`PokeAPI devolvio ${res.status} para ${ruta}`);
  return (await res.json()) as T;
}

/** Nombres de tipo en castellano. Evita una peticion extra por tipo y ficha. */
const TIPOS_ES: Record<string, string> = {
  normal: "Normal", fighting: "Lucha", flying: "Volador", poison: "Veneno",
  ground: "Tierra", rock: "Roca", bug: "Bicho", ghost: "Fantasma",
  steel: "Acero", fire: "Fuego", water: "Agua", grass: "Planta",
  electric: "Electrico", psychic: "Psiquico", ice: "Hielo", dragon: "Dragon",
  dark: "Siniestro", fairy: "Hada",
};

const ESTADISTICAS_ES: Record<string, string> = {
  hp: "Resistencia vital",
  attack: "Fuerza fisica",
  defense: "Blindaje corporal",
  "special-attack": "Potencia energetica",
  "special-defense": "Aislamiento energetico",
  speed: "Velocidad",
};

const HABITATS_ES: Record<string, string> = {
  cave: "Cavernicola", forest: "Forestal", grassland: "Pradera",
  mountain: "Montano", rare: "Relicto / raro", "rough-terrain": "Terreno abrupto",
  sea: "Marino", urban: "Urbano / sinantropico", "waters-edge": "Ribereno",
};

const CRECIMIENTO_ES: Record<string, string> = {
  slow: "Lento", medium: "Medio", fast: "Rapido",
  "medium-slow": "Medio-lento",
  "slow-then-very-fast": "Lento y luego muy rapido",
  "fast-then-very-slow": "Rapido y luego muy lento",
};

/** Planes corporales de PokeAPI, en terminologia morfologica. */
const FORMAS_ES: Record<string, string> = {
  ball: "Globoso", squiggle: "Vermiforme", fish: "Pisciforme", arms: "Braquiado",
  blob: "Amorfo", upright: "Bipedo erguido", legs: "Bipedo cursorial",
  quadruped: "Cuadrupedo", wings: "Alado", tentacles: "Tentaculado",
  heads: "Policefalo", humanoid: "Humanoide", "bug-wings": "Alado (pteros)",
  "armor": "Acorazado",
};

/** Grupos de compatibilidad reproductiva. */
const GRUPOS_ES: Record<string, string> = {
  monster: "Monstruo", water1: "Agua 1", water2: "Agua 2", water3: "Agua 3",
  bug: "Bicho", flying: "Volador", ground: "Campo", fairy: "Hada",
  plant: "Planta", humanshape: "Humanoide", mineral: "Mineral",
  indeterminate: "Amorfo", ditto: "Ditto", dragon: "Dragon",
  "no-eggs": "Sin descendencia conocida",
};

export type EtapaEvolutiva = {
  nombre: string;
  id: number;
  profundidad: number;
  /** Condiciones que disparan la transicion desde la etapa anterior. */
  condiciones: string[];
};

export type Especimen = {
  id: number;
  nombre: string;
  genero: string;
  tipos: string[];
  altura: number;
  peso: number;
  habitat: string | null;
  forma: string | null;
  esLegendario: boolean;
  esSingular: boolean;
  gruposHuevo: string[];
  tasaCaptura: number;
  ritmoCrecimiento: string;
  habilidades: { nombre: string; oculta: boolean }[];
  estadisticas: { nombre: string; valor: number }[];
  descripcionPokedex: string;
  cadena: EtapaEvolutiva[];
  arte: string;
};

type Nombrado = { name: string; url: string };

/** Extrae el id numerico del final de una URL de PokeAPI. */
function idDesdeUrl(url: string): number {
  const partes = url.split("/").filter(Boolean);
  return Number(partes[partes.length - 1]);
}

export function arteOficial(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export function capitalizar(texto: string): string {
  const limpio = texto.replace(/-/g, " ");
  return limpio.charAt(0).toUpperCase() + limpio.slice(1);
}

/** Catalogo completo de especies, para el buscador de la portada. */
export async function listarEspecies(): Promise<{ nombre: string; id: number }[]> {
  const datos = await pedir<{ results: Nombrado[] }>("/pokemon-species?limit=1100");
  return datos.results
    .map((r) => ({ nombre: r.name, id: idDesdeUrl(r.url) }))
    .filter((e) => e.id <= 1025)
    .sort((a, b) => a.id - b.id);
}

/** Traduce un `evolution_detail` de PokeAPI a condiciones legibles en castellano. */
function describirCondicion(d: Record<string, unknown>): string[] {
  const fuera: string[] = [];
  const disparador = (d.trigger as Nombrado | null)?.name;

  if (typeof d.min_level === "number") fuera.push(`alcanzar el nivel ${d.min_level}`);
  if (disparador === "trade") fuera.push("intercambio entre criadores");
  if (disparador === "use-item" && d.item) fuera.push(`exposicion a ${capitalizar((d.item as Nombrado).name)}`);
  if (typeof d.min_happiness === "number") fuera.push(`vinculo social alto (afinidad ${d.min_happiness}+)`);
  if (typeof d.min_affection === "number") fuera.push(`afecto sostenido (${d.min_affection}+)`);
  if (typeof d.min_beauty === "number") fuera.push(`condicion fisica optima (belleza ${d.min_beauty}+)`);
  if (d.time_of_day) fuera.push(`solo de ${d.time_of_day === "day" ? "dia" : "noche"}`);
  if (d.held_item) fuera.push(`portando ${capitalizar((d.held_item as Nombrado).name)}`);
  if (d.known_move) fuera.push(`dominando ${capitalizar((d.known_move as Nombrado).name)}`);
  if (d.known_move_type) fuera.push(`dominando un movimiento de tipo ${capitalizar((d.known_move_type as Nombrado).name)}`);
  if (d.location) fuera.push(`en ${capitalizar((d.location as Nombrado).name)}`);
  if (d.gender === 1) fuera.push("solo hembras");
  if (d.gender === 2) fuera.push("solo machos");
  if (d.needs_overworld_rain) fuera.push("bajo lluvia");

  if (fuera.length === 0 && disparador) fuera.push(capitalizar(disparador));
  return fuera;
}

type NodoCadena = {
  species: Nombrado;
  evolution_details: Record<string, unknown>[];
  evolves_to: NodoCadena[];
};

/** La cadena de PokeAPI es un arbol; la aplanamos conservando la profundidad. */
function aplanarCadena(nodo: NodoCadena, profundidad = 0): EtapaEvolutiva[] {
  const actual: EtapaEvolutiva = {
    nombre: nodo.species.name,
    id: idDesdeUrl(nodo.species.url),
    profundidad,
    condiciones: nodo.evolution_details.flatMap(describirCondicion),
  };
  return [actual, ...nodo.evolves_to.flatMap((h) => aplanarCadena(h, profundidad + 1))];
}

/** Prefiere el texto en castellano; cae al ingles si esa especie no lo tiene. */
function textoLocalizado<T extends { language: Nombrado }>(entradas: T[]): T | undefined {
  return (
    entradas.find((e) => e.language.name === "es") ??
    entradas.find((e) => e.language.name === "en")
  );
}

export async function obtenerEspecimen(nombre: string): Promise<Especimen> {
  const especie = await pedir<{
    id: number;
    names: { name: string; language: Nombrado }[];
    genera: { genus: string; language: Nombrado }[];
    flavor_text_entries: { flavor_text: string; language: Nombrado }[];
    habitat: Nombrado | null;
    shape: Nombrado | null;
    is_legendary: boolean;
    is_mythical: boolean;
    egg_groups: Nombrado[];
    capture_rate: number;
    growth_rate: Nombrado;
    evolution_chain: { url: string } | null;
  }>(`/pokemon-species/${nombre}`);

  // /pokemon usa el nombre de la forma por defecto, que puede diferir del nombre
  // de especie (deoxys -> deoxys-normal): resolvemos por id para no fallar.
  const [ejemplar, cadenaCruda] = await Promise.all([
    pedir<{
      height: number;
      weight: number;
      types: { type: Nombrado }[];
      abilities: { ability: Nombrado; is_hidden: boolean }[];
      stats: { base_stat: number; stat: Nombrado }[];
    }>(`/pokemon/${especie.id}`),
    especie.evolution_chain
      ? fetch(especie.evolution_chain.url, { next: { revalidate: REVALIDAR } }).then(
          (r) => (r.ok ? (r.json() as Promise<{ chain: NodoCadena }>) : null),
        )
      : Promise.resolve(null),
  ]);

  const descripcion = textoLocalizado(especie.flavor_text_entries)?.flavor_text ?? "";

  return {
    id: especie.id,
    nombre: textoLocalizado(especie.names)?.name ?? capitalizar(nombre),
    genero: textoLocalizado(especie.genera)?.genus ?? "Especie sin clasificar",
    tipos: ejemplar.types.map((t) => TIPOS_ES[t.type.name] ?? capitalizar(t.type.name)),
    altura: ejemplar.height / 10,
    peso: ejemplar.weight / 10,
    habitat: especie.habitat
      ? (HABITATS_ES[especie.habitat.name] ?? capitalizar(especie.habitat.name))
      : null,
    forma: especie.shape
      ? (FORMAS_ES[especie.shape.name] ?? capitalizar(especie.shape.name))
      : null,
    esLegendario: especie.is_legendary,
    esSingular: especie.is_mythical,
    gruposHuevo: especie.egg_groups.map((g) => GRUPOS_ES[g.name] ?? capitalizar(g.name)),
    tasaCaptura: especie.capture_rate,
    ritmoCrecimiento: CRECIMIENTO_ES[especie.growth_rate.name] ?? capitalizar(especie.growth_rate.name),
    habilidades: ejemplar.abilities.map((a) => ({
      nombre: capitalizar(a.ability.name),
      oculta: a.is_hidden,
    })),
    estadisticas: ejemplar.stats.map((s) => ({
      nombre: ESTADISTICAS_ES[s.stat.name] ?? capitalizar(s.stat.name),
      valor: s.base_stat,
    })),
    // Los textos de Pokedex traen saltos de linea y avances de pagina literales.
    descripcionPokedex: descripcion.replace(/[\n\f\r]/g, " ").trim(),
    cadena: cadenaCruda ? aplanarCadena(cadenaCruda.chain) : [],
    arte: arteOficial(especie.id),
  };
}
