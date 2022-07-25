import {useState, useEffect} from 'react';
import {ProducerProps} from '../mocks/producers';
import {loadProducers} from '../services/loadData';

export default function useProducers(): [string, ProducerProps[]] {
  const [producers, setProducers] = useState<ProducerProps[]>([]);
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    const data = loadProducers();
    setProducers(data.list);
    setTitle(data.title);
  }, []);

  return [title, producers];
}
