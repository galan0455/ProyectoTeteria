import cocktail1 from "@/assets/cocktail-1.jpg";
import cocktail2 from "@/assets/cocktail-2.jpg";
import cocktail3 from "@/assets/cocktail-3.jpg";
import cocktail4 from "@/assets/cocktail-4.jpg";

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
    id: "old-fashioned-bettore",
    name: "Old Fashioned Bettore",
    price: "10€",
    image: cocktail1,
    tagline: "Bourbon ahumado, azúcar moreno y un toque de naranja quemada.",
    ingredients: ["Bourbon Woodford", "Azúcar moreno", "Angostura", "Naranja quemada"],
    profile: { sweetness: 2, alcohol: 5, freshness: 1 },
    pairings: ["Cachimba Premium Black", "Tabla de quesos"],
    featured: true,
  },
  {
    id: "rosa-bettore",
    name: "Rosa Bettore",
    price: "9€",
    image: cocktail2,
    tagline: "Vodka premium, arándanos y un susurro cítrico.",
    ingredients: ["Vodka Grey Goose", "Arándano", "Lima", "Cointreau"],
    profile: { sweetness: 4, alcohol: 3, freshness: 3 },
    pairings: ["Cachimba Afrutada", "Frutos rojos"],
    featured: true,
  },
  {
    id: "mojito-bettore",
    name: "Mojito Bettore",
    price: "8€",
    image: cocktail3,
    tagline: "Hierbabuena fresca del huerto y ron añejo cubano.",
    ingredients: ["Ron Havana 7", "Hierbabuena", "Lima", "Azúcar", "Soda"],
    profile: { sweetness: 3, alcohol: 3, freshness: 5 },
    pairings: ["Cachimba Cítrica", "Nachos"],
  },
  {
    id: "negroni-dorato",
    name: "Negroni Dorato",
    price: "10€",
    image: cocktail4,
    tagline: "Amargo, profundo y elegante. La firma de la casa.",
    ingredients: ["Gin Tanqueray Ten", "Campari", "Vermouth rosso", "Naranja"],
    profile: { sweetness: 2, alcohol: 5, freshness: 2 },
    pairings: ["Cachimba Especiada", "Aceitunas premium"],
    featured: true,
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
    id: "bettore-gold",
    name: "Bettore Gold",
    flavors: ["premium", "afrutadas"],
    intensity: 5,
    description: "Mezcla exclusiva de la casa con notas de melocotón, maracuyá y un cierre tostado.",
    price: "22€",
    featured: true,
  },
  {
    id: "tropical-sunset",
    name: "Tropical Sunset",
    flavors: ["afrutadas", "dulces"],
    intensity: 3,
    description: "Mango, piña y un fondo dulce de coco. Verano embotellado.",
    price: "16€",
    featured: true,
  },
  {
    id: "citrus-storm",
    name: "Citrus Storm",
    flavors: ["citricas", "frescas"],
    intensity: 4,
    description: "Limón siciliano, pomelo y menta polar. Despierta el paladar.",
    price: "16€",
  },
  {
    id: "polar-mint",
    name: "Polar Mint",
    flavors: ["frescas"],
    intensity: 2,
    description: "Hielo, menta y eucalipto. La opción más limpia del menú.",
    price: "15€",
  },
  {
    id: "berry-kiss",
    name: "Berry Kiss",
    flavors: ["afrutadas", "dulces"],
    intensity: 3,
    description: "Frutos rojos, grosella y un toque de vainilla.",
    price: "16€",
    featured: true,
  },
  {
    id: "spiced-oud",
    name: "Spiced Oud",
    flavors: ["especiadas", "premium"],
    intensity: 5,
    description: "Cardamomo, canela y madera de oud. Para paladares expertos.",
    price: "20€",
  },
  {
    id: "lemon-haze",
    name: "Lemon Haze",
    flavors: ["citricas", "dulces"],
    intensity: 3,
    description: "Limón confitado con un fondo de caramelo suave.",
    price: "15€",
  },
];

export type Drink = {
  id: string;
  name: string;
  description?: string;
  price: string;
};

export const copas: Drink[] = [
  { id: "gin-hendricks", name: "Gin Hendrick's", description: "Pepino, rosa y tónica premium.", price: "9€" },
  { id: "gin-tanqueray", name: "Gin Tanqueray Ten", description: "Cítricos frescos y enebro.", price: "9€" },
  { id: "vodka-grey-goose", name: "Vodka Grey Goose", description: "Suavidad francesa.", price: "10€" },
  { id: "ron-zacapa", name: "Ron Zacapa 23", description: "Añejo guatemalteco con notas de caramelo.", price: "12€" },
  { id: "whisky-jw-black", name: "JW Black Label", description: "Ahumado y especiado.", price: "9€" },
  { id: "whisky-macallan", name: "Macallan 12", description: "Single malt con jerez.", price: "13€" },
  { id: "tequila-patron", name: "Tequila Patrón Silver", description: "Agave puro, perfil limpio.", price: "10€" },
];

export const cervezas: Drink[] = [
  { id: "mahou-cinco", name: "Mahou 5 Estrellas", description: "Caña 25cl.", price: "2,80€" },
  { id: "estrella-galicia", name: "Estrella Galicia", description: "Tercio 33cl.", price: "3,20€" },
  { id: "alhambra-reserva", name: "Alhambra Reserva 1925", description: "Lager intensa, 33cl.", price: "3,80€" },
  { id: "voll-damm", name: "Voll-Damm", description: "Doble malta, 33cl.", price: "3,60€" },
  { id: "heineken", name: "Heineken", description: "Tercio 33cl.", price: "3,40€" },
  { id: "corona", name: "Corona Extra", description: "Servida con lima, 33cl.", price: "3,80€" },
  { id: "1906", name: "1906 Reserva Especial", description: "Tercio 33cl.", price: "3,80€" },
];

export const refrescos: Drink[] = [
  { id: "coca-cola", name: "Coca-Cola", price: "2,50€" },
  { id: "coca-cola-zero", name: "Coca-Cola Zero", price: "2,50€" },
  { id: "fanta-naranja", name: "Fanta Naranja", price: "2,50€" },
  { id: "fanta-limon", name: "Fanta Limón", price: "2,50€" },
  { id: "sprite", name: "Sprite", price: "2,50€" },
  { id: "nestea", name: "Nestea", price: "2,50€" },
  { id: "aquarius-naranja", name: "Aquarius Naranja", price: "2,80€" },
  { id: "agua", name: "Agua mineral 50cl", price: "1,80€" },
  { id: "agua-grande", name: "Agua mineral 1L", price: "2,80€" },
  { id: "tonica-schweppes", name: "Tónica Schweppes Premium", price: "3,20€" },
  { id: "red-bull", name: "Red Bull", price: "3,80€" },
];

export const categorias = [
  { id: "cocteles", label: "Cócteles", to: "/cocteles", hint: "Firmas de autor" },
  { id: "cachimbas", label: "Cachimbas", to: "/cachimbas", hint: "Mezclas y premium" },
  { id: "copas", label: "Copas", to: "/copas", hint: "Destilados premium" },
  { id: "cervezas", label: "Cervezas", to: "/cervezas", hint: "Tirada y botella" },
  { id: "refrescos", label: "Refrescos", to: "/refrescos", hint: "Bebidas sin alcohol" },
  { id: "recomendaciones", label: "Recomendaciones", to: "/recomendaciones", hint: "Lo que pide el local" },
] as const;
