/**
 * Monografias biologicas redactadas para PokeBio.
 *
 * Se sirven como contenido estatico: no hay llamada a ningun modelo en tiempo de
 * ejecucion, asi que la ficha carga al instante, no cuesta nada por visita y no
 * depende de que un servicio externo este disponible.
 *
 * Cada texto interpreta los datos que PokeAPI ya aporta (masa, talla, habitat,
 * cadena de desarrollo, grupos de compatibilidad) con criterio biologico. La
 * distincion que vertebra el proyecto se respeta en todas: lo que la franquicia
 * llama "evolucion" es metamorfosis ontogenetica, no evolucion darwiniana.
 */

export type FichaBiologica = {
  clasificacion: string;
  nicho: string;
  adaptaciones: { rasgo: string; funcion: string }[];
  alimentacion: string;
  posicionTrofica: string;
  presas: string[];
  depredadores: string[];
  desarrollo: string;
  reproduccion: string;
  analogoTerrestre: string;
  conservacion: string;
};

export const MONOGRAFIAS: Record<string, FichaBiologica> = {
  bulbasaur: {
    clasificacion:
      "Chlorosauria symbiotica, orden Chlorosauria. La clasificación es problemática por definición: el ejemplar es un consorcio de dos organismos, un vertebrado cuadrúpedo sauriomorfo y un vegetal vascular alojado en una cripta dorsal. La taxonomía al uso, construida sobre individuos, no acomoda bien un cuerpo que es dos linajes a la vez.",
    nicho:
      "Ocupa praderas templadas con insolación alta y suelos húmedos, donde puede alternar entre forrajeo y fotosíntesis según la disponibilidad de luz. Con 70 cm y 6,9 kg es un animal de sotobosque bajo: demasiado pequeño para competir con grandes herbívoros y demasiado lento para huir en campo abierto, así que explota el estrato que otros desatienden. Su verdadera competencia no son otros animales, sino las plantas que le disputan la luz.",
    adaptaciones: [
      {
        rasgo: "Bulbo dorsal fotosintético",
        funcion:
          "El órgano vegetal implantado en el lomo fija carbono y aporta una fracción del presupuesto energético diario. La ventaja selectiva es la independencia parcial del alimento: en periodos de escasez el ejemplar reduce su tasa metabólica y subsiste con la producción del bulbo, algo vedado a un heterótrofo estricto.",
      },
      {
        rasgo: "Postura cuadrúpeda de centro de gravedad bajo",
        funcion:
          "Cuatro extremidades cortas y un tronco ancho reparten los 6,9 kg de masa y estabilizan un cuerpo que carga peso muerto en el dorso. Es la solución mecánica esperable en un animal que transporta permanentemente una estructura pesada y elevada.",
      },
      {
        rasgo: "Zarcillos prensiles proyectables",
        funcion:
          "Extensiones vegetales que emergen del bulbo y funcionan como apéndices de manipulación y anclaje. Compensan la ausencia de manos: permiten sujetar sustrato, trepar y capturar recursos sin que el animal deba erguirse y perder estabilidad.",
      },
      {
        rasgo: "Secreciones tóxicas de origen vegetal",
        funcion:
          "El componente vegetal sintetiza metabolitos secundarios que el animal moviliza como defensa química. Es la ruta clásica de la defensa en organismos lentos y pequeños: si no puedes huir, hazte incomestible.",
      },
    ],
    alimentacion:
      "Régimen mixotrófico, poco frecuente en vertebrados. Una parte del carbono procede de la fotosíntesis del bulbo y el resto de un forrajeo omnívoro oportunista, sesgado hacia materia vegetal blanda, brotes e invertebrados de suelo. Esa doble vía explica su ritmo de desarrollo medio-lento: la fotosíntesis aporta energía barata pero escasa, insuficiente para sostener un crecimiento rápido.",
    posicionTrofica: "Productor primario facultativo y consumidor primario",
    presas: [
      "Brotes tiernos y tubérculos",
      "Invertebrados del mantillo",
      "Luz solar directa, vía el bulbo",
      "Nutrientes minerales del suelo",
    ],
    depredadores: [
      "Depredadores aéreos de tamaño medio",
      "Carnívoros terrestres de emboscada",
      "Herbívoros grandes, que dañan el bulbo por competencia",
    ],
    desarrollo:
      "La transición a la forma siguiente no es evolución: es una metamorfosis ontogenética que ocurre dentro de un mismo individuo, comparable a la de un anfibio, no a la aparición de una especie nueva. El desencadenante documentado es la madurez somática, que en el registro de campo se anota como «alcanzar el nivel 16». El mecanismo plausible es endocrino: el bulbo, al agotar su capacidad de almacenamiento, libera un pulso hormonal que reorganiza el desarrollo del hospedador y abre la fase de floración. La evolución biológica real, en cambio, actuaría sobre la población a lo largo de generaciones —por ejemplo, seleccionando bulbos cada vez más eficientes—, y eso es un proceso distinto que ningún individuo experimenta en vida.",
    reproduccion:
      "Los grupos de compatibilidad Monstruo y Planta apuntan a una estrategia doble: reproducción sexual del componente animal y propagación vegetativa del simbionte, que se transmitiría a la descendencia por inoculación temprana. Con una tasa de captura de 45 y un desarrollo medio-lento, el perfil es de estratega de la K moderado: pocas crías, inversión parental apreciable y madurez tardía.",
    analogoTerrestre:
      "La babosa marina Elysia chlorotica, que secuestra cloroplastos de las algas que consume y fotosintetiza durante meses; y el líquen, donde hongo y alga forman una unidad funcional inseparable. Bulbasaur combina ambas ideas: cleptoplastia llevada al plano de un vertebrado y simbiosis obligada de dos linajes en un solo cuerpo.",
    conservacion:
      "Poblaciones estables pero muy dependientes de praderas bien iluminadas y no compactadas. La conversión de pradera en cultivo intensivo y la contaminación lumínica nocturna, que desajusta el ciclo fotosintético del bulbo, son las dos presiones más serias.",
  },

  ivysaur: {
    clasificacion:
      "Chlorosauria symbiotica, estadio floral intermedio. Comparte especie con la forma basal: la diferencia es de fase del desarrollo, no de linaje. La yema dorsal ha sustituido al bulbo cerrado y aún no se ha abierto.",
    nicho:
      "Ocupa el mismo hábitat de pradera que la forma basal, pero desplazado hacia claros más soleados: la yema en desarrollo impone una demanda de luz que un individuo joven no tenía. Con 13 kg —casi el doble de masa— gana capacidad de competir por el espacio y pierde la posibilidad de esconderse, un intercambio típico del estadio intermedio.",
    adaptaciones: [
      {
        rasgo: "Yema floral dorsal en desarrollo",
        funcion:
          "El bulbo cerrado se ha diferenciado en una estructura reproductiva del simbionte. Consume una fracción creciente del presupuesto energético, lo que obliga al hospedador a aumentar la ingesta y a buscar exposición solar prolongada.",
      },
      {
        rasgo: "Reforzamiento del esqueleto axial",
        funcion:
          "El aumento de masa dorsal exige una columna y una cintura escapular más robustas. La respuesta anatómica —patas más gruesas y tronco más bajo— es la que cabe esperar cuando la carga se duplica sin que cambie el plan corporal.",
      },
      {
        rasgo: "Letargo heliotrópico",
        funcion:
          "Periodos prolongados de inmovilidad orientados al sol, que maximizan la captación lumínica de la yema. Es una conducta costosa en riesgo de depredación, compensada por la aceleración del desarrollo floral.",
      },
    ],
    alimentacion:
      "Mixotrofia sesgada hacia la heterotrofia: la yema es un sumidero de recursos, no una fuente neta, de modo que el animal debe forrajear más que en la fase anterior. Aumenta la ingesta de materia vegetal rica en nutrientes minerales, especialmente fósforo y potasio, que la floración demanda.",
    posicionTrofica: "Consumidor primario con aporte fotosintético decreciente",
    presas: [
      "Vegetación herbácea rica en minerales",
      "Invertebrados de suelo",
      "Agua freática y nutrientes edáficos",
    ],
    depredadores: [
      "Carnívoros de emboscada, favorecidos por el letargo heliotrópico",
      "Aves de presa de porte medio",
    ],
    desarrollo:
      "Estadio intermedio de una serie ontogenética de tres fases, otra vez dentro del mismo individuo. La apertura de la yema y el paso a la forma adulta se disparan por acumulación suficiente de reservas, registrada en campo como «alcanzar el nivel 32». Conviene insistir: un individuo no evoluciona. Lo que aquí ocurre es desarrollo, igual que un renacuajo que se convierte en rana sigue siendo el mismo animal y la misma especie.",
    reproduccion:
      "Fase prerreproductiva. El animal es somáticamente maduro pero el simbionte aún no ha florecido, de modo que la propagación vegetativa no es posible todavía. Esa asincronía entre la madurez del hospedador y la del simbionte es el rasgo más interesante del estadio.",
    analogoTerrestre:
      "Las plantas monocárpicas como el agave, que acumulan reservas durante años antes de una única floración masiva. La yema de Ivysaur sigue esa misma lógica de inversión diferida, con la diferencia de que el «almacén» es un animal que se desplaza.",
    conservacion:
      "Más vulnerable que las fases contiguas: el letargo heliotrópico lo expone y todavía carece del porte defensivo del adulto. Es el cuello de botella demográfico de la serie.",
  },

  venusaur: {
    clasificacion:
      "Chlorosauria symbiotica, estadio floral maduro. La corola dorsal completamente desplegada marca la fase terminal del desarrollo y el inicio de la capacidad de propagación vegetativa.",
    nicho:
      "Con 2 metros y 100 kg pasa a ser un megaherbívoro de pradera, con pocos competidores directos y un papel de ingeniero del ecosistema: al desplazarse abre corredores en la vegetación densa y dispersa polen y semillas a escala del paisaje. La corola lo convierte además en un recurso para polinizadores, de modo que el ejemplar deja de ser solo un consumidor y pasa a estructurar la comunidad a su alrededor.",
    adaptaciones: [
      {
        rasgo: "Corola dorsal desplegada",
        funcion:
          "Órgano reproductivo del simbionte y, a la vez, colector solar de gran superficie. Restituye la autonomía trófica que el estadio intermedio había perdido: la producción fotosintética vuelve a ser un aporte neto significativo.",
      },
      {
        rasgo: "Emisión de compuestos volátiles aromáticos",
        funcion:
          "La corola libera atrayentes que reclutan polinizadores. Es una adaptación del simbionte que el hospedador tolera pese a delatar su posición, señal de que el beneficio reproductivo compensa el coste en riesgo.",
      },
      {
        rasgo: "Porte macizo y dermis coriácea",
        funcion:
          "Cien kilos y una piel gruesa hacen del adulto una presa poco rentable. La estrategia defensiva se ha desplazado de la toxicidad y el ocultamiento al tamaño puro, que es la vía habitual en herbívoros que alcanzan gran masa.",
      },
      {
        rasgo: "Termorregulación asistida por el simbionte",
        funcion:
          "La transpiración de la corola disipa calor y amortigua las oscilaciones térmicas del cuerpo. Permite mantener actividad en las horas centrales del día, cuando otros herbívoros de su talla deben refugiarse.",
      },
    ],
    alimentacion:
      "Herbivoría de gran volumen complementada por una fotosíntesis ya sustancial. El tránsito digestivo es lento y probablemente fermentativo, lo que encaja con un animal macizo, de movimientos pausados y metabolismo eficiente más que veloz.",
    posicionTrofica: "Consumidor primario dominante y productor primario parcial",
    presas: [
      "Biomasa herbácea y arbustiva en gran cantidad",
      "Luz solar, vía la corola",
      "Agua y minerales del suelo",
    ],
    depredadores: [
      "Prácticamente ninguno en estado adulto: la masa corporal lo excluye del espectro de presas habitual",
      "Carroñeros y parásitos, que sí lo explotan",
    ],
    desarrollo:
      "Fase terminal de la serie ontogenética. Aquí conviene cerrar el argumento: las tres formas de esta cadena son un único individuo en tres momentos de su vida, no tres especies emparentadas. Un árbol filogenético las situaría en el mismo punto. Lo que sí sería evolución biológica es que, a lo largo de generaciones, la población desplazase la edad de floración o el tamaño de la corola por selección natural: eso ocurre entre individuos, nunca dentro de uno.",
    reproduccion:
      "Doble vía plenamente operativa. El componente animal se reproduce sexualmente dentro de los grupos Monstruo y Planta; el simbionte lo hace por polinización cruzada mediada por la corola. La tasa de captura de 45 y el desarrollo medio-lento confirman un estratega de la K: longevidad alta, pocas crías y fuerte inversión por descendiente.",
    analogoTerrestre:
      "El elefante africano como ingeniero de ecosistemas que abre y mantiene la sabana con su tránsito, combinado con la Rafflesia por el porte y la función atrayente de la flor. Venusaur ocupa simultáneamente los dos papeles: el del gran herbívoro que modela el paisaje y el de la planta que recluta polinizadores.",
    conservacion:
      "Vulnerable por la vía demográfica clásica de los grandes herbívoros: madurez tardía, natalidad baja y necesidad de territorios amplios y continuos. La fragmentación del hábitat le afecta más que la depredación, que a este tamaño es casi irrelevante.",
  },

  caterpie: {
    clasificacion:
      "Lepidopteroidea vermiformis, estadio larvario. El plan corporal —cuerpo segmentado, blando, con pseudópodos abdominales— es el de una larva de holometábolo, y todo en su biología está subordinado a una única función: acumular masa antes de la metamorfosis.",
    nicho:
      "Larva folívora de dosel forestal bajo. Con 30 cm y 2,9 kg es enorme para una larva, lo que la sitúa en un nicho sin equivalente terrestre exacto: consume hoja en cantidades que ningún insecto real alcanza, y por eso es un herbívoro estructurante del bosque más que un comensal marginal. Su altísima tasa de captura, 255, la identifica como especie ubicua y abundantísima, la base de la pirámide trófica de su ecosistema.",
    adaptaciones: [
      {
        rasgo: "Antena osmeterio evertible",
        funcion:
          "Órgano frontal que libera un compuesto volátil repulsivo ante el acoso. Es una defensa química de bajo coste para un animal incapaz de huir: no impide la depredación, pero eleva lo suficiente el coste del ataque como para desviar a los depredadores hacia presas más cómodas.",
      },
      {
        rasgo: "Glándulas serícteras",
        funcion:
          "Producen un hilo proteico de gran resistencia que usa para anclarse al sustrato y, llegado el momento, para construir la envuelta pupal. La misma estructura sirve a la locomoción segura y a la metamorfosis.",
      },
      {
        rasgo: "Aparato bucal masticador hipertrofiado",
        funcion:
          "Mandíbulas desproporcionadas respecto al cuerpo, capaces de procesar hojas a un ritmo altísimo. Es la adaptación central de un organismo cuyo único cometido es maximizar la ingesta en una ventana temporal corta.",
      },
      {
        rasgo: "Coloración críptica verde",
        funcion:
          "Camuflaje sobre el limbo foliar. En un animal lento, blando y abundante, el ocultamiento es la primera línea de defensa y la única disponible durante la mayor parte del día.",
      },
    ],
    alimentacion:
      "Folivoría estricta y voraz. La larva consume varias veces su propio peso en hoja a lo largo del estadio, con una eficiencia de conversión muy alta y un tránsito digestivo rápido. Esta fase no está diseñada para vivir, sino para acumular: cada gramo ingerido es reserva para la reorganización corporal que viene después.",
    posicionTrofica: "Consumidor primario, base de la pirámide trófica",
    presas: ["Limbo foliar de árboles caducifolios", "Brotes tiernos", "Savia expuesta"],
    depredadores: [
      "Aves insectívoras, su principal fuente de mortalidad",
      "Avispas parasitoides",
      "Pequeños carnívoros de sotobosque",
    ],
    desarrollo:
      "Este ejemplar es el caso que mejor ilustra la tesis de PokeBio, porque su ciclo es literalmente el de un insecto holometábolo real: larva, pupa, imago. La transición a la fase pupal se dispara por acumulación de reservas, anotada en campo como «alcanzar el nivel 7», y está mediada por hormonas —en los insectos terrestres, la caída del título de hormona juvenil frente a la ecdisona—. Llamar «evolución» a esto es un error de categoría: es desarrollo, el mismo individuo cambiando de forma. Una oruga que se vuelve mariposa no ha evolucionado, ha crecido. La evolución sería que, generación tras generación, las orugas de esta población pupasen antes o construyesen sedas más resistentes.",
    reproduccion:
      "Fase preadulta sin capacidad reproductiva: los órganos sexuales no se diferencian hasta el imago. Su pertenencia al grupo de compatibilidad Bicho solo es operativa en la forma adulta. La estrategia de la especie en conjunto es de estratega de la r extremo, como delata la tasa de captura de 255: puestas numerosísimas, sin cuidado parental y con mortalidad larvaria altísima.",
    analogoTerrestre:
      "Las orugas de los lepidópteros, sin matices: mismo plan corporal, mismas glándulas de seda, mismo osmeterio evertible que exhiben las larvas de los papiliónidos, y mismo ciclo holometábolo. Es, de todo el catálogo, el ejemplar con el análogo terrestre más directo.",
    conservacion:
      "Abundantísima y sin problemas de conservación como especie, pero muy sensible a los insecticidas de amplio espectro y a la pérdida de bosque caducifolio. Su colapso arrastraría a toda la comunidad de insectívoros que depende de ella.",
  },

  metapod: {
    clasificacion:
      "Lepidopteroidea vermiformis, estadio pupal. La envuelta quitinosa endurecida y la inmovilidad casi total definen la fase: no es un animal en reposo, sino un organismo en plena reorganización anatómica.",
    nicho:
      "Sésil, fijada a ramas y envés de hojas del mismo bosque donde se alimentó la larva. No ocupa un nicho trófico —no come— sino un nicho espacial: un refugio estructural donde pasar inadvertida el tiempo necesario. Sus 9,9 kg son reservas heredadas de la fase anterior, no masa activa.",
    adaptaciones: [
      {
        rasgo: "Exoesqueleto pupal esclerotizado",
        funcion:
          "Cubierta rígida que protege un contenido interno casi líquido durante la histólisis. Es la única defensa disponible: sin capacidad de huida ni de ataque, la supervivencia se juega enteramente en la resistencia mecánica de la envuelta.",
      },
      {
        rasgo: "Inmovilidad y criptismo estructural",
        funcion:
          "La forma y el color imitan un brote o una agalla. Al no emitir movimiento ni olor apreciable, minimiza la probabilidad de ser detectada por depredadores que cazan por estímulo visual dinámico.",
      },
      {
        rasgo: "Metabolismo basal deprimido",
        funcion:
          "La tasa metabólica cae a un mínimo que permite estirar las reservas acumuladas durante toda la fase. Es la misma solución energética que emplean los animales en diapausa o hibernación.",
      },
    ],
    alimentacion:
      "Ninguna. La fase pupal es afágica: vive íntegramente de las reservas acumuladas en el estadio larvario. Toda la energía disponible se destina a la histólisis de los tejidos larvarios y a la construcción de las estructuras del adulto —alas, ojos compuestos, aparato bucal chupador—, que se forman a partir de los discos imaginales.",
    posicionTrofica: "Fuera de la cadena trófica activa; solo actúa como presa",
    presas: ["Ninguna: no se alimenta"],
    depredadores: [
      "Aves capaces de perforar la envuelta",
      "Avispas parasitoides, que la aprovechan como incubadora",
      "Pequeños mamíferos oportunistas",
    ],
    desarrollo:
      "Es el estadio donde la metamorfosis ocurre de verdad. Dentro de la envuelta, el cuerpo larvario se descompone casi por completo y se reconstruye a partir de los discos imaginales. La emergencia del adulto, registrada como «alcanzar el nivel 10», se produce cuando esa reorganización culmina. El punto biológico es contundente: el organismo que entra y el que sale son el mismo individuo, con el mismo genoma, sin que haya intervenido ninguna selección ni ningún cambio en las frecuencias alélicas de la población. Nada de lo que aquí sucede es evolución.",
    reproduccion:
      "Nula. La diferenciación de las gónadas se completa dentro de la envuelta, pero no hay actividad reproductiva hasta la emergencia del imago.",
    analogoTerrestre:
      "La crisálida de cualquier lepidóptero, y en particular las crisálidas desnudas y anguladas de los ninfálidos, que se suspenden de una rama y reproducen la silueta de una hoja seca o un brote.",
    conservacion:
      "Es el punto más vulnerable del ciclo. La mortalidad por parasitoides en esta fase determina en buena medida el tamaño de la población adulta, y por eso la abundancia de la especie se mide mejor aquí que en cualquier otro estadio.",
  },

  butterfree: {
    clasificacion:
      "Lepidopteroidea vermiformis, imago alado. El plan corporal es ya el de un insecto adulto completo: alas escamosas, ojos compuestos, aparato bucal chupador y capacidad de vuelo sostenido.",
    nicho:
      "Polinizador de dosel y pradera, con un radio de acción que ninguna de las fases anteriores tenía. Con 32 kg y 1,1 metros de envergadura corporal ocupa un nicho que en la Tierra sería imposible por límites físicos del vuelo de insecto, pero funcionalmente equivale al de un gran polinizador migratorio. Su papel en el ecosistema es de conector: transporta polen entre parches de vegetación que de otro modo quedarían reproductivamente aislados.",
    adaptaciones: [
      {
        rasgo: "Alas escamosas de gran superficie",
        funcion:
          "Permiten vuelo sostenido y desplazamientos largos con bajo coste energético. Liberan al organismo de la limitación fundamental de las dos fases previas —ser lento y local— y convierten un herbívoro de una sola planta en un animal de escala de paisaje.",
      },
      {
        rasgo: "Escamas alares desprendibles y tóxicas",
        funcion:
          "Un polvo de escamas irritantes se libera con el batido. Funciona como defensa a distancia contra depredadores aéreos y como mecanismo de escape: la nube desorienta al perseguidor mientras el ejemplar gana altura.",
      },
      {
        rasgo: "Ojos compuestos de gran resolución",
        funcion:
          "Amplio campo visual y sensibilidad al ultravioleta, que en los polinizadores reales revela patrones florales invisibles al ojo humano. Es la adaptación sensorial que hace rentable buscar néctar disperso en el paisaje.",
      },
      {
        rasgo: "Aparato bucal en espiritrompa",
        funcion:
          "Sustituye por completo a las mandíbulas masticadoras de la larva. El cambio de dieta —de hoja a néctar— es tan radical que adulto y larva no compiten por un solo recurso, lo que elimina la competencia intraespecífica entre generaciones.",
      },
    ],
    alimentacion:
      "Nectarívora estricta. La espiritrompa extrae néctar de estructuras florales profundas, un alimento de altísima densidad energética y prácticamente nulo aporte estructural: suficiente para volar y reproducirse, insuficiente para crecer. Por eso el adulto ya no aumenta de masa. La separación de nichos entre larva folívora e imago nectarívoro es uno de los rasgos más elegantes del ciclo holometábolo.",
    posicionTrofica: "Consumidor primario y polinizador clave",
    presas: ["Néctar floral", "Savia fermentada", "Sales minerales de charcas"],
    depredadores: [
      "Aves insectívoras aéreas",
      "Depredadores de emboscada apostados en flores",
      "Arácnidos de tela orbicular",
    ],
    desarrollo:
      "Fase terminal e imaginal: aquí el desarrollo se detiene. Vale la pena mirar la serie completa —oruga, crisálida, adulto alado— y constatar hasta qué punto la palabra «evolución» la describe mal. Tres formas radicalmente distintas, con dietas y planes corporales incompatibles, y sin embargo un solo individuo y un solo genoma de principio a fin. La evolución biológica opera en otra escala por completo: sobre poblaciones, a lo largo de generaciones, cambiando la frecuencia de los alelos. Confundir ambas cosas es confundir la biografía de un animal con la historia de su linaje.",
    reproduccion:
      "Reproducción sexual dentro del grupo de compatibilidad Bicho, con cortejo aéreo y puestas numerosas sobre las plantas nutricias de la larva. Estratega de la r puro: alta fecundidad, ausencia total de cuidado parental y vida adulta breve, enteramente dedicada a dispersar y reproducirse.",
    analogoTerrestre:
      "La mariposa monarca, tanto por el ciclo holometábolo completo como por la defensa química heredada de la dieta larvaria y la capacidad de recorrer distancias enormes conectando poblaciones vegetales distantes.",
    conservacion:
      "Su suerte está ligada a la de la larva y a la de las plantas que poliniza, en una dependencia recíproca. La pérdida de continuidad del paisaje es su amenaza principal: un polinizador que conecta parches deja de tener función cuando los parches se aíslan del todo.",
  },

  charmander: {
    clasificacion:
      "Pyrosauria caudaflamma, estadio juvenil. Sauriomorfo bípedo con un órgano caudal productor de llama, estructura sin equivalente entre los vertebrados terrestres y que condiciona toda su fisiología.",
    nicho:
      "Habita terrenos abruptos y laderas volcánicas de drenaje rápido, donde la humedad ambiental baja no amenaza la llama caudal. Con 60 cm y 8,5 kg es un carnívoro pequeño y ágil, relegado a presas menores por su talla, pero con acceso a un microhábitat —roquedo caliente y seco— que pocos competidores toleran. La llama no es solo un arma: es lo que define dónde puede y no puede vivir.",
    adaptaciones: [
      {
        rasgo: "Órgano caudal pirógeno",
        funcion:
          "Estructura vascularizada en el extremo de la cola que mantiene combustión continua a partir de gases metabólicos. Cumple funciones de señalización, defensa y termorregulación, y su intensidad es un indicador directo del estado vital del animal: constituye una señal honesta de condición física, imposible de falsear ante congéneres o rivales.",
      },
      {
        rasgo: "Epitelio respiratorio ignífugo",
        funcion:
          "Revestimiento de las vías aéreas resistente a temperaturas que destruirían un tejido normal. Es el requisito anatómico previo sin el cual la producción de llama sería letal para el propio organismo.",
      },
      {
        rasgo: "Bipedismo cursorial",
        funcion:
          "Extremidades posteriores robustas y cola contrapesada permiten carreras cortas y explosivas sobre terreno irregular. Las anteriores, liberadas de la locomoción, quedan disponibles para manipular presas.",
      },
    ],
    alimentacion:
      "Carnivoría oportunista de presas pequeñas, complementada con carroña. El coste energético de mantener la llama encendida de forma permanente es altísimo, lo que impone una tasa de ingesta desproporcionada para su tamaño y explica un desarrollo medio-lento: buena parte de lo que come se quema literalmente, en lugar de convertirse en tejido.",
    posicionTrofica: "Consumidor secundario",
    presas: ["Pequeños vertebrados", "Invertebrados de roquedo", "Carroña reciente"],
    depredadores: [
      "Grandes carnívoros territoriales",
      "Aves rapaces de gran porte",
      "La propia humedad ambiental, que actúa como factor de mortalidad no biótico",
    ],
    desarrollo:
      "La transición al estadio siguiente se dispara al alcanzar la madurez somática, anotada como «alcanzar el nivel 16». El mecanismo plausible es un umbral de capacidad del órgano caudal: cuando la producción de gases supera lo que la estructura juvenil puede canalizar, se desencadena la reorganización a la forma intermedia. Como en el resto del catálogo, es metamorfosis ontogenética: el mismo individuo, el mismo genoma, ninguna población implicada. La evolución biológica de este linaje habría ocurrido a lo largo de millones de años, seleccionando epitelios cada vez más resistentes al calor.",
    reproduccion:
      "Inmaduro. La especie pertenece a los grupos Monstruo y Dragón, con una tasa de captura de 45 que indica poblaciones poco densas. El perfil es de estratega de la K: pocas crías, maduración lenta y probable cuidado parental, coherente con un animal cuya descendencia nace ya dependiente de un órgano complejo y delicado.",
    analogoTerrestre:
      "El escarabajo bombardero, por la capacidad de generar una reacción exotérmica controlada en el propio cuerpo sin dañarse; y las crías de varánido, por el bipedismo facultativo y la dieta carnívora oportunista de un juvenil que aún no alcanza el tamaño adulto.",
    conservacion:
      "Vulnerable a los cambios en el régimen de precipitaciones: un aumento de la humedad ambiental compromete directamente la viabilidad del órgano caudal. Es una especie con un margen climático estrecho y poca capacidad de desplazarse a hábitats alternativos.",
  },

  charmeleon: {
    clasificacion:
      "Pyrosauria caudaflamma, estadio subadulto. El aumento de masa, la aparición de crestas craneales y la intensificación de la llama caudal marcan la fase de mayor agresividad del ciclo.",
    nicho:
      "Desplaza su actividad hacia territorios más elevados y expuestos que el juvenil, con el que deja de competir directamente. Sus 19 kg lo sitúan ya en el rango de los depredadores intermedios, y su conducta territorial documentada sugiere que el recurso limitante en esta fase no es el alimento sino el espacio de roquedo caliente, que defiende activamente.",
    adaptaciones: [
      {
        rasgo: "Cresta occipital",
        funcion:
          "Proyección craneal posterior que interviene en la exhibición agonística entre congéneres. Permite resolver disputas territoriales mediante evaluación visual del rival en lugar de por combate directo, lo que reduce la mortalidad intraespecífica.",
      },
      {
        rasgo: "Llama caudal de mayor temperatura",
        funcion:
          "El órgano pirógeno alcanza temperaturas superiores a las del estadio juvenil, ampliando el alcance defensivo y la capacidad de procesar presas. El coste es una demanda metabólica aún mayor.",
      },
      {
        rasgo: "Garras posteriores en hoz",
        funcion:
          "Uñas curvas y afiladas en las extremidades traseras, aptas para sujetar presas de talla comparable a la propia. Marcan el paso de la depredación de presas pequeñas a la de presas medianas.",
      },
    ],
    alimentacion:
      "Carnivoría activa sobre presas de tamaño medio. El subadulto abandona la carroña y el oportunismo del juvenil y caza de forma deliberada, con emboscadas breves aprovechadas por su aceleración. La demanda energética del órgano caudal, ya muy intensa, obliga a un ritmo de captura elevado y sostenido.",
    posicionTrofica: "Consumidor secundario y terciario ocasional",
    presas: ["Vertebrados de talla media", "Depredadores menores desplazados", "Huevos y nidadas"],
    depredadores: [
      "Adultos territoriales de su propia especie",
      "Grandes carnívoros de las tierras altas",
    ],
    desarrollo:
      "Estadio intermedio, el más breve y el más costoso de la serie. La transición a la forma adulta se registra como «alcanzar el nivel 36» y coincide con el desarrollo de las estructuras alares. La observación relevante es que la agresividad de esta fase no es un rasgo de carácter sino un correlato fisiológico: un cuerpo que quema recursos a máxima velocidad y todavía no ha alcanzado el tamaño que le daría acceso seguro a ellos.",
    reproduccion:
      "Prerreproductivo o marginalmente reproductivo. La energía disponible se destina íntegramente al crecimiento y a la defensa territorial, no a la reproducción, lo que en la práctica excluye a esta fase del acervo reproductor de la población.",
    analogoTerrestre:
      "Los subadultos de los grandes félidos y varánidos, que atraviesan un periodo de máxima agresividad y máxima mortalidad al ser expulsados del territorio parental antes de alcanzar el tamaño adulto.",
    conservacion:
      "Junto con la fase pupal de otros linajes, es el cuello de botella demográfico de la especie: alta mortalidad por conflicto intraespecífico y por demanda energética insatisfecha.",
  },

  charizard: {
    clasificacion:
      "Pyrosauria caudaflamma, estadio adulto alado. La adquisición del vuelo batido en la fase terminal reorganiza por completo la ecología del organismo y lo saca del nicho terrestre que ocupaban las fases previas.",
    nicho:
      "Depredador ápice de las tierras altas, con dominio del espacio aéreo sobre cordilleras y laderas volcánicas. Con 1,70 m, 90,5 kg y vuelo sostenido a gran altitud, su territorio se mide en decenas de kilómetros y no compite ya con ninguna de sus fases anteriores. El hábitat montano registrado y el vuelo se refuerzan mutuamente: la altitud ofrece el aire seco que la llama necesita y las corrientes térmicas que abaratan el vuelo.",
    adaptaciones: [
      {
        rasgo: "Alas membranosas de gran superficie",
        funcion:
          "Permiten vuelo batido y planeo aprovechando las térmicas de ladera. Con 90 kg de masa, el vuelo solo es energéticamente viable en un entorno de corrientes ascendentes constantes, lo que explica la fidelidad estricta de la especie al hábitat montano.",
      },
      {
        rasgo: "Órgano pirógeno de alta temperatura",
        funcion:
          "La llama adulta alcanza su máximo desarrollo y funciona como arma de caza a distancia, como señal territorial visible a kilómetros y como fuente de calor en las noches de altitud. Un solo órgano cubre depredación, comunicación y termorregulación.",
      },
      {
        rasgo: "Sistema respiratorio de alta capacidad",
        funcion:
          "Volumen pulmonar y eficiencia de intercambio adaptados a la baja presión parcial de oxígeno en altitud, y capaces además de sostener simultáneamente el vuelo y la combustión. Es la exigencia fisiológica más severa de todo su plan corporal.",
      },
      {
        rasgo: "Dermis coriácea resistente al calor",
        funcion:
          "Aísla los tejidos profundos del propio órgano pirógeno y de los ataques de congéneres. En una especie donde los conflictos territoriales se resuelven con fuego, la resistencia térmica de la propia piel es una condición de supervivencia.",
      },
    ],
    alimentacion:
      "Depredación ápice sobre presas grandes, con caza en picado desde el aire y aprovechamiento parcial de la carroña de altura. La combinación de vuelo y llama sostenida la convierte en una de las fisiologías más caras del catálogo, lo que impone territorios enormes y densidades de población necesariamente bajas.",
    posicionTrofica: "Depredador ápice",
    presas: ["Vertebrados de gran talla", "Depredadores intermedios", "Carroña de altura"],
    depredadores: [
      "Ninguno en estado adulto",
      "Compite con otros ápices por territorio, que es su verdadera fuente de mortalidad",
    ],
    desarrollo:
      "Fase terminal de la serie. Vista en conjunto —un juvenil terrestre de 8,5 kg, un subadulto territorial de 19 kg y un adulto volador de 90,5 kg—, la cadena ilustra bien por qué la etiqueta «evolución» resulta engañosa: si estas tres formas se hubiesen encontrado en el registro fósil se habrían descrito como tres especies distintas, y sin embargo son un mismo animal en tres momentos de su vida. La evolución real de este linaje es otra historia, la que a lo largo de millones de años seleccionó el órgano pirógeno y la membrana alar, y esa ocurrió entre individuos, nunca dentro de uno.",
    reproduccion:
      "Reproducción sexual en los grupos Monstruo y Dragón. La tasa de captura de 45 y la fuerte inversión por descendiente confirman un estratega de la K extremo: puestas reducidas, nidificación en cornisas inaccesibles y cuidado parental prolongado, imprescindible en crías que nacen ya con un órgano caudal que deben aprender a regular.",
    analogoTerrestre:
      "El águila real por la ecología de depredador ápice montano que explota las térmicas de ladera, y los grandes pterosaurios por la combinación de masa considerable y vuelo activo. El órgano pirógeno no tiene análogo entre los vertebrados: hay que buscarlo en la química defensiva de ciertos insectos.",
    conservacion:
      "Especie de bajo efectivo poblacional por razones estructurales: los depredadores ápice con territorios enormes nunca son abundantes. Es sensible a la fragmentación del hábitat montano y a la pérdida de las presas grandes de las que depende.",
  },

  magikarp: {
    clasificacion:
      "Cyprinoidea prodigiosa, forma juvenil. Pez de aspecto y comportamiento aparentemente ineptos, cuya biología solo se entiende como lo que es: un estadio de espera con una recompensa desproporcionada al final.",
    nicho:
      "Ocupa aguas someras, turbias y a menudo degradadas, incluidos cursos contaminados donde pocos peces prosperan. Con 10 kg y una tasa de captura de 255 —la máxima del catálogo— es abundantísimo y constituye la base alimentaria de casi todos los depredadores acuáticos de su ecosistema. Su nicho no es el de un competidor sino el de un recurso.",
    adaptaciones: [
      {
        rasgo: "Tolerancia extrema a la mala calidad del agua",
        funcion:
          "Soporta hipoxia, turbidez y contaminación que excluyen a la mayoría de los peces. Es su única ventaja competitiva real, y no es pequeña: le da acceso exclusivo a hábitats vacíos de competidores.",
      },
      {
        rasgo: "Escamas gruesas y firmemente ancladas",
        funcion:
          "Blindaje dérmico que encarece la manipulación por parte del depredador. No impide la depredación, pero eleva el tiempo de manejo lo suficiente como para que una fracción de los ataques fracase.",
      },
      {
        rasgo: "Musculatura axial capaz de saltos explosivos",
        funcion:
          "Contracción de gran potencia que proyecta al animal fuera del agua. Es un escape de último recurso ante depredadores acuáticos, y a la vez la base muscular preadaptada sobre la que se construirá la fase siguiente.",
      },
    ],
    alimentacion:
      "Detritívoro y filtrador oportunista: consume materia orgánica en descomposición, algas y microinvertebrados del fondo. Una dieta de bajísima calidad energética que sostiene un crecimiento lento y explica un desarrollo prolongado. Es, en términos ecológicos, un reciclador que convierte detritus en biomasa aprovechable por toda la red trófica.",
    posicionTrofica: "Detritívoro y consumidor primario; presa fundamental",
    presas: ["Detritus orgánico", "Algas bentónicas", "Microinvertebrados del sedimento"],
    depredadores: [
      "Prácticamente todos los depredadores acuáticos de su rango",
      "Aves pescadoras",
      "Depredadores terrestres ribereños",
    ],
    desarrollo:
      "El caso más espectacular de metamorfosis del catálogo y, por eso mismo, el más útil para la tesis. La transición se dispara al «alcanzar el nivel 20», umbral que traduce la acumulación de reservas suficiente para financiar una reorganización anatómica completa. El resultado es un animal de otro orden de magnitud, hasta el punto de que un naturalista sin datos de ciclo vital jamás relacionaría ambas formas. Y sin embargo no hay aquí ninguna evolución: no ha cambiado ni un alelo, ni ha actuado la selección natural, ni ha pasado una sola generación. Solo un individuo que ha crecido de una forma muy poco habitual.",
    reproduccion:
      "Estratega de la r extremo, como corresponde a la tasa de captura más alta del catálogo. Pertenece al grupo de compatibilidad Agua 2, con puestas masivas, sin cuidado parental y con una mortalidad juvenil altísima que la fecundidad compensa por pura cantidad.",
    analogoTerrestre:
      "La carpa común, tanto por la tolerancia a aguas degradadas y la dieta detritívora como por la capacidad de saltar fuera del agua. La leyenda china de la carpa que remonta la Puerta del Dragón y se transforma en dragón al superarla es, casi literalmente, la descripción de este ciclo vital.",
    conservacion:
      "Sin riesgo alguno: es una de las especies más abundantes y resistentes conocidas. Su relevancia para la conservación es indirecta pero enorme, porque su colapso desmontaría la base de la red trófica acuática entera.",
  },

  gyarados: {
    clasificacion:
      "Cyprinoidea prodigiosa, forma adulta. Depredador acuático serpentiforme de gran talla, morfológicamente irreconocible respecto a su propio estadio juvenil.",
    nicho:
      "Depredador ápice de aguas continentales y costeras. Con 6,5 metros y 235 kg —más de veinte veces la masa de su forma juvenil— domina un territorio amplio y carece de competidores efectivos. El cambio de nicho entre las dos fases del ciclo es absoluto: de recurso a depredador, de fondo turbio a columna de agua abierta, de detritus a presas vivas de gran talla.",
    adaptaciones: [
      {
        rasgo: "Cuerpo serpentiforme de gran longitud",
        funcion:
          "La natación anguiliforme, por ondulación de todo el eje corporal, proporciona aceleraciones brutales en distancias cortas. Es la morfología óptima para un depredador de emboscada que ataca desde abajo en aguas abiertas.",
      },
      {
        rasgo: "Blindaje dérmico de escamas hipertrofiadas",
        funcion:
          "Heredado y amplificado de la fase juvenil, donde ya era su principal defensa. Un caso claro de exaptación: la estructura que protegía a una presa se ha reconvertido en la armadura de un depredador.",
      },
      {
        rasgo: "Aparato mandibular de gran apertura",
        funcion:
          "Mandíbulas capaces de engullir presas de gran tamaño enteras, lo que reduce el tiempo de manejo y la exposición del depredador durante la ingesta.",
      },
      {
        rasgo: "Agresividad territorial extrema",
        funcion:
          "Conducta de respuesta desproporcionada ante cualquier intrusión. En un ápice de territorio amplio y densidad baja, disuadir por completo la intrusión es más eficiente que evaluar caso por caso si supone una amenaza real.",
      },
    ],
    alimentacion:
      "Depredación activa sobre vertebrados acuáticos de gran talla, con incursiones documentadas sobre presas ribereñas. El cambio de dieta respecto al estadio juvenil es total —de detritívoro a carnívoro ápice— y constituye el ejemplo más extremo de separación de nichos entre fases de un mismo individuo que recoge este catálogo.",
    posicionTrofica: "Depredador ápice acuático",
    presas: ["Grandes peces", "Vertebrados acuáticos de talla media", "Fauna ribereña"],
    depredadores: [
      "Ninguno en estado adulto",
      "Solo otros ápices en disputa territorial suponen una amenaza real",
    ],
    desarrollo:
      "Fase terminal. La comparación entre las dos formas de esta cadena es probablemente el mejor argumento didáctico de PokeBio: 10 kg frente a 235, detritívoro frente a ápice, y aun así el mismo individuo y el mismo genoma. Si algo demuestra este ciclo es lo lejos que puede llegar el desarrollo de un organismo sin que intervenga la evolución en absoluto. La evolución habría sido el proceso, a lo largo de generaciones incontables, que fijó en este linaje la capacidad de reorganizarse así.",
    reproduccion:
      "Reproducción sexual en el grupo Agua 2. La fecundidad sigue siendo alta —herencia de la estrategia de la r del juvenil—, pero el ciclo completo es mixto: puestas masivas propias de un estratega de la r seguidas de una fase adulta longeva y de baja mortalidad propia de un estratega de la K. Muy pocos individuos llegan a esta forma, y los que lo hacen viven mucho.",
    analogoTerrestre:
      "El pez remo y las morenas por la locomoción anguiliforme y el porte serpentiforme; y los grandes salmónidos anádromos por el cambio radical de hábitat y de dieta entre las fases de un mismo ciclo vital.",
    conservacion:
      "Poblaciones naturalmente escasas por su posición trófica. Es especialmente sensible a la contaminación por bioacumulación: como ápice, concentra en sus tejidos todo lo que arrastra la cadena que tiene debajo.",
  },

  snorlax: {
    clasificacion:
      "Somnursidae gigantea. Mamífero de gran talla con una especialización metabólica extrema orientada al almacenamiento de energía y a la minimización del gasto.",
    nicho:
      "Megaherbívoro sedentario de bosques y praderas productivas. Con 2,1 metros y 460 kg es el ejemplar más masivo de este volumen, y su estrategia ecológica consiste en convertir esa masa en invulnerabilidad: no huye, no se oculta y no compite, simplemente es demasiado grande para que nada de eso importe. Su hábitat efectivo es cualquier lugar donde la densidad de alimento supere un umbral mínimo.",
    adaptaciones: [
      {
        rasgo: "Panículo adiposo hipertrofiado",
        funcion:
          "Reservas lipídicas que representan una fracción enorme de la masa corporal. Cumplen tres funciones a la vez: aislamiento térmico, amortiguación mecánica frente a los ataques y reserva energética para periodos de escasez prolongada.",
      },
      {
        rasgo: "Tasa metabólica basal deprimida",
        funcion:
          "Metabolismo excepcionalmente lento durante los prolongados periodos de inactividad, que ocupan la mayor parte del día. Es lo que hace sostenible un cuerpo de 460 kg sin necesidad de forrajear de forma continua.",
      },
      {
        rasgo: "Tracto digestivo de gran volumen y flora simbionte",
        funcion:
          "Permite procesar material vegetal de baja calidad mediante fermentación prolongada, extrayendo energía de recursos que otros herbívoros no pueden aprovechar. Amplía enormemente el espectro de lo que cuenta como alimento.",
      },
      {
        rasgo: "Sistema inmunitario y digestivo tolerante a toxinas",
        funcion:
          "Capacidad documentada de ingerir material que resultaría tóxico para otras especies. Elimina de hecho la competencia por buena parte de su dieta.",
      },
    ],
    alimentacion:
      "Herbivoría indiscriminada de altísimo volumen: consume diariamente una cantidad de biomasa que ningún otro herbívoro de su ecosistema podría igualar. La ausencia de selectividad es la clave de su éxito, porque convierte cualquier parche vegetal en alimento viable y hace innecesario el desplazamiento en busca de recursos concretos.",
    posicionTrofica: "Consumidor primario de gran biomasa",
    presas: [
      "Biomasa vegetal sin discriminar",
      "Frutos y raíces",
      "Materia orgánica de origen animal, oportunistamente",
    ],
    depredadores: [
      "Ninguno en estado adulto: la masa corporal lo excluye del espectro de presas",
      "Los juveniles sí son vulnerables a grandes carnívoros",
    ],
    desarrollo:
      "Especie sin serie ontogenética documentada en su forma adulta: el desarrollo es continuo, por crecimiento progresivo, sin metamorfosis. Resulta útil precisamente por contraste con el resto del catálogo, porque muestra que la transformación abrupta no es la norma sino una estrategia particular de ciertos linajes. Aquí, como en la mayoría de los mamíferos reales, la forma adulta se alcanza por acumulación gradual, no por reorganización.",
    reproduccion:
      "Estratega de la K puro. Pertenece al grupo de compatibilidad Monstruo, con una tasa de captura de 25 que indica poblaciones muy poco densas. Cría única, gestación larga, cuidado parental prolongado y madurez tardía: el patrón demográfico clásico de los grandes mamíferos longevos.",
    analogoTerrestre:
      "El oso pardo en fase de hiperfagia previa a la hibernación, por la combinación de acumulación masiva de grasa y depresión metabólica; y el panda gigante, por la especialización en una dieta vegetal de baja calidad compensada con volumen y sedentarismo.",
    conservacion:
      "Vulnerable por la vía demográfica habitual de los grandes mamíferos: reproducción lentísima, poblaciones pequeñas y necesidad de territorios extensos y continuos. Cualquier mortalidad adulta añadida tarda generaciones en compensarse.",
  },

  eevee: {
    clasificacion:
      "Polymorpha adaptabilis. Pequeño mamífero cuadrúpedo de pelaje denso cuya característica diagnóstica no es morfológica sino genómica: un patrimonio hereditario excepcionalmente inestable, capaz de expresar fenotipos radicalmente distintos según el estímulo ambiental que reciba durante el desarrollo.",
    nicho:
      "Generalista por definición. Con 30 cm y 6,5 kg ocupa el papel de mesodepredador oportunista en hábitats muy variados, y su ausencia de especialización es precisamente su estrategia: no compite bien en ningún nicho concreto, pero sobrevive en todos. Su altísima tasa de captura, 45 para una especie tan extendida, y su presencia documentada en entornos urbanos apuntan a una notable tolerancia a la perturbación humana.",
    adaptaciones: [
      {
        rasgo: "Genoma inestable con múltiples rutas de desarrollo",
        funcion:
          "El rasgo central de la especie. Permite que un mismo genotipo dé lugar a fenotipos distintos según las condiciones ambientales, un caso extremo de plasticidad fenotípica. La ventaja selectiva es enorme en entornos impredecibles: la descendencia no queda comprometida de antemano con una única estrategia.",
      },
      {
        rasgo: "Pelaje denso con collar de guarda",
        funcion:
          "Aislamiento térmico eficaz en un rango amplio de temperaturas, coherente con una especie que no está restringida a un clima concreto. El collar cumple además una función de exhibición en el reconocimiento entre congéneres.",
      },
      {
        rasgo: "Pabellones auriculares de gran tamaño",
        funcion:
          "Superficie auditiva amplia y móvil que mejora la localización de presas y depredadores, y que contribuye a la disipación de calor. Es la solución habitual en pequeños carnívoros que dependen del oído más que de la vista.",
      },
      {
        rasgo: "Dentición generalista",
        funcion:
          "Piezas dentales sin especialización marcada, aptas tanto para materia animal como vegetal. Amplía el espectro de recursos aprovechables y reduce la dependencia de una única fuente de alimento.",
      },
    ],
    alimentacion:
      "Omnivoría oportunista con sesgo carnívoro: pequeños vertebrados, invertebrados, huevos, frutos y, en entornos antropizados, desperdicios. La ausencia de especialización trófica es coherente con el resto de su biología y explica su éxito en hábitats muy distintos entre sí.",
    posicionTrofica: "Consumidor secundario generalista",
    presas: [
      "Pequeños vertebrados",
      "Invertebrados de suelo",
      "Frutos y semillas",
      "Recursos de origen antrópico",
    ],
    depredadores: [
      "Carnívoros de mayor talla",
      "Aves rapaces",
      "Depredadores oportunistas de entornos urbanos",
    ],
    desarrollo:
      "El caso más delicado del catálogo, y el que exige más precisión terminológica. Que un mismo individuo pueda desarrollarse en formas muy distintas según el estímulo que reciba —una piedra elemental, el vínculo social, el momento del día, el lugar— se parece superficialmente a una radiación adaptativa, el fenómeno por el cual un linaje ancestral se diversifica en múltiples especies que explotan nichos diferentes. Pero no lo es, y la diferencia importa. Una radiación adaptativa ocurre entre poblaciones, a lo largo de generaciones, y produce especies distintas que ya no se cruzan entre sí. Lo de Eevee ocurre dentro de un único individuo, en cuestión de horas, y no genera ninguna especie nueva: es plasticidad fenotípica llevada al extremo, el mismo genoma expresándose de formas alternativas. El paralelo real no es el de los pinzones de Darwin, sino el de la abeja reina y la obrera, que comparten genoma y difieren por completo según lo que comieron de larvas.",
    reproduccion:
      "Estratega de la r moderado, dentro del grupo de compatibilidad Campo. Camadas numerosas, madurez temprana y cuidado parental breve, el patrón esperable en un mesodepredador generalista sometido a alta presión de depredación. La inestabilidad genómica se transmite íntegra a la descendencia, que nace por tanto igual de indiferenciada que sus progenitores.",
    analogoTerrestre:
      "La determinación de castas en los himenópteros sociales, donde larvas genéticamente idénticas se convierten en reina u obrera según la dieta recibida; y el polifenismo estacional de ciertos lepidópteros, que producen morfos de primavera y de verano tan distintos que llegaron a describirse como especies separadas.",
    conservacion:
      "Sin riesgo. Su plasticidad y su tolerancia a la perturbación la convierten en una de las especies mejor preparadas para el cambio ambiental, y es una de las pocas del catálogo que probablemente se beneficie de la expansión de los entornos humanos.",
  },
};

/** Devuelve la monografia de una especie, si esta redactada. */
export function obtenerMonografia(nombre: string): FichaBiologica | null {
  return MONOGRAFIAS[nombre.toLowerCase()] ?? null;
}

/** Nombres de las especies con monografia, para senalarlas en el catalogo. */
export const ESPECIES_DOCUMENTADAS = Object.keys(MONOGRAFIAS);
