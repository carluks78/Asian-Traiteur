export interface MenuItemData {
  id: number;
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  badge?: string;
  spicy?: boolean;
}

export interface MenuSectionData {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItemData[];
}

export const MENU_SECTIONS: MenuSectionData[] = [
  {
    id: "nems",
    title: "Nems",
    subtitle: "Frits maison — offre 5 achetés + 1 offert",
    items: [
      { id: 1, name: "Nems aux Crevettes & Porc", description: "Croustillants rouleaux de printemps farcis aux crevettes fraîches et porc fondant, dorés à la perfection", price: "0,90 €", priceNote: "/ pièce", badge: "Bestseller" },
      { id: 2, name: "Nems au Porc", description: "Nems traditionnels aux lardons de porc marinés, légumes croquants et vermicelles de riz", price: "0,90 €", priceNote: "/ pièce" },
    ],
  },
  {
    id: "vapeurs",
    title: "Dim Sum & Vapeurs",
    subtitle: "Cuits vapeur — offre 5 achetés + 1 offert",
    items: [
      { id: 3, name: "Ravioli au Poulet", description: "Raviolis vapeur garnis de poulet haché aux herbes fraîches, servis avec sauce soja maison", price: "0,90 €", priceNote: "/ pièce" },
      { id: 4, name: "Ravioli Saint-Jacques", description: "Délicats raviolis à la coquille Saint-Jacques pochée, aromatisés au gingembre et ciboulette", price: "0,90 €", priceNote: "/ pièce", badge: "Spécialité" },
      { id: 5, name: "Bouchée aux Crevettes", description: "Bouchées vapeur farcies aux crevettes entières, légèrement citronnées et parfumées à la citronnelle", price: "0,90 €", priceNote: "/ pièce" },
    ],
  },
  {
    id: "fritures",
    title: "Fritures",
    subtitle: "Frits à la commande — croustillants garantis",
    items: [
      { id: 6, name: "Beignets de Crevettes", description: "Grosses crevettes enrobées d'une pâte légère et croustillante, servies avec sauce aigre-douce", price: "0,90 €", priceNote: "/ pièce" },
      { id: 7, name: "Wontons Frits", description: "Petits triangles de pâte farcis au porc et fromage frais, frits jusqu'à coloration dorée", price: "0,90 €", priceNote: "/ pièce", badge: "Maison" },
      { id: 8, name: "Tofu Frit", description: "Cubes de tofu ferme frits en tempura légère, servis avec sauce soja et sésame grillé", price: "1,20 €", priceNote: "/ 100 g" },
    ],
  },
  {
    id: "plats-poulet",
    title: "Plats au Poulet",
    subtitle: "Pesés et servis à la demande — prix au 100 g",
    items: [
      { id: 9, name: "Poulet Thaï", description: "Poulet sauté au wok à la sauce Thaï, piment doux, basilic thaï et légumes colorés", price: "2,50 €", priceNote: "/ 100 g", badge: "Coup de cœur", spicy: true },
      { id: 10, name: "Poulet à la Citronnelle", description: "Émincé de poulet mariné à la citronnelle, galanga et feuilles de citron kaffir", price: "2,00 €", priceNote: "/ 100 g", spicy: true },
      { id: 11, name: "Poulet Sauce Soja", description: "Poulet mijoté en sauce soja, miel et gingembre, caramélisé au wok sur lit de légumes", price: "2,00 €", priceNote: "/ 100 g" },
    ],
  },
  {
    id: "plats-boeuf",
    title: "Plats au Bœuf",
    subtitle: "Pesés et servis à la demande — prix au 100 g",
    items: [
      { id: 12, name: "Bœuf aux Légumes", description: "Émincé de bœuf tendre sauté aux brocolis, carottes et poivrons dans une sauce soja légère", price: "2,00 €", priceNote: "/ 100 g" },
      { id: 13, name: "Bœuf Laqué", description: "Bœuf mijoté en sauce laquée sucrée-salée au miel et cinq épices, fondant en bouche", price: "2,00 €", priceNote: "/ 100 g", badge: "Maison" },
      { id: 14, name: "Bœuf au Curry", description: "Bœuf mijoté au curry jaune, lait de coco, pommes de terre et poivrons — saveur thaïe douce", price: "2,50 €", priceNote: "/ 100 g", spicy: true },
    ],
  },
  {
    id: "plats-porc",
    title: "Plats au Porc & Canard",
    subtitle: "Pesés et servis à la demande — prix au 100 g",
    items: [
      { id: 15, name: "Porc Sauce Soja", description: "Porc mariné à la sauce soja et gingembre, caramélisé au wok avec oignons et ciboulette", price: "2,00 €", priceNote: "/ 100 g" },
      { id: 16, name: "Canard Laqué", description: "Canard laqué à la pékinoise, peau croustillante et chair juteuse — recette maison transmise de génération en génération", price: "2,00 €", priceNote: "/ 100 g", badge: "Signature" },
      { id: 17, name: "Porc au Caramel", description: "Joue de porc braisée en sauce caramel de coco, très fondante, relevée de cinq épices", price: "2,00 €", priceNote: "/ 100 g" },
    ],
  },
  {
    id: "fruits-de-mer",
    title: "Fruits de Mer",
    subtitle: "Pesés et servis à la demande — prix au 100 g",
    items: [
      { id: 18, name: "Crevettes Sautées", description: "Grosses crevettes décortiquées sautées à l'ail, huile de sésame et sauce d'huître", price: "4,00 €", priceNote: "/ 100 g" },
      { id: 19, name: "Crevettes à la Sauce", description: "Crevettes royales en sauce tomate épicée au curry rouge, noix de coco et citronnelle", price: "4,80 €", priceNote: "/ 100 g", spicy: true },
      { id: 20, name: "Calamars Sautés", description: "Anneaux de calamar tendres sautés au poivre noir, ail, sauce huître et piments verts", price: "3,50 €", priceNote: "/ 100 g", spicy: true },
    ],
  },
  {
    id: "accompagnements",
    title: "Riz & Nouilles",
    subtitle: "Pesés et servis à la demande — prix au 100 g",
    items: [
      { id: 21, name: "Riz Cantonnais", description: "Riz sauté aux œufs, petits pois, carottes, jambon et crevettes — la recette classique de Canton", price: "1,00 €", priceNote: "/ 100 g", badge: "Classique" },
      { id: 22, name: "Riz Frit", description: "Riz sauté au wok, légumes de saison, sauce soja et œuf brouillé — saveur umami authentique", price: "1,00 €", priceNote: "/ 100 g" },
      { id: 23, name: "Nouilles Sautées", description: "Nouilles de riz sautées aux légumes croquants, porc ou crevettes, sauce soja et huile de sésame", price: "1,20 €", priceNote: "/ 100 g" },
      { id: 24, name: "Nouilles aux Fruits de Mer", description: "Larges nouilles sautées aux crevettes, calamars, poivrons et pousses de soja en sauce parfumée", price: "1,20 €", priceNote: "/ 100 g" },
    ],
  },
  {
    id: "sushi-maki",
    title: "Sushis & Makis",
    subtitle: "Préparés à la commande — offre plateau disponible",
    items: [
      { id: 25, name: "Maki Saumon", description: "Rouleau de riz vinaigré au saumon frais, enroulé d'algue nori croustillante", price: "1,50 €", priceNote: "/ pièce", badge: "Fresh" },
      { id: 26, name: "Maki Thon", description: "Rouleau classique au thon rouge, riz à sushi et algue nori — accompagné de wasabi et gingembre", price: "1,50 €", priceNote: "/ pièce" },
      { id: 27, name: "Nigiri Crevette", description: "Boulette de riz pressé surmontée d'une crevette entière pochée, légèrement sucrée", price: "1,80 €", priceNote: "/ pièce" },
      { id: 28, name: "California Roll", description: "Rouleau inversé au crabe, avocat et concombre — garni de tobiko et sauce sriracha mayo", price: "2,00 €", priceNote: "/ pièce", badge: "Spécialité" },
    ],
  },
  {
    id: "rouleaux",
    title: "Rouleaux de Printemps",
    subtitle: "Frais et légers — à consommer le jour même",
    items: [
      { id: 29, name: "Rouleau Crevettes & Menthe", description: "Galette de riz fraîche garnie de crevettes, vermicelles, menthe fraîche et pousses de soja", price: "2,50 €", priceNote: "/ pièce", badge: "Frais" },
      { id: 30, name: "Rouleau Poulet & Avocat", description: "Rouleau printanier au poulet rôti, avocat crémeux, carottes et coriandre fraîche", price: "2,50 €", priceNote: "/ pièce" },
      { id: 31, name: "Rouleau Végétarien", description: "Galette de riz aux légumes croquants de saison, tofu soyeux et herbes aromatiques fraîches", price: "2,20 €", priceNote: "/ pièce" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts & Confiseries",
    subtitle: "Douceurs artisanales d'Asie",
    items: [
      { id: 32, name: "Nougat Chinois", description: "Nougat traditionnel aux noix de cajou, sésame et lait concentré sucré — douceur fondante artisanale", price: "5,00 €", priceNote: "/ pièce", badge: "Artisanal" },
      { id: 33, name: "Gingembre Confit", description: "Racines de gingembre confites au sirop de sucre, légèrement épicées — idéal pour la digestion", price: "5,00 €", priceNote: "/ pièce" },
      { id: 34, name: "Mochi Glacé", description: "Petites boulettes de pâte de riz fourrées à la crème glacée — parfums mangue, sésame ou thé matcha", price: "2,00 €", priceNote: "/ pièce", badge: "Nouveauté" },
    ],
  },
];
