import React from 'react';
import { ProducerProps } from '../../mocks/producers';
import { ProducersList } from './components/ProducersList';

export interface ProducerPropTypes {
  producers: ProducerProps[];
  bestProducers: boolean
}
export default function Producer({ producers, bestProducers }: ProducerPropTypes) {
  return (
    <>
      <ProducersList
        producers={producers}
        bestProducers={bestProducers}
      />
    </>
  );
}
