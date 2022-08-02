import { useState, useEffect } from 'react';
import { IProducersData, ProducerProps } from '../mocks/producers';
import { loadProducers } from '../services/loadData';


export default function useProducers(bestProducer: boolean) {

  const [bestProducers, setBestProducers] = useState<IProducersData>({} as IProducersData)
  useEffect(() => {
    const data = loadProducers();

    data.list.sort(
      (first: ProducerProps, second: ProducerProps) =>
        (first.distance as number) - (second.distance as number)
    );
    let newList = data
    if (bestProducer) {
      newList.list = newList.list.filter((producer: ProducerProps) => producer.stars > 3)
    }
    setBestProducers(newList)
  }, [])

  return [bestProducers]
}
