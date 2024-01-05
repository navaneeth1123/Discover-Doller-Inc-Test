const categories = [
  {
    id: 1,
    name: "Fashion",
    subcategories: [
      {
        id: 11,
        name: "Men",
        subcategorie: [
          {
            id: 113,
            name: "Pullover",
          },
          {
            id: 112,
            name: "Hoodie",
          },
          {
            id: 112,
            name: "T-Shirt",
          },
        ],
      },
      {
        id: 12,
        name: "Women",
        subcategorie: [
          {
            id: 111,
            name: "Jeans",
          },
          {
            id: 112,
            name: "Shirts",
          },
          {
            id: 113,
            name: "Pullover",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Electronics",
    subcategories: [
      {
        id: 22,
        name: "Laptops",
        subcategorie: [
          {
            id: 222,
            name: "Gaming laptop",
          },
          {
            id: 223,
            name: "MacBook",
          },
          {
            id: 224,
            name: "Ultrabook",
          },
        ],
      },
      {
        name: "Smartphones",
        subcategorie: [
          {
            id: 222,
            name: "Samsung",
          },
          {
            id: 223,
            name: "Apple",
          },
          {
            id: 224,
            name: "Lenova",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    name: "Beauty, toys & more",
    subcategories: [
      {
        id: 33,
        name: "Mens Grooming",
        subcategorie: [
          {
            id: 333,
            name: "Face wash",
          },
          {
            id: 332,
            name: "Beard oil",
          },
          {
            id: 331,
            name: "After Shave",
          },
        ],
      },
      {
        id: 33,
        name: "Baby care",
        subcategorie: [
          {
            id: 334,
            name: "Diapers",
          },
          {
            id: 335,
            name: "Baby Wipes",
          },
          {
            id: 336,
            name: "Baby Food",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    name: "Two Wheeler",
    subcategories: [
      {
        id: 44,
        name: "Petrol Vehicles",
        subcategorie: [
          {
            id: 444,
            name: "Engine Oil",
          },
          {
            id: 442,
            name: "Spare parts",
          },
          {
            id: 441,
            name: "Modifactions",
          },
        ],
      },
      {
        id: 44,
        name: "Electrical Vehicles",
        subcategorie: [
          {
            id: 443,
            name: "vehicles",
          },
          {
            id: 446,
            name: "Spare parts",
          },
        ],
      },
    ],
  },
];

export default categories;
