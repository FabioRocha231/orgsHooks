import {producersData} from '../mocks/producers';
import {HeaderData} from '../mocks/header';
import {loadTexts as texts} from '../mocks/texts';

export const loadProducers = () => {
  return producersData;
};

export const loadHeader = () => {
  return HeaderData;
};

export const loadTexts = () => {
  return texts;
};
