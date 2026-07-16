import cocktail1 from "@/assets/cocktail-1.jpg";
import cocktail2 from "@/assets/cocktail-2.jpg";
import cocktail3 from "@/assets/cocktail-3.jpg";
import cocktail4 from "@/assets/cocktail-4.jpg";
import cocktail5 from "@/assets/cocktail.jpg";
import BatidoChoco from "@/assets/BatidoChoco.jpeg";
import BatidoFresa from "@/assets/BatidoFresa.jpeg";
import BatidoVainilla from "@/assets/BatidoVainilla.jpeg";
import BatidoKitKat from "@/assets/BatidoKitKat.jpeg";
import BatidoLotus from "@/assets/BatidoLotus.jpeg";
import BatidoOreo from "@/assets/BatidoOreo.jpeg";

import Cocoloco from "@/assets/Cocoloco.jpeg";
import Margarita from "@/assets/Margarita.jpeg";
import Mojito from "@/assets/Mojito.jpeg";
import MojitoCoco from "@/assets/MojitoCoco.jpeg";
import MojitoItaliano from "@/assets/MojitoItaliano.jpeg";
import MojitoMango from "@/assets/MojitoMango.jpeg";
import PiñaColada from "@/assets/PiñaColada.jpeg";
import Bettisui from "@/assets/Bettisui.jpeg";
import Caribeño from "@/assets/caribeño.jpeg";
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
    id: "cocoloco",
    name: "Cocoloco ",
    price: "9€",
    image: Cocoloco,
    tagline: "Refrescante y tropical. Una mezcla luminosa que evoca al caribe. Ligero, aromático y perfecta combinación de sabores.",
    ingredients: ["Ron", "Licor de maracuyá", "Helado de coco", "Zumo de maracuyá"],
    profile: { sweetness: 4, alcohol: 2, freshness: 4 },
    pairings: ["Cachimba Premium Black", "Tabla de quesos"],
    featured: true,
  },
  {
    id: "Bettisui ",
    name: "Bettisui ",
    price: "8,30€",
    image: Bettisui,
    tagline: "Dulce, fresco y con un final herbal que aporta personalidad a cada sorbo. Perfecto para quienes buscan un sabor vibrante y diferente.",
    ingredients: ["Tequila fresa", "Pizca de jaggermaister", "Fresa "," Zumo de frutos rojos con açai"],
    profile: { sweetness: 4, alcohol: 3, freshness: 4 },
    pairings: ["Cachimba Premium Black", "Tabla de quesos"],
    featured: true,
  },
  {
    id: "caribeño",
    name: "El Caribeño",
    price: "8,30€",
    image: Caribeño,
    tagline: "Un viaje directo al Caribe en cada sorbo. La suavidad del ron añejo se fusiona con la cremosidad del coco, el dulzor natural de la piña y el toque exótico del maracuyá, creando un cóctel tropical, refrescante y lleno de sabor.",
    ingredients: ["Ron", "Coco", "Piña","maracuyá"],
    profile: { sweetness: 4, alcohol: 3, freshness: 4 },
    pairings: ["Cachimba Premium Black", "Tabla de quesos"],
    featured: true,
  },
  {
    id: "Piñada colada",
    name: "Piñada colada",
    price: "8,30€",
    image: PiñaColada,
    tagline: "Una versión tropical y cremosa de la clásica piña colada. El ron blanco se mezcla con crema de limón, puré de piña y puré de coco, mientras un delicado toque de canela aporta un final cálido y aromático.",
    ingredients: ["Ron blanco", "Crema de limón", "Puré de piña","Puré de coco"],
    profile: { sweetness: 5, alcohol: 2, freshness: 3 },
    pairings: ["Cachimba Premium Black", "Tabla de quesos"],
    featured: true,
  },
  {
    id: "mojito-bettore",
    name: "Mojito Clásico ",
    price: "7,50€",
    image: Mojito,
    tagline: "Un cóctel icónico de la coctelería cubana, símbolo de frescura y equilibrio. El Mojito Clásico combina la intensidad del ron blanco con la acidez del limón, la dulzura del azúcar de caña y el frescor aromático de la hierbabuena. Completado con agua con gas o soda, ofrece una sensación ligera, viva y refrescante que lo convierte en un imprescindible en cualquier carta.",
    ingredients: ["Ron", "Hierbabuena fresca", "Lima", "Azúcar de caña", "Sprite"],
    profile: { sweetness: 3, alcohol: 3, freshness: 5 },
    pairings: ["Cachimba Cítrica", "Nachos"],
  },
  {
    id: "Margarita",
    name: "Margarita",
    price: "7,50€",
    image: Margarita,
    tagline: "Refrescante, cítrica y con el inconfundible toque salino en el borde de la copa, es la elección perfecta para los amantes de los cócteles tradicionales.",
    ingredients: ["Tequila", "licor de naranja", "Zumo de lima"],
    profile: { sweetness: 2, alcohol: 4, freshness: 2 },
    pairings: ["Cachimba Cítrica", "Nachos"],
  },
  {
    id: "Mojito italiano",
    name: "Mojito italiano",
    price: "8,30€",
    image: MojitoItaliano,
    tagline: "Una refrescante versión del clásico mojito con un toque italiano. La combinación de limón, hierbabuena y un delicado licor italiano crea un cóctel fresco, aromático y equilibrado, con un final suave y muy refrescante. Ideal para disfrutar en cualquier momento.",
    ingredients: ["Ron", "Hierbabuena fresca", "Lima", "Azúcar de caña", "Sprite","Licor italiano"],
    profile: { sweetness: 2, alcohol: 3, freshness: 4 },
    pairings: ["Cachimba Cítrica", "Nachos"],
  },
  {
    id: "Mojito de coco",
    name: "Mojito de coco",
    price: "8,30€",
    image: MojitoCoco,
    tagline: "Una versión tropical del clásico mojito. La frescura de la hierbabuena y la lima se combina con la suavidad y cremosidad del coco, creando un cóctel equilibrado, refrescante y con un irresistible aire caribeño. Perfecto para quienes buscan un sabor exótico y diferente.",
    ingredients: ["Ron", "Hierbabuena fresca", "Lima", "Azúcar de caña", "Sprite","Crema de coco"],
    profile: { sweetness: 3, alcohol: 3, freshness: 4 },
    pairings: ["Cachimba Cítrica", "Nachos"],
  },
  {
    id: "Mojito de Mango",
    name: "Mojito de Mango",
    price: "8,30€",
    image: MojitoMango,
    tagline: "La frescura del mojito clásico se une al intenso sabor tropical del mango. Una combinación de lima, hierbabuena y mango que da como resultado un cóctel dulce, refrescante y lleno de aroma, perfecto para disfrutar de un toque exótico en cada sorbo.",
    ingredients: ["Ron", "Hierbabuena fresca", "Lima", "Azúcar de caña", "Sprite","Zumo de mango"],
    profile: { sweetness: 3, alcohol: 3, freshness: 4 },
    pairings: ["Cachimba Cítrica", "Nachos"],
  },
  

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
    price: "12€",
    featured: true,
  },
  {
    id: "carnival",
    name: "carnival",
    flavors: ["afrutadas", "dulces"],
    intensity: 4,
    description: "Mezcla de frutas exóticas",
    price: "12€",
    featured: true,
  },
  {
    id: "huracán",
    name: "huracán",
    flavors: ["afrutadas", "frescas"],
    intensity: 3,
    description: "Mezcla intensa y cremosa de frutas del bosque y frambuesa, acompañada de un toque refrescante",
    price: "12€",
  },
  {
    id: "kaffayayo",
    name: "kaffayayo",
    flavors: ["dulces","especiadas"],
    intensity: 3,
    description: "Ofrece una experiencia dulce y cremosa que recrea el sabor de los famosos bombones Raffaello.",
    price: "12€",
  },
  {
    id: "⁠blue yellow",
    name: "⁠blue yellow",
    flavors: ["afrutadas", "dulces"],
    intensity: 5,
    description: "Combina melones dulces con arándanos azules frescos.",
    price: "12€",
    featured: true,
  },
  {
    id: "love 66",
    name: "love 66",
    flavors: ["afrutadas", "premium"],
    intensity: 3,
    description: "Una mezcla tropical de maracuyá, melón, sandía y menta . Es refrescante y dulce a la vez.",
    price: "12€",
  },
  {
    id: "white cake",
    name: "white cake",
    flavors: ["especiadas", "dulces"],
    intensity: 4,
    description: "La tarta de queso de siempre",
    price: "12€",
  },
  {
    id: "kaktuz",
    name: "kaktuz",
    flavors: ["citricas", "premium"],
    intensity: 3,
    description: " Refrescante frescura con el hormigueo, sabor dulce y agrio de la pera espinosa.",
    price: "16€",
  },
  {
    id: "menta",
    name: "menta",
    flavors: ["frescas", "premium"],
    intensity: 5,
    description: "Intenso, herbáceo y dulce, caracterizado principalmente por una fuerte sensación de frescor",
    price: "12€",
  },
];

export type Drink = {
  id: string;
  name: string;
  description?: string;
  price: string;
  category: string;
};

export const copas: Drink[] = [
  // RON
  { id: "ron-legendario", name: "Ron Legendario", description: "Ron dulce y aromático con notas de vainilla.", price: "8€",category: "Ron" },
  { id: "ron-barcelo", name: "Ron Barceló", description: "Ron dominicano equilibrado y suave.", price: "8€",category: "Ron" },
  { id: "ron-brugal", name: "Ron Brugal", description: "Ron ligero con matices de madera.", price: "8€",category: "Ron" },
  { id: "ron-cacique", name: "Ron Cacique", description: "Ron venezolano con carácter y cuerpo.", price: "8€",category: "Ron" },
  { id: "ron-cacique-500", name: "Ron Cacique 500", description: "Ron premium añejo con notas tostadas.", price: "9€",category: "Ron" },
  { id: "ron-brugal-extraviejo", name: "Brugal Extra Viejo", description: "Ron añejo con sabor profundo y equilibrado.", price: "9€",category: "Ron" },
  { id: "ron-zacapa", name: "Ron Zacapa", description: "Ron premium guatemalteco con notas de caramelo y madera.", price: "13€",category: "Ron" },


  // GINEBRA
  { id: "gin-beefeater", name: "Beefeater", description: "Ginebra clásica inglesa con notas de enebro.", price: "8€", category: "Ginebra" },
  { id: "gin-seagrams", name: "Seagram's", description: "Ginebra suave con toque cítrico.", price: "8€", category: "Ginebra" },
  { id: "gin-larios", name: "Larios", description: "Ginebra mediterránea fresca y equilibrada.", price: "8€", category: "Ginebra" },
  { id: "gin-rives", name: "Rives", description: "Ginebra española aromática.", price: "8€", category: "Ginebra" },
  { id: "gin-bombay", name: "Bombay", description: "Ginebra premium con botánicos seleccionados.", price: "8€", category: "Ginebra" },
  { id: "gin-puerto-indias-fresa", name: "Puerto de Indias Fresa", description: "Ginebra afrutada con aroma dulce de fresa.", price: "8€", category: "Ginebra" },
  { id: "gin-puerto-indias-mango", name: "Puerto de Indias Mango", description: "Ginebra tropical con notas de mango.", price: "8€", category: "Ginebra" },
  { id: "gin-puerto-indias-melon", name: "Puerto de Indias Melón", description: "Ginebra fresca con sabor a melón.", price: "8€", category: "Ginebra" },
  { id: "gin-nordes", name: "Nordés", description: "Ginebra gallega floral y elegante.", price: "11€", category: "Ginebra" },
  { id: "gin-martin-miller", name: "Martin Miller's", description: "Ginebra premium fresca y refinada.", price: "11€", category: "Ginebra" },
  { id: "gin-gvine", name: "G'Vine", description: "Ginebra francesa floral con uva verde.", price: "13€", category: "Ginebra" },


  // WHISKEY
  { id: "whisky-red-label", name: "Red Label", description: "Whisky escocés intenso y especiado.", price: "8€", category: "Whisky" },
  { id: "whisky-white-label", name: "White Label", description: "Whisky suave y equilibrado.", price: "8€", category: "Whisky" },
  { id: "whisky-jameson", name: "Jameson", description: "Whisky irlandés suave con notas dulces.", price: "8€", category: "Whisky" },
  { id: "whisky-cutty-sark", name: "Cutty Sark", description: "Whisky escocés ligero y fresco.", price: "8€", category: "Whisky" },
  { id: "whisky-dyc", name: "DYC", description: "Whisky español clásico.", price: "8€", category: "Whisky" },
  { id: "whisky-dyc-8", name: "DYC 8", description: "Whisky añejado con mayor cuerpo.", price: "8,5€", category: "Whisky" },
  { id: "whisky-jb", name: "J&B", description: "Whisky escocés suave y afrutado.", price: "8€", category: "Whisky" },
  { id: "whisky-ballantines", name: "Ballantine's", description: "Whisky escocés equilibrado y suave.", price: "8€", category: "Whisky" },
  { id: "whisky-jack-manzana", name: "Jack Daniel's Apple", description: "Whisky americano con toque fresco de manzana.", price: "9,5€", category: "Whisky" },
  { id: "whisky-jack-miel", name: "Jack Daniel's Honey", description: "Whisky americano dulce con miel.", price: "9,5€", category: "Whisky" },
  { id: "whisky-black-label", name: "Black Label", description: "Whisky premium con notas ahumadas.", price: "11,5€", category: "Whisky" },
  { id: "whisky-cardhu", name: "Cardhu", description: "Single malt suave y elegante.", price: "12€", category: "Whisky" },
  { id: "whisky-macallan-12", name: "Macallan 12", description: "Single malt premium con notas de jerez.", price: "16,50€", category: "Whisky" },
  { id: "whisky-lagavulin", name: "Lagavulin", description: "Whisky ahumado de gran personalidad.", price: "18€", category: "Whisky" },
  { id: "whisky-blue-label", name: "Blue Label", description: "Whisky escocés ultra premium.", price: "35€", category: "Whisky" },


  // VODKA
  { id: "vodka-eristoff", name: "Eristoff", description: "Vodka limpio y equilibrado.", price: "8€", category: "Vodka" },
  { id: "vodka-absolut", name: "Absolut", description: "Vodka sueco suave y versátil.", price: "8€", category: "Vodka" },


  // PREMIUM EXISTENTES
    {
    id: "licor-baileys",
    name: "Baileys",
    description: "Crema irlandesa suave y cremosa.",
    price: "6,5€",
    category: "Licores",
  },
  {
    id: "licor-jagermeister",
    name: "Jägermeister",
    description: "Licor alemán de hierbas con sabor intenso.",
    price: "8€",
    category: "Licores",
  },
  {
    id: "licor-hierbas",
    name: "Licor de Hierbas",
    description: "Licor digestivo de hierbas aromáticas.",
    price: "3,80€",
    category: "Licores",
  },
  {
    id: "martini-bianco",
    name: "Martini Bianco",
    description: "Vermut blanco italiano, suave y aromático.",
    price: "5€",
    category: "Licores",
  },
  {
    id: "martini-rosso",
    name: "Martini Rosso",
    description: "Vermut rojo italiano con notas especiadas.",
    price: "5€",
    category: "Licores",
  },
  {
    id: "crema-orujo",
    name: "Crema de Orujo",
    description: "Licor cremoso elaborado con orujo gallego.",
    price: "3,80€",
    category: "Licores",
  },

  // CHUPITOS
  {
    id: "chupito-tequila",
    name: "Tequila",
    description: "Chupito clásico.",
    price: "3€",
    category: "Chupitos",
  },
  {
    id: "chupito-jager",
    name: "Jägermeister",
    description: "Licor de hierbas alemán.",
    price: "3€",
    category: "Chupitos",
  },
  {
    id: "chupito-licor43",
    name: "Licor 43",
    description: "Licor español.",
    price: "3€",
    category: "Chupitos",
  },
  {
    id: "chupito-ruavieja",
    name: "Ruavieja",
    description: "Licor de hierbas.",
    price: "3€",
    category: "Chupitos",
  },
  {
    id: "chupito-orujo",
    name: "Orujo",
    description: "Aguardiente tradicional.",
    price: "3€",
    category: "Chupitos",
  },
  {
    id: "chupito-pacharan",
    name: "Pacharán",
    description: "Licor de endrinas.",
    price: "3€",
    category: "Chupitos",
  },
  {
    id: "chupito-absenta",
    name: "Absenta",
    description: "Licor anisado de alta graduación.",
    price: "4€",
    category: "Chupitos",
  },
  {
    id: "chupito-vodka",
    name: "Vodka",
    description: "Vodka frío.",
    price: "3€",
    category: "Chupitos",
  },
];

export const cervezas: Drink[] = [
  { id: "Alhambra", name: "Alhambra", description: "Tercio 33cl.", price: "4,20€", category: "Cerveza"  },
  { id: "Corona", name: "Corona", description: "Tercio 33cl.", price: "3,80€", category: "Cerveza"   },
  { id: "Mahou", name: "Mahou", description: "Tercio 33cl.", price: "3,80€", category: "Cerveza"  },
  { id: "Radler", name: "Radler", description: "Tercio 33cl.", price: "3,80€", category: "Cerveza"  },
  { id: "Mahou 0,0 tostada", name: "Mahou 0,0 tostada", description: "Tercio 33cl.", price: "3,80€", category: "Cerveza 0.0"  },
];

export const refrescos: Drink[] = [
  // REFRESCOS
  { 
    id: "redbull", 
    name: "Red Bull", 
    description: "Bebida energética original.", 
    price: "3,50€",
    category:"Refresco"
  },

  { 
    id: "coca-cola", 
    name: "Coca-Cola", 
    description: "Refresco de cola clásico.", 
    price: "3,30€",
    category:"Refresco" 
  },

  { 
    id: "fanta", 
    name: "Fanta", 
    description: "Refresco de naranja refrescante.", 
    price: "3,30€",
    category:"Refresco"
  },

  { 
    id: "schweppes", 
    name: "Schweppes", 
    description: "Tónica y refrescos Schweppes.", 
    price: "3,30€",
    category:"Refresco" 
  },

  { 
    id: "trina", 
    name: "Trina", 
    description: "Refresco suave sin burbujas.", 
    price: "3,30€",
    category:"Refresco" 
  },

  { 
    id: "aquarius", 
    name: "Aquarius", 
    description: "Bebida isotónica refrescante.", 
    price: "3,30€",
    category:"Refresco" 
  },

  { 
    id: "agua-con-gas", 
    name: "Agua con gas", 
    description: "Agua mineral con gas.", 
    price: "3,30€",
    category:"Refresco" 
  },

  { 
    id: "nestea-maracuya", 
    name: "Nestea Maracuyá", 
    description: "Té frío con sabor tropical.", 
    price: "3,30€",
    category:"Refresco" 
  },
  
  { 
    id: "nestea-limon", 
    name: "Nestea Limon", 
    description: "Té frío con un ligero toque a limon.", 
    price: "3,30€",
    category:"Refresco" 
  },

  { 
    id: "nestea-frutos-rojos", 
    name: "Nestea Frutos Rojos", 
    description: "Té frío con sabor a frutos rojos.", 
    price: "3,30€",
    category:"Refresco" 
  },


  // ZUMOS
  { 
    id: "zumo-melocoton", 
    name: "Zumo de Melocotón", 
    description: "Zumo dulce y afrutado.", 
    price: "2,50€",
    category:"Zumo"  
  },

  { 
    id: "zumo-manzana", 
    name: "Zumo de Manzana", 
    description: "Zumo suave y refrescante.", 
    price: "2,50€",
    category:"Zumo"  
  },

  { 
    id: "zumo-naranja", 
    name: "Zumo de Naranja", 
    description: "Sabor natural y cítrico.", 
    price: "2,50€",
    category:"Zumo"  
  },

  { 
    id: "zumo-pina", 
    name: "Zumo de Piña", 
    description: "Zumo tropical dulce y fresco.", 
    price: "2,50€",
    category:"Zumo"  
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
    name: "Cubo Corona",
    description: "Selección de cervezas Corona 5u",
    price: "15,5€"
  },
  
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

export const batidos = [
  {
    id: "oreo",
    name: "Batido Oreo",
    price: "6,50 €",
    image: BatidoOreo,
    description: "Cremoso batido de Oreo con nata montada y galleta triturada.",
    ingredients: [
      "Leche",
      "Helado de vainilla",
      "Oreo",
      "Nata"
    ],
  },
  {
    id: "kit-kat",
    name: "Batido Kit Kat",
    price: "6,50 €",
    image: BatidoKitKat,
    description:
      "Un batido cremoso con todo el sabor del chocolate y el inconfundible toque crujiente de Kit Kat. Dulce, intenso e irresistible.",
    ingredients: [
      "Leche",
      "Helado de vainilla",
      "Kit Kat",
      "Nata montada",
    ],
  },
  {
    id: "lotus",
    name: "Batido Lotus",
    price: "6,50 €",
    image: BatidoLotus,
    description:
      "La cremosidad del helado se une al característico sabor caramelizado de las galletas Lotus para crear un batido único y delicioso.",
    ingredients: [
      "Leche",
      "Helado de vainilla",
      "Crema Lotus",
      "Galleta Lotus",
      "Nata montada",
    ],
  },
  {
    id: "chocolate",
    name: "Batido de Chocolate",
    price: "5,50 €",
    image: BatidoChoco,
    description:
      "Un clásico para los amantes del cacao. Cremoso, intenso y coronado con nata para una experiencia irresistible.",
    ingredients: [
      "Leche",
      "Helado de chocolate",
      "Sirope de chocolate",
      "Nata montada",
    ],
  },
  {
    id: "vainilla",
    name: "Batido de Vainilla",
    price: "5,50 €",
    image: BatidoVainilla,
    description:
      "Suave, cremoso y con el delicado aroma de la vainilla. Un clásico atemporal perfecto para cualquier momento.",
    ingredients: [
      "Leche",
      "Helado de vainilla",
      "Nata montada",
    ],
  },
  {
    id: "fresa",
    name: "Batido de Fresa",
    price: "5,50 €",
    image: BatidoFresa,
    description:
      "Refrescante y cremoso, elaborado con el dulce sabor de la fresa para un batido ligero, afrutado y delicioso.",
    ingredients: [
      "Leche",
      "Helado de fresa",
      "Sirope de fresa",
      "Nata montada",
    ],
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
