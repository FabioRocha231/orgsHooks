import {useState, useEffect} from 'react';
import {ItextsData} from '../mocks/texts';

import {loadTexts} from '../services/loadData';

export default function useTexts(): ItextsData {
  const [texts, setTexts] = useState<ItextsData>({} as ItextsData);

  useEffect(() => {
    const data = loadTexts();
    setTexts(data);
  }, []);

  return texts;
}
