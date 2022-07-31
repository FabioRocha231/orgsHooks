import React from 'react';
// import useProducers from '../../hooks/useProducers';
// import {Cest} from '../Cest';
import { Header } from './components/Header';
import { ProducersList } from './components/ProducersList';

export interface ProducerPropTypes {
  bestProducers: boolean;
}
export default function Producer({ bestProducers }: ProducerPropTypes) {
  return (
    <>
      <ProducersList
        Header={() => <Header bestProducers={bestProducers} />}
        bestProducers={bestProducers}
      />
    </>
  );
}
