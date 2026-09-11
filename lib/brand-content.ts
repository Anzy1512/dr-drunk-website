export const CONTACT_EMAIL = "Docdrunkofficial@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/docdrunk/";
export const TASTING_LINK = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Let’s plan a cocktail tasting")}&body=${encodeURIComponent("Hi Dr. Drunk,\n\nI’d love to discuss a bar experience.\n\nOccasion:\nEvent date:\nLocation:\nApproximate guests:\nOur favourite flavours:\n\nThank you!")}`;
export const cocktailCategories = [
  {
    id: "safe",
    label: "Play it safe",
    note: "Familiar spirits. A distinctly Dr. Drunk twist.",
    drinks: [
      {
        name: "Guava Island",
        ingredients: "Rum, pink guava, coconut cream, kaffir",
        tag: "TROPICAL",
      },
      { name: "Cgi Cgi", ingredients: "Gin, cucumber, lime", tag: "FRESH" },
      {
        name: "Mango Mangone",
        ingredients: "Gin, mango, Campari",
        tag: "FRUITY",
      },
    ],
  },
  {
    id: "spice",
    label: "Spice it up",
    note: "A little heat. A little intrigue. Plenty of character.",
    drinks: [
      { name: "Chai Whisky", ingredients: "Whisky, chai syrup", tag: "SPICED" },
      {
        name: "Pandan Peppercorn",
        ingredients: "Gin, pandan, peppercorn",
        tag: "AROMATIC",
      },
      {
        name: "Khatta Teekha Meetha",
        ingredients: "Whisky, tamarind, chilli",
        tag: "TANGY",
      },
    ],
  },
  {
    id: "world",
    label: "Around the world",
    note: "Flavours that travel well, wherever you celebrate.",
    drinks: [
      { name: "Cha Yen", ingredients: "Vodka, cha yen", tag: "THAILAND" },
      {
        name: "Caipirinha",
        ingredients: "Cachaça, sugar, lime",
        tag: "BRAZIL",
      },
      {
        name: "Beer Limoncello",
        ingredients: "Limoncello, honey, lemon, beer",
        tag: "ITALY",
      },
    ],
  },
  {
    id: "food",
    label: "Once was food",
    note: "A familiar flavour, reimagined for your glass.",
    drinks: [
      {
        name: "Som Tum Reserve",
        ingredients: "Vodka, papaya, chilli",
        tag: "SAVOURY",
      },
      {
        name: "Tom Yum",
        ingredients: "Vodka, lemongrass, galangal, kaffir, chilli",
        tag: "BOLD",
      },
      {
        name: "Tom Kha",
        ingredients: "Rum, coconut, galangal, kaffir",
        tag: "CREAMY",
      },
    ],
  },
  {
    id: "dessert",
    label: "Dessert drinks",
    note: "For the part of you that always orders dessert.",
    drinks: [
      {
        name: "Affogato “I forgot tho”",
        ingredients: "Kahlua, vodka, ice cream",
        tag: "COFFEE",
      },
      {
        name: "Rasmalai",
        ingredients: "Rasmalai soaked in Baileys and elaichi syrup",
        tag: "INDULGENT",
      },
      {
        name: "BOBA TEA",
        ingredients: "Baileys, double cream, Taiwanese tea, boba pearls",
        tag: "SWEET",
      },
    ],
  },
];
export const storyChapters = [
  {
    id: "date",
    number: "01",
    name: "The first date",
    title: "That first spark. In a glass.",
    description:
      "A favourite dessert. A café you still talk about. We start with your memory and build the flavours around it.",
    example:
      "First date over cheesecake? Think creamy, dessert-inspired, and a little nostalgic.",
    image: "/brand/couple.webp",
    alt: "A couple celebrating together with cocktails",
  },
  {
    id: "trip",
    number: "02",
    name: "The first trip",
    title: "A little taste of somewhere.",
    description:
      "The flavours, colours and feeling of a place you love can become a chapter on your menu.",
    example:
      "A first trip to Bali could inspire a tropical serve, with a little note sharing the memory.",
    image: "/gallery/event-32.webp",
    alt: "Green glassware and natural textures at an event bar",
  },
  {
    id: "proposal",
    number: "03",
    name: "The proposal",
    title: "Make the little things yours.",
    description:
      "Initialled stirrers, story-led coasters and a cocktail named for the big question. The details bring the chapter to life.",
    example:
      "Give the moment its own cocktail name, then let your guests discover the story behind it.",
    image: "/gallery/event-22.webp",
    alt: "A couple together at a decorated bar",
  },
];
