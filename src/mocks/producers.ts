import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';
import {ImageSourcePropType} from 'react-native';

const gerarNumeroAleatorio = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export type ProducerProps = {
  name: string;
  image: string | ImageSourcePropType;
  distance: number | string;
  stars: number;
};

export interface IProducers {
  title: string;
  list: ProducerProps[];
}

export const producersData: IProducers = {
  title: 'Produtores',
  list: [
    {
      name: 'Green',
      image: green,
      distance: `${gerarNumeroAleatorio(1, 5000)}`,
      stars: gerarNumeroAleatorio(1, 5),
    },
    {
      name: 'Salad',
      image: salad,
      distance: `${gerarNumeroAleatorio(1, 5000)}`,
      stars: gerarNumeroAleatorio(1, 5),
    },
    {
      name: 'Jenny Jack Farm',
      image: jennyJack,
      distance: `${gerarNumeroAleatorio(1, 5000)}`,
      stars: gerarNumeroAleatorio(1, 5),
    },
    {
      name: 'Grow',
      image: grow,
      distance: `${gerarNumeroAleatorio(1, 5000)}`,
      stars: gerarNumeroAleatorio(1, 5),
    },
    {
      name: 'Potager',
      image: potager,
      distance: `${gerarNumeroAleatorio(1, 5000)}`,
      stars: gerarNumeroAleatorio(1, 5),
    },
  ],
};
