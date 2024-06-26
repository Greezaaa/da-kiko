import { Bruschetta, Category } from '@lib/shared';

export const bruschettas: Bruschetta[] = [
  {
    id: 1,
    name: 'salmón',
    category: Category.BRUSCHETTA,
    ingredients: [1, 2, 3, 4], // 'pan tostado', 'salsa de tomate', 'mozzarella', 'salmón'
    price: 0,
    description: '',
    special: false,
  },
  {
    id: 2,
    name: 'jamón',
    category: Category.BRUSCHETTA,
    ingredients: [1, 2, 3, 5], // 'pan tostado', 'salsa de tomate', 'mozzarella', 'jamón york'
    price: 0,
    description: '',
    special: false,
  },
];
