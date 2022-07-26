import {useState, useEffect} from 'react';
import {TextsProps} from '../mocks/texts';

import {loadTexts} from '../services/loadData';

export default function useTexts(): TextsProps {
  const [texts, setTexts] = useState<TextsProps>({} as TextsProps);

  useEffect(() => {
    const data = loadTexts();
    setTexts(data);
  }, []);

  return texts;
}
