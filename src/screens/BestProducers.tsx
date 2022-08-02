import React from 'react';
import useProducers from '../hooks/useProducers';
import Producer from './Producers';

export default function BestProducers() {
  const [bestProducers] = useProducers(true)
  return <Producer producers={bestProducers.list} bestProducers={true} />;
}
