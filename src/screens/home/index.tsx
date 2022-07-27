import React from 'react';
import useProducers from '../../hooks/useProducers';
import {Cest} from '../Cest';
// import {Header} from './components/Header';
// import {Producers} from './components/Producers';

export default function Home() {
  const [producers] = useProducers(false);

  return (
    <>
      {/* <Producers Header={Header} bestProducers={false} /> */}
      {producers.length > 0 && (
        <Cest
          details={producers[0].cests[0].details}
          itens={producers[0].cests[0].itens}
          producer={producers[0]}
        />
      )}
    </>
  );
}
