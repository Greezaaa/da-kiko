import { Category } from '@lib/shared';

export const sauces = {
  napolitana: {
    id: 1,
    name: 'Napolitana',
    category: Category.SALSA,
    ingredients: [17, 6, 7], // 'salsa_tomate', 'ajo', 'albahaca'
    price: 0,
    description: '',
    special: false,
  },
  quattro_formaggi: {
    id: 2,
    name: 'Quattro Formaggi',
    category: Category.SALSA,
    ingredients: [38, 8], // 'nata', '4_quesos'
    price: 0,
    description: '',
    special: false,
  },
  sienna: {
    id: 3,
    name: 'Sienna',
    category: Category.SALSA,
    ingredients: [17, 18, 9, 10, 11, 6], // 'salsa_tomate', 'gambas', 'bechamel', 'calabacín', 'perejil', 'ajo'
    price: 0,
    description: '',
    special: false,
  },
  siciliana: {
    id: 4,
    name: 'Siciliana',
    category: Category.SALSA,
    ingredients: [17, 3, 12, 13, 11], // 'salsa_tomate', 'mozzarella', 'berenjena', 'picante', 'perejil'
    price: 0,
    description: '',
    special: false,
  },
  bolognese: {
    id: 5,
    name: 'Bolognese',
    category: Category.SALSA,
    ingredients: [17, 14], // 'salsa_tomate', 'carne_picada_de_ternera'
    price: 0,
    description: '',
    special: false,
  },
  carbonara: {
    id: 6,
    name: 'Carbonara',
    category: Category.SALSA,
    ingredients: [15, 9, 16], // 'beicon', 'bechamel', 'yema_de_huevo'
    price: 0,
    description: '',
    special: false,
  },
  salmon_gambas: {
    id: 7,
    name: 'Salmón y Gambas',
    category: Category.SALSA,
    ingredients: [17, 4, 18, 6, 11], // 'salsa_tomate', 'salmon', 'gambas', 'ajo', 'perejil'
    price: 0,
    description: '',
    special: false,
  },
  pesto: {
    id: 8,
    name: 'Al Pesto',
    category: Category.SALSA,
    ingredients: [7, 19, 20, 21], // 'albahaca', 'piñones', 'queso_parmesano', 'aceite_de_oliva'
    price: 0,
    description: '',
    special: false,
  },
  Gorgonzola: {
    id: 9,
    name: 'Gorgonzola',
    category: Category.SALSA,
    ingredients: [8, 22], // '4_tipos_de_quesos', 'crema_de_nueces'
    price: 0,
    description: '',
    special: false,
  },
  Kiko: {
    id: 10,
    name: 'Kiko',
    category: Category.SALSA,
    ingredients: [9, 23, 24], // 'bechamel', 'pollo', 'champiñón'
    price: 0,
    description: '',
    special: true,
  },
};
