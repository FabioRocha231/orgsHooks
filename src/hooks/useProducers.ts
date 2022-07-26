import {useState, useEffect} from 'react';
import {ProducerProps} from '../mocks/producers';
import {loadProducers} from '../services/loadData';

export default function useProducers(
  bestProducers: boolean,
): [ProducerProps[]] {
  const [producers, setProducers] = useState<ProducerProps[]>([]);

  useEffect(() => {
    const data = loadProducers();
    data.list.sort(
      (first: ProducerProps, second: ProducerProps) =>
        (first.distance as number) - (second.distance as number),
    );
    let newList = data.list;
    if (bestProducers) {
      newList = newList.filter((producer: ProducerProps) => producer.stars > 3);
    }
    setProducers(newList);
  }, [bestProducers]);

  return [producers];
}
