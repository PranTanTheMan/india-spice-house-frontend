const siteUrl = "https://www.indiaspicehouseep.com";

const orderLink =
  "https://order.toasttab.com/online/india-spice-house-8445-joiner-way";

const businessInfo = {
  name: "India Spice House",
  tagline: "Indian restaurant and grocery store in Eden Prairie, Minnesota.",
  description:
    "India Spice House serves Indian restaurant favorites, South Indian tiffins, biryanis, vegetarian dishes, catering, and Indian groceries in Eden Prairie, Minnesota.",
  siteUrl,
  orderLink,
  address: {
    street: "8445 Joiner Way",
    city: "Eden Prairie",
    state: "MN",
    zip: "55344",
    country: "US",
    label: "8445 Joiner Way, Eden Prairie, MN 55344",
  },
  restaurantPhone: "(952) 942-8010",
  groceryPhone: "(952) 942-7510",
  whatsappPhone: "16122937478",
  email: "indiaspicehouseep@gmail.com",
  facebook: "https://www.facebook.com/indiaspicehouseep",
  cuisine: ["Indian", "South Indian", "Curry", "Tandoori", "Vegetarian"],
  hours: {
    grocery: [
      "Monday - Friday: 11:00 AM - 9:00 PM",
      "Saturday - Sunday: 10:00 AM - 9:00 PM",
    ],
    restaurant: [
      "Monday - Friday lunch: 11:30 AM - 2:30 PM",
      "Saturday - Sunday lunch: 11:30 AM - 3:30 PM",
      "Monday - Thursday dinner: 5:00 PM - 9:30 PM",
      "Friday - Saturday dinner: 5:00 PM - 10:00 PM",
      "Sunday dinner: 5:00 PM - 9:00 PM",
    ],
  },
  deliveryLinks: [
    {
      name: "Grubhub",
      href: "https://www.grubhub.com/restaurant/india-spice-house-8445-joiner-way-eden-prairie/336713?proof=true",
      logo: "/grubhub.png",
    },
    {
      name: "DoorDash",
      href: "https://www.doordash.com/store/india-spice-house-eden-prairie-27642/20011012/",
      logo: "/doordash.png",
    },
    {
      name: "Uber Eats",
      href: "https://www.ubereats.com/store/india-spice-house-restaurant/Cy76oYVZTLWsC0uR9qOAnA?diningMode=DELIVERY&ps=1",
      logo: "/ubereats.png",
    },
  ],
};

const menuSections = [
  {
    name: "Vegetarian Appetizers",
    description:
      "Crispy snacks, Indo-Chinese starters, and paneer dishes to begin the meal.",
    items: [
      {
        name: "Vegetable Pakoda",
        description:
          "Mixed vegetables dipped in chickpea and rice flour batter, then deep-fried.",
      },
      {
        name: "Vegetable Samosa",
        description:
          "Crispy patties stuffed with potatoes, peas, herbs, and spices.",
      },
      {
        name: "Gobi Manchuria",
        description: "Cauliflower tossed in a sweet and spicy Manchurian sauce.",
      },
      {
        name: "Paneer 65",
        description:
          "Bite-sized paneer cooked with curry leaves, chilies, and spices.",
      },
    ],
  },
  {
    name: "Non-Vegetarian Appetizers",
    description:
      "Spiced chicken, seafood, and goat starters with South Indian and Indo-Chinese flavors.",
    items: [
      {
        name: "Chicken 65",
        description:
          "Chicken marinated in Indian spices and sauteed with ginger, garlic, and onions.",
      },
      {
        name: "Chilli Chicken",
        description:
          "Spicy boneless chicken with onions, capsicum, and red chilies.",
      },
      {
        name: "Chicken 555",
        description: "Deep-fried boneless chicken in a special cashew sauce.",
      },
      {
        name: "Apollo Fish",
        description:
          "Spiced, batter-coated fish tossed with house-made spices.",
      },
      {
        name: "Prawns 65",
        description:
          "Shrimp cooked with curry leaves, chilies, and a special sauce.",
      },
    ],
  },
  {
    name: "Tandoor & Grill",
    description:
      "Paneer, chicken, shrimp, and kababs cooked with herbs and spices.",
    items: [
      {
        name: "Paneer Tikka",
        description: "Paneer marinated with fresh herbs and grilled.",
      },
      {
        name: "Tandoori Chicken",
        description:
          "Chicken marinated overnight in yogurt, herbs, and spices, then cooked in the tandoor.",
      },
      {
        name: "Chicken Tikka",
        description: "Marinated chicken grilled with fresh herbs and spices.",
      },
      {
        name: "Tandoori Shrimp",
        description:
          "Shrimp marinated with yogurt, herbs, and spices, then cooked on skewers.",
      },
    ],
  },
  {
    name: "South Indian Tiffins",
    description: "Idly, vada, dosas, and South Indian combinations.",
    items: [
      {
        name: "Babai Idly",
        description: "Steamed rice and lentil patties served with chutneys.",
      },
      {
        name: "Medu Vada",
        description: "Deep-fried lentil donuts served with chutneys and sambar.",
      },
      {
        name: "Plain Dosa",
        description: "Thin rice crepe served with chutneys and sambar.",
      },
      {
        name: "Masala Dosa",
        description:
          "Rice crepe filled with house masala and served with chutneys and sambar.",
      },
      {
        name: "South Indian Combo",
        description: "Mini masala dosa, idly, and vada with chutneys and sambar.",
      },
    ],
  },
  {
    name: "Roti & Naan",
    description: "Fresh breads baked in the tandoor.",
    items: [
      {
        name: "Tandoori Roti",
        description: "Whole wheat flatbread baked in a tandoor oven.",
      },
      {
        name: "Butter Naan",
        description: "Traditional hand-tossed naan baked in the tandoor.",
      },
      {
        name: "Garlic Naan",
        description: "Tandoor-baked naan mixed with garlic.",
      },
      {
        name: "Onion Kulcha",
        description:
          "Unleavened flatbread stuffed with seasoned onions and baked in the tandoor.",
      },
    ],
  },
  {
    name: "Rice & Biryanis",
    description: "Hyderabadi-style biryanis, pulao, and rice dishes.",
    items: [
      {
        name: "Hyderabad Dum Biryani",
        description:
          "Meat or vegetables marinated with herbs, spices, yogurt, and saffron basmati rice.",
      },
      {
        name: "Chicken Boneless Biryani",
        description:
          "Chicken cooked in chef special biryani sauce and mixed with dum rice.",
      },
      {
        name: "Chicken 65 Biryani",
        description:
          "Boneless chicken in chef special 65 sauce mixed with biryani rice.",
      },
      {
        name: "Paneer Biryani",
        description:
          "Indian cottage cheese cooked in chef special biryani sauce and dum rice.",
      },
    ],
  },
  {
    name: "Vegetarian Curries",
    description: "Dal, paneer, vegetable, and kofta curries.",
    items: [
      {
        name: "New Delhi Chana Masala",
        description:
          "Garbanzo beans cooked with onions, tomatoes, and cilantro.",
      },
      {
        name: "Dal Makani",
        description:
          "Black lentils cooked with herbs, onions, ginger, garlic, and tomatoes.",
      },
      {
        name: "Palak Paneer",
        description: "Spinach cooked in a creamy sauce with paneer.",
      },
      {
        name: "Kadai Paneer",
        description:
          "Paneer simmered with onions and green chilies in a mildly spiced curry sauce.",
      },
      {
        name: "Malai Kofta",
        description:
          "Vegetable and paneer kofta cooked in a yellow curry sauce.",
      },
      {
        name: "Vegetable Chettinad",
        description:
          "Mixed vegetables cooked with Chettinad spices, pepper, mustard seed, and curry leaves.",
      },
    ],
  },
  {
    name: "Non-Vegetarian Curries",
    description: "Chicken, goat, fish, and shrimp curries.",
    items: [
      {
        name: "Kadai",
        description:
          "Choice of meat simmered with onions and green peppers in a mildly spiced curry sauce.",
      },
      {
        name: "Tikka Masala",
        description:
          "Choice of meat cooked in a medium sauce with onion, ginger, garlic, coriander, turmeric, and chili.",
      },
      {
        name: "Butter Chicken",
        description: "Tender chicken cooked in a creamy butter sauce.",
      },
      {
        name: "Fish Masala",
        description: "Fish cooked with onions and tomatoes in a mild curry sauce.",
      },
      {
        name: "Mutton Dalcha",
        description: "Mutton cooked with chana dal and spices.",
      },
    ],
  },
  {
    name: "Desserts & Drinks",
    description: "Sweet finishes and classic Indian drinks.",
    items: [
      {
        name: "Rasgulla",
        description: "Syrupy dessert made with soft sponge-style cheese balls.",
      },
      {
        name: "Rasmalai",
        description:
          "Flat cakes made with creamed cheese, soaked in sweet thickened milk.",
      },
      {
        name: "Gajar Ka Halwa",
        description: "Carrot dessert made with milk, sugar, and ghee.",
      },
      {
        name: "Mango Lassi",
        description: "Mango and yogurt drink.",
      },
      {
        name: "Masala Chai",
        description: "Indian hot tea.",
      },
    ],
  },
];

const galleryImages = [
  { src: "/Gallery/1.jpg", alt: "India Spice House dining and buffet spread" },
  { src: "/Gallery/2.jpg", alt: "Indian entrees at India Spice House" },
  { src: "/Gallery/3.jpg", alt: "Fresh Indian food at India Spice House" },
  { src: "/Gallery/5.jpg", alt: "Garlic naan from India Spice House" },
  { src: "/Gallery/53.jpg", alt: "Hyderabadi dum biryani at India Spice House" },
  { src: "/Gallery/56.jpg", alt: "Butter chicken from India Spice House" },
  { src: "/Gallery/64.jpg", alt: "Indian grocery shelves at India Spice House" },
  { src: "/Gallery/65.jpg", alt: "Indian grocery products in Eden Prairie" },
  { src: "/Gallery/70.jpg", alt: "India Spice House restaurant food display" },
  { src: "/Gallery/71.jpg", alt: "India Spice House catering presentation" },
];

export {
  businessInfo,
  galleryImages,
  menuSections,
  orderLink,
  siteUrl,
};
