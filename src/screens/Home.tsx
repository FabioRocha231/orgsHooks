import React from 'react'
import useProducers from '../hooks/useProducers';
import Producer from './Producers';


export default function Home() {
  const [producers] = useProducers(false)
  return <Producer producers={producers.list} bestProducers={false} />;
};
