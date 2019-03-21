import apple from 'assets/images/apple.jpg';
import banana from 'assets/images/banana.jpg';
import orange from 'assets/images/orange.jpg';
import car from 'assets/images/car.jpg';
import teddyBear from 'assets/images/teddy-bear.jpg';

export const products = [
  {
    id: 1,
    name: '1 Kg Elma',
    category: 'Meyve',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et quam eu metus venenatis fringilla. Curabitur lacinia tincidunt sem eu vulputate. Pellentesque euismod et purus eu laoreet.',
    image: apple,
    price: 5,
  },
  {
    id: 2,
    name: '1 Kg Muz',
    category: 'Meyve',
    description: 'In nec imperdiet nunc. Nulla feugiat ligula eu lectus pulvinar facilisis. Curabitur posuere rhoncus magna, vitae vulputate felis. Cras et malesuada leo, at sodales massa.',
    image: banana,
    price: 10,
  },
  {
    id: 3,
    name: '1 Kg Portakal',
    category: 'Meyve',
    description: 'Donec convallis malesuada felis, eu rhoncus nibh viverra et. Integer id interdum felis, gravida blandit libero. Cras sagittis arcu id porta ullamcorper.',
    image: orange,
    price: 6,
  },
  {
    id: 4,
    name: 'Oyuncak Araba',
    category: 'Hediye',
    description: 'Nunc sagittis, nulla efficitur aliquet tristique, velit velit cursus ligula, at luctus leo enim sed lectus. Etiam dignissim nisi vel nulla dapibus, ut eleifend nibh accumsan.',
    image: car,
    price: 20,
  },
  {
    id: 5,
    name: 'Teddy Ayıcık',
    category: 'Hediye',
    description: 'Aliquam interdum pretium varius. Nullam interdum, nisl in placerat consequat, leo ante ultrices nisl, at ultricies enim diam eget ante.',
    image: teddyBear,
    price: 50,
  },
];

export const cartItems = [
  {
    count: 1,
    product: {
      id: 1,
      name: '1 Kg Elma',
      category: 'Meyve',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et quam eu metus venenatis fringilla. Curabitur lacinia tincidunt sem eu vulputate. Pellentesque euismod et purus eu laoreet.',
      image: apple,
      price: 5,
    }
  },
  {
    count: 1,
    product: {
      id: 2,
      name: '1 Kg Muz',
      category: 'Meyve',
      description: 'In nec imperdiet nunc. Nulla feugiat ligula eu lectus pulvinar facilisis. Curabitur posuere rhoncus magna, vitae vulputate felis. Cras et malesuada leo, at sodales massa.',
      image: banana,
      price: 10,
    }
  }
];

export const categories = [
  {
    id: null,
    name: 'Tümü',
  },
  {
    id: 'Meyve',
    name: 'Meyve',
  },
  {
    id: 'Oyuncak',
    name: 'Oyuncak',
  }
];
