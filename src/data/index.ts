interface ProductType {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export const productsData: ProductType[] = [
  {
    id: 1,
    image: "/products/creatine.png",
    title: "Creatine",
    description: "Creatine 250 g creapure",
    price: 39,
  },
  {
    id: 2,
    image: "/products/pre-workout.png",
    title: "Pre-Workout Haze",
    description: "Pre-Workout 300g",
    price: 79,
  },
  {
    id: 3,
    image: "/products/whey.png",
    title: "Whey Protein",
    description: "Whey Protein 80% - 1KG",
    price: 99,
  },
  {
    id: 4,
    image: "/products/protein_bar.png",
    title: "Protein Bar",
    description: "Protein bar 40g",
    price: 29,
  },
  {
    id: 5,
    image: "/products/omega.png",
    title: "Omega 3",
    description: "Omega3 - 75 Capsules",
    price: 59,
  },
  {
    id: 6,
    image: "/products/vitamin.png",
    title: "Vitamin D3",
    description: "60 Capsules 2,000 IU per capsule",
    price: 36,
  },
  {
    id: 7,
    image: "/products/multimax.png",
    title: "Multimax Complex",
    description: "90 Capsules Source of vitamins and minerals",
    price: 45,
  },
  {
    id: 8,
    image: "/products/vitaminc.png",
    title: "Vitamin C",
    description: "500Mg Antioxidant and source of vitamins C",
    price: 24,
  },
  {
    id: 9,
    image: "/products/hypercaloric.png",
    title: "Hypercaloric",
    description: "Super Gainers - 3Kg Vanilla flavor",
    price: 86,
  },
  {
    id: 10,
    image: "/products/gel.png",
    title: "Pre-Workout Gel",
    description: "Horus Pre-workout gel, Red Fruit flavor",
    price: 59,
  },
];
