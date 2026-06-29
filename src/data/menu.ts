import cocktail1 from "@/assets/cocktail-1.jpg";
import cocktail2 from "@/assets/cocktail-2.jpg";
import cocktail3 from "@/assets/cocktail-3.jpg";
import cocktail4 from "@/assets/cocktail-4.jpg";
import cocktail5 from "@/assets/cocktail.jpg";
import batido from "@/assets/batidos.jpg";
import cerveza from "@/assets/cerveza.jpg";
import cubo from "@/assets/cubo.jpg";
import vino from "@/assets/vinos.jpg";
import ron from "@/assets/ron.jpg";
import Kachimba from "@/assets/Kachimba.jpg";
import refresco from "@/assets/refresco.jpg";

export type CocktailProfile = {
  sweetness: number; // 0-5
  alcohol: number; // 0-5
  freshness: number; // 0-5
};

export type Cocktail = {
  id: string;
  name: string;
  price: string;
  image: string;
  tagline: string;
  ingredients: string[];
  profile: CocktailProfile;
  pairings: string[];
  featured?: boolean;
};

export const cocktails: Cocktail[] = [
  {
    id: "sol-de-amalfi",
    name: "Sol de Amalfi",
    price: "8,30€",
    image: cocktail1,
    tagline: "Refrescante y cítrico. Una mezcla luminosa que evoca la costa italiana. Ligero, aromático y perfecta combinación de cítricos.",
    ingredients: ["Limoncello", "ron", "sirope mandarina"],
    profile: { sweetness: 2, alcohol: 3, freshness: 4 },
    pairings: ["Cachimba Premium Black", "Tabla de quesos"],
    featured: true,
  },
  {
    id: "rosa-bettore",
    name: "Piña Limonada Colada",
    price: "8,30€",
    image: cocktail2,
    tagline: "Una reinterpretación elegante del clásico caribeño. La suavidad tropical del ron blanco se fusiona con la frescura cítrica de la crema de limoncello Limoncé, creando un equilibrio perfecto entre dulzura, acidez y cremosidad.",
    ingredients: ["Ron blanco", "Limoncello", "Zumo de piña natural ", "puré de coco"],
    profile: { sweetness: 4, alcohol: 3, freshness: 3 },
    pairings: ["Cachimba Afrutada", "Frutos rojos"],
    featured: true,
  },
  {
    id: "mojito-bettore",
    name: "Mojito Clásico ",
    price: "7,50€",
    image: cocktail3,
    tagline: "Un cóctel icónico de la coctelería cubana, símbolo de frescura y equilibrio. El Mojito Clásico combina la intensidad del ron blanco con la acidez del limón, la dulzura del azúcar de caña y el frescor aromático de la hierbabuena. Completado con agua con gas o soda, ofrece una sensación ligera, viva y refrescante que lo convierte en un imprescindible en cualquier carta.",
    ingredients: ["Ron Havana", "Hierbabuena fresca", "Lima", "Azúcar de caña", "Soda"],
    profile: { sweetness: 3, alcohol: 3, freshness: 5 },
    pairings: ["Cachimba Cítrica", "Nachos"],
  }

];

export type HookahFlavor = "afrutadas" | "dulces" | "citricas" | "frescas" | "especiadas" | "premium";

export type Hookah = {
  id: string;
  name: string;
  flavors: HookahFlavor[];
  intensity: number; // 0-5
  description: string;
  price: string;
  featured?: boolean;
};

export const hookahFlavorLabels: Record<HookahFlavor, string> = {
  afrutadas: "Afrutadas",
  dulces: "Dulces",
  citricas: "Cítricas",
  frescas: "Frescas",
  especiadas: "Especiadas",
  premium: "Premium Black",
};

export const hookahs: Hookah[] = [
  {
    id: "big-boy",
    name: "big boy",
    flavors: ["frescas", "afrutadas"],
    intensity: 4,
    description: "Delicioso sabor a Sandia helada con menta",
    price: "22€",
    featured: true,
  },
  {
    id: "tropical-sunset",
    name: "carnival",
    flavors: ["afrutadas", "dulces"],
    intensity: 4,
    description: "Mezcla de frutas exóticas",
    price: "16€",
    featured: true,
  },
  {
    id: "citrus-storm",
    name: "huracán",
    flavors: ["afrutadas", "frescas"],
    intensity: 3,
    description: "Mezcla intensa y cremosa de frutas del bosque y frambuesa, acompañada de un toque refrescante",
    price: "16€",
  },
  {
    id: "polar-mint",
    name: "kaffayayo",
    flavors: ["dulces","especiadas"],
    intensity: 3,
    description: "Ofrece una experiencia dulce y cremosa que recrea el sabor de los famosos bombones Raffaello.",
    price: "15€",
  },
  {
    id: "berry-kiss",
    name: "⁠blue yellow",
    flavors: ["afrutadas", "dulces"],
    intensity: 5,
    description: "Combina melones dulces con arándanos azules frescos.",
    price: "16€",
    featured: true,
  },
  {
    id: "spiced-oud",
    name: "love 66",
    flavors: ["afrutadas", "premium"],
    intensity: 3,
    description: "Una mezcla tropical de maracuyá, melón, sandía y menta . Es refrescante y dulce a la vez.",
    price: "20€",
  },
  {
    id: "lemon-haze",
    name: "white cake",
    flavors: ["especiadas", "dulces"],
    intensity: 4,
    description: "La tarta de queso de siempre",
    price: "15€",
  },
  {
    id: "spiced-oud",
    name: "kaktuz",
    flavors: ["afrutadas", "premium"],
    intensity: 3,
    description: " Refrescante frescura con el hormigueo, sabor dulce y agrio de la pera espinosa.",
    price: "20€",
  },
  {
    id: "spiced-oud",
    name: "menta",
    flavors: ["frescas", "premium"],
    intensity: 5,
    description: "Intenso, herbáceo y dulce, caracterizado principalmente por una fuerte sensación de frescor",
    price: "20€",
  },
];

export type Drink = {
  id: string;
  name: string;
  description?: string;
  price: string;
};

export const copas: Drink[] = [
  // RON
  { id: "ron-legendario", name: "Ron Legendario", description: "Ron dulce y aromático con notas de vainilla.", price: "8€" },
  { id: "ron-barcelo", name: "Ron Barceló", description: "Ron dominicano equilibrado y suave.", price: "8€" },
  { id: "ron-brugal", name: "Ron Brugal", description: "Ron ligero con matices de madera.", price: "8€" },
  { id: "ron-cacique", name: "Ron Cacique", description: "Ron venezolano con carácter y cuerpo.", price: "8€" },
  { id: "ron-cacique-500", name: "Ron Cacique 500", description: "Ron premium añejo con notas tostadas.", price: "9€" },
  { id: "ron-brugal-extraviejo", name: "Brugal Extra Viejo", description: "Ron añejo con sabor profundo y equilibrado.", price: "9€" },
  { id: "ron-zacapa", name: "Ron Zacapa", description: "Ron premium guatemalteco con notas de caramelo y madera.", price: "13€" },


  // GINEBRA
  { id: "gin-beefeater", name: "Beefeater", description: "Ginebra clásica inglesa con notas de enebro.", price: "8€" },
  { id: "gin-seagrams", name: "Seagram's", description: "Ginebra suave con toque cítrico.", price: "8€" },
  { id: "gin-larios", name: "Larios", description: "Ginebra mediterránea fresca y equilibrada.", price: "8€" },
  { id: "gin-rives", name: "Rives", description: "Ginebra española aromática.", price: "8€" },
  { id: "gin-bombay", name: "Bombay", description: "Ginebra premium con botánicos seleccionados.", price: "8€" },
  { id: "gin-puerto-indias-fresa", name: "Puerto de Indias Fresa", description: "Ginebra afrutada con aroma dulce de fresa.", price: "8€" },
  { id: "gin-puerto-indias-mango", name: "Puerto de Indias Mango", description: "Ginebra tropical con notas de mango.", price: "8€" },
  { id: "gin-puerto-indias-melon", name: "Puerto de Indias Melón", description: "Ginebra fresca con sabor a melón.", price: "8€" },
  { id: "gin-nordes", name: "Nordés", description: "Ginebra gallega floral y elegante.", price: "11€" },
  { id: "gin-martin-miller", name: "Martin Miller's", description: "Ginebra premium fresca y refinada.", price: "11€" },
  { id: "gin-gvine", name: "G'Vine", description: "Ginebra francesa floral con uva verde.", price: "13€" },


  // WHISKEY
  { id: "whisky-red-label", name: "Red Label", description: "Whisky escocés intenso y especiado.", price: "8€" },
  { id: "whisky-white-label", name: "White Label", description: "Whisky suave y equilibrado.", price: "8€" },
  { id: "whisky-jameson", name: "Jameson", description: "Whisky irlandés suave con notas dulces.", price: "8€" },
  { id: "whisky-cutty-sark", name: "Cutty Sark", description: "Whisky escocés ligero y fresco.", price: "8€" },
  { id: "whisky-dyc", name: "DYC", description: "Whisky español clásico.", price: "8€" },
  { id: "whisky-dyc-8", name: "DYC 8", description: "Whisky añejado con mayor cuerpo.", price: "8,5€" },
  { id: "whisky-jb", name: "J&B", description: "Whisky escocés suave y afrutado.", price: "8€" },
  { id: "whisky-ballantines", name: "Ballantine's", description: "Whisky escocés equilibrado y suave.", price: "8€" },
  { id: "whisky-jack-manzana", name: "Jack Daniel's Apple", description: "Whisky americano con toque fresco de manzana.", price: "9,5€" },
  { id: "whisky-jack-miel", name: "Jack Daniel's Honey", description: "Whisky americano dulce con miel.", price: "9,5€" },
  { id: "whisky-black-label", name: "Black Label", description: "Whisky premium con notas ahumadas.", price: "11,5€" },
  { id: "whisky-cardhu", name: "Cardhu", description: "Single malt suave y elegante.", price: "12€" },
  { id: "whisky-macallan-12", name: "Macallan 12", description: "Single malt premium con notas de jerez.", price: "16,50€" },
  { id: "whisky-lagavulin", name: "Lagavulin", description: "Whisky ahumado de gran personalidad.", price: "18€" },
  { id: "whisky-blue-label", name: "Blue Label", description: "Whisky escocés ultra premium.", price: "35€" },


  // VODKA
  { id: "vodka-eristoff", name: "Eristoff", description: "Vodka limpio y equilibrado.", price: "8€" },
  { id: "vodka-absolut", name: "Absolut", description: "Vodka sueco suave y versátil.", price: "8€" },


  // PREMIUM EXISTENTES
  { id: "gin-hendricks", name: "Gin Hendrick's", description: "Pepino, rosa y tónica premium.", price: "9€" },
  { id: "gin-tanqueray", name: "Gin Tanqueray Ten", description: "Cítricos frescos y enebro.", price: "9€" },
  { id: "vodka-grey-goose", name: "Vodka Grey Goose", description: "Vodka premium francés de gran suavidad.", price: "10€" },
  { id: "tequila-patron", name: "Tequila Patrón Silver", description: "Agave puro, perfil limpio.", price: "10€" },
];

export const cervezas: Drink[] = [
  { id: "mahou-cinco", name: "Mahou 5 Estrellas", description: "Tercio 33cl.", price: "3,80€" },
  { id: "estrella-galicia", name: "Corona", description: "Tercio 33cl.", price: "3,80€" },
  { id: "1906", name: "Heineken", description: "Tercio 33cl.", price: "3,80€" },
  { id: "mahou-cinco", name: "Radler", description: "Tercio 33cl.", price: "3,80€" },
  { id: "mahou-cinco", name: "0.0 Tostada", description: "Tercio 33cl.", price: "3,80€" },
];

export const refrescos: Drink[] = [
  // REFRESCOS
  { 
    id: "redbull", 
    name: "Red Bull", 
    description: "Bebida energética original.", 
    price: "3,50€" 
  },

  { 
    id: "coca-cola", 
    name: "Coca-Cola", 
    description: "Refresco de cola clásico.", 
    price: "3,30€" 
  },

  { 
    id: "fanta", 
    name: "Fanta", 
    description: "Refresco de naranja refrescante.", 
    price: "3,30€" 
  },

  { 
    id: "schweppes", 
    name: "Schweppes", 
    description: "Tónica y refrescos Schweppes.", 
    price: "3,30€" 
  },

  { 
    id: "trina", 
    name: "Trina", 
    description: "Refresco suave sin burbujas.", 
    price: "3,30€" 
  },

  { 
    id: "aquarius", 
    name: "Aquarius", 
    description: "Bebida isotónica refrescante.", 
    price: "3,30€" 
  },

  { 
    id: "agua-con-gas", 
    name: "Agua con gas", 
    description: "Agua mineral con gas.", 
    price: "3,30€" 
  },

  { 
    id: "nestea-maracuya", 
    name: "Nestea Maracuyá", 
    description: "Té frío con sabor tropical.", 
    price: "3,30€" 
  },


  // ZUMOS
  { 
    id: "zumo-melocoton", 
    name: "Zumo de Melocotón", 
    description: "Zumo dulce y afrutado.", 
    price: "2,50€" 
  },

  { 
    id: "zumo-manzana", 
    name: "Zumo de Manzana", 
    description: "Zumo suave y refrescante.", 
    price: "2,50€" 
  },

  { 
    id: "zumo-naranja", 
    name: "Zumo de Naranja", 
    description: "Sabor natural y cítrico.", 
    price: "2,50€" 
  },

  { 
    id: "zumo-pina", 
    name: "Zumo de Piña", 
    description: "Zumo tropical dulce y fresco.", 
    price: "2,50€" 
  }
];

export const cubos: Drink[] = [
  {
    id: "Cubo mahou",
    name: "Cubo mahou",
    description: "Selección de cervezas Mahou 5u",
    price: "15,5€"
  },
  {
    id: "Cubo corona",
    name: "Cubo Premium",
    description: "Selección de cervezas Corona 5u",
    price: "15,5€"
  },
  {
    id: "cubo heineken",
    name: "Cubo Premium",
    description: "Selección de cervezas Heineken 5u",
    price: "14,30€"
  }
];

export const vinos: Drink[] = [
  {
    id: "Alma",
    name: "Alma",
    description: "Copa de vino alma.",
    price: "4,30€/18,30€"
  },
  {
    id: "Novio perfecto",
    name: "Novio perfecto",
    description: "Copa de Novio perfecto fresco.",
    price: "4,30€/18,30€"
  },
  {
    id: "Ribera del duero",
    name: "Ribera del duero",
    description: "Copa de Ribera del duero.",
    price: "4€/16€"
  }
];

export const batidos: Drink[] = [
  {
    id: "Fresa",
    name: "Fresa",
    description: "Batido de fresa.",
    price: "5,50€"
  },
  {
    id: "Vainilla",
    name: "Vainilla",
    description: "Batido de vainilla",
    price: "5,50€"
  },
   {
    id: "Chocolate",
    name: "Chocolate",
    description: "Batido de Chocolate",
    price: "5,50€"
  },
   {
    id: "Oreo",
    name: "Oreo",
    description: "Batido de galleta Oreo",
    price: "6,50€"
  },
   {
    id: "Kit Kat",
    name: "Kit Kat",
    description: "Batido de snack de Kit Kat",
    price: "6,50€"
  },
  
];

export const categorias = [
  { id: "cocteles", label: "Cócteles", to: "/cocteles", hint: "Firmas de autor", image: cocktail5 },
  { id: "cachimbas", label: "Cachimbas", to: "/cachimbas", hint: "Mezclas y premium", image: Kachimba },
  { id: "copas", label: "Copas", to: "/copas", hint: "Destilados premium", image: ron },
  { id: "cervezas", label: "Cervezas", to: "/cervezas", hint: "Tirada y botella", image: cerveza },
  { id: "refrescos", label: "Refrescos", to: "/refrescos", hint: "Bebidas sin alcohol", image: refresco },
  { id: "vinos", label: "Vinos", to: "/vinos", hint: "Dale un toque dulzón", image: vino },
  { id: "cubos", label: "Cubos", to: "/cubos", hint: "Cubos para compartir", image: cubo },
  { id: "batidos", label: "Batidos", to: "/batidos", hint: "Batidos para endulzar la tarde", image: batido },
] as const;
