import { Category } from '@lib/shared';

export const pizzas = {
  margarita: {
    id: 1,
    name: 'Margarita',
    category: Category.PIZZA,
    ingredients: [2, 3, 25], // 'salsa de tomate', 'mozzarella', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  funghi: {
    id: 2,
    name: 'Funghi',
    category: Category.PIZZA,
    ingredients: [2, 3, 24, 25], // 'salsa de tomate', 'mozzarella', 'champiñón', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  prosciutto: {
    id: 3,
    name: 'Prosciutto',
    category: Category.PIZZA,
    ingredients: [2, 3, 5, 25], // 'salsa de tomate', 'mozzarella', 'jamón york', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  prosciutto_funghi: {
    id: 4,
    name: 'Prosciutto e prosciutto_funghi',
    category: Category.PIZZA,
    ingredients: [2, 3, 5, 24, 25], // 'salsa de tomate', 'mozzarella', 'jamón york', 'champiñón', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  peperoni: {
    id: 5,
    name: 'Peperoni',
    category: Category.PIZZA,
    ingredients: [2, 3, 26, 25], // 'salsa de tomate', 'mozzarella', 'peperoni', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  pugliese: {
    id: 6,
    name: 'Pugliese',
    category: Category.PIZZA,
    ingredients: [2, 3, 26, 27, 28, 25], // 'salsa de tomate', 'mozzarella', 'peperoni', 'cebolla', 'aceitunas', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  sienna: {
    id: 7,
    name: 'Sienna',
    category: Category.PIZZA,
    ingredients: [2, 3, 5, 26, 27, 25], // 'salsa de tomate', 'mozzarella', 'jamón york', 'peperoni', 'cebolla', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  beacon_cebolla: {
    id: 8,
    name: 'Beicon y Cebolla',
    category: Category.PIZZA,
    ingredients: [2, 3, 15, 27, 25], // 'salsa de tomate', 'mozzarella', 'beicon', 'cebolla', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  carbonara: {
    id: 9,
    name: 'Carbonara',
    category: Category.PIZZA,
    ingredients: [2, 3, 15, 29, 25], // 'salsa de tomate', 'mozzarella', 'beicon', 'huevo', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  napolitana: {
    id: 10,
    name: 'Napolitana',
    category: Category.PIZZA,
    ingredients: [2, 3, 15, 29, 25], // 'salsa de tomate', 'mozzarella', 'beicon', 'huevo', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  salmon: {
    id: 11,
    name: 'Salmon',
    category: Category.PIZZA,
    ingredients: [2, 3, 4, 6, 25], // 'salsa de tomate', 'mozzarella', 'salmon', 'ajo', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  quattro_stagioni: {
    id: 12,
    name: 'Quattro Stagioni',
    category: Category.PIZZA,
    ingredients: [2, 3, 5, 24, 30, 31, 25], // 'salsa de tomate', 'mozzarella', 'jamón york', 'champiñón', 'anchoas', 'alcachofas', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  quattro_formaggi: {
    id: 13,
    name: 'Quattro Formaggi',
    category: Category.PIZZA,
    ingredients: [2, 3, 8, 25], // 'salsa de tomate', 'mozzarella', '4 tipos de queso', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  pesto: {
    id: 14,
    name: 'Pesto',
    category: Category.PIZZA,
    ingredients: [2, 3, 7, 19, 20, 21, 25], // 'salsa de tomate', 'mozzarella', 'albahaca', 'piñones', 'queso parmesano', 'aceite de oliva', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  hawaiana: {
    id: 15,
    name: 'Hawaiana',
    category: Category.PIZZA,
    ingredients: [2, 3, 5, 32, 25], // 'salsa de tomate', 'mozzarella', 'jamón york', 'piña', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  capricciosa: {
    id: 16,
    name: 'Capricciosa',
    category: Category.PIZZA,
    ingredients: [2, 3, 25], // 'salsa de tomate', 'mozzarella', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  rucula_parmigiano: {
    id: 17,
    name: 'Rúcula y Parmigiano',
    category: Category.PIZZA,
    ingredients: [2, 3, 33, 34, 20, 25], // 'salsa de tomate', 'mozzarella', 'jamón serrano', 'rúcula', 'queso parmesano', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  caprese: {
    id: 18,
    name: 'Caprese',
    category: Category.PIZZA,
    ingredients: [2, 3, 39, 35, 34, 25], // 'salsa de tomate', 'mozzarella', 'tomate en rodajas', 'queso fresco', 'rúcula', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  tonno: {
    id: 19,
    name: 'Tonno',
    category: Category.PIZZA,
    ingredients: [2, 3, 36, 27, 25], // 'salsa de tomate', 'mozzarella', 'atún', 'cebolla', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  barbacoa: {
    id: 20,
    name: 'Barbacoa',
    category: Category.PIZZA,
    ingredients: [2, 3, 14, 37, 25], // 'salsa de tomate', 'mozzarella', 'carne picada de ternera', 'salsa barbacoa', 'oregano'
    price: 0,
    description: '',
    special: false,
  },
  capri: {
    id: 21,
    name: 'Capri',
    category: Category.PIZZA,
    ingredients: [37, 3, 23, 38, 39], // 'salsa barbacoa', 'mozzarella', 'pollo', 'nata', 'tomate cherry'
    price: 0,
    description: '',
    special: false,
  },
  Kiko: {
    id: 22,
    name: 'Kiko',
    category: Category.PIZZA,
    ingredients: [38, 3, 23, 24], // 'nata', 'mozzarella', 'pollo', 'champiñón'
    price: 0,
    description: '',
    special: true,
  },
};
