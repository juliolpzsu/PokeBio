# PokeBio

Enciclopedia de biología de campo que trata a las especies Pokémon como si fuesen
organismos reales: nicho ecológico, presiones selectivas, posición trófica,
estrategia reproductiva y desarrollo ontogenético.

La tesis del proyecto es una distinción que la franquicia confunde y la web corrige
en cada ficha: lo que se llama *evolución* en Pokémon **no es evolución biológica**.
Es una metamorfosis ontogenética —un cambio dentro de un mismo individuo, como el de
una oruga a mariposa—. La evolución real actúa sobre poblaciones a lo largo de
generaciones, no sobre individuos. La cadena Caterpie → Metapod → Butterfree lo
ilustra literalmente, y la de Magikarp → Gyarados lo lleva al extremo: 10 kg de
detritívoro y 235 kg de depredador ápice son el mismo animal.

## Arquitectura

```
PokeAPI  ─────────▶  datos morfométricos duros  ─┐
(gratis, sin clave)   masa, talla, hábitat,      ├──▶  ficha renderizada
                      cadena, grupos huevo       │      (ISR, servida por CDN)
monografías estáticas ─▶ interpretación biológica ┘
(en el repositorio)
```

Dos fuentes que se combinan en la misma página:

1. **`src/lib/pokeapi.ts`** consulta PokeAPI y normaliza la respuesta en un
   `Especimen`: talla, masa, hábitat, plan corporal, grupos de compatibilidad
   reproductiva, tasa de captura y la cadena de desarrollo aplanada con las
   condiciones que disparan cada transición, todo traducido al castellano.
2. **`src/data/monografias.ts`** contiene las monografías biológicas redactadas,
   como contenido estático del repositorio. **No hay ninguna llamada a un modelo en
   tiempo de ejecución**: la ficha carga al instante, no cuesta nada por visita y no
   depende de que ningún servicio externo esté disponible.
3. **`src/app/especie/[nombre]/page.tsx`** compone las dos cosas en ocho secciones,
   junto al registro morfométrico y la serie ontogenética.

Las especies sin monografía siguen siendo navegables y muestran su registro
morfométrico completo; el catálogo las distingue con un punto verde y trae activado
por defecto el filtro «solo ejemplares con monografía redactada».

## Ejecutar en local

```bash
npm install
npm run dev
```

En `http://localhost:3000`. No hace falta configurar ninguna variable de entorno
ni ninguna clave de API.

## Estructura

| Ruta | Qué es |
| --- | --- |
| `/` | Catálogo de las 1025 especies, con buscador por nombre o número |
| `/especie/[nombre]` | Ficha biológica completa del ejemplar |

## Decisiones técnicas

- **Contenido estático en vez de generación en runtime.** Las monografías no
  cambian entre visitas, así que generarlas cada vez sería pagar repetidamente por
  un resultado idéntico. Viven en el repositorio, versionadas y revisables.
- **ISR con revalidación a 30 días.** Lo único que se revalida son los datos de
  PokeAPI. La página se sirve desde el CDN, no se recalcula en cada petición.
- **`generateStaticParams` devuelve `[]`.** Pre-renderizar las 1025 fichas en el
  build alargaría el despliegue sin necesidad; se generan bajo demanda y quedan
  cacheadas.
- **Caché de PokeAPI a 30 días.** Es un servicio público y gratuito y sus datos son
  inmutables. No tiene sentido volver a pedirlos en cada visita.
- **`color-scheme: only light`.** La paleta es de papel claro por diseño. Sin esa
  declaración, el modo oscuro automático de Chrome invierte la página entera y la
  deja ilegible; `light` a secas no basta como opt-out.

## Despliegue

Corre sobre Node 22 detrás de un servicio `systemd` en un servidor Debian propio, y
se publica al exterior mediante un túnel de Cloudflare. No usa plataformas de
hosting gestionado.

## Créditos

Datos de [PokeAPI](https://pokeapi.co). Proyecto académico sin ánimo de lucro;
Pokémon es marca registrada de Nintendo, Game Freak y The Pokémon Company.
