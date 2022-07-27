import React from 'react';
// import useProducers from '../../hooks/useProducers';
// import {Cest} from '../Cest';
import {Header} from './components/Header';
import {Producers} from './components/Producers';

export interface ProducerPropTypes {
  bestProducers: boolean;
}
export default function Producer({bestProducers}: ProducerPropTypes) {
  return (
    <>
      <Producers
        Header={() => <Header bestProducers={bestProducers} />}
        bestProducers={bestProducers}
      />
    </>
  );
}
