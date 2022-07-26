import React from 'react';
import {FlatList, View} from 'react-native';

import {TextStyled} from '../../components/Text';
import {Header} from '../../components/Header';
import useTexts from '../../hooks/useTexts';
import {Details} from './components/Details';
import {Item} from './components/Item';
import {
  DetailsPropsTypes,
  ItensProps,
  ProducerProps,
} from '../../mocks/producers';

export type CestProps = {
  details: DetailsPropsTypes;
  itens: ItensProps[];
  producer: ProducerProps;
};

export const Cest = ({details, itens, producer}: CestProps) => {
  const {cestHeader, itensTitle} = useTexts();
  return (
    <FlatList
      data={itens}
      renderItem={Item as any}
      keyExtractor={({name}) => name}
      ListHeaderComponent={() => {
        return (
          <>
            <Header title={cestHeader} />
            <View>
              <Details producerDetails={details} producer={producer} />
              <TextStyled isBold={true} customStyle={{}}>
                {itensTitle}
              </TextStyled>
            </View>
          </>
        );
      }}
    />
  );
};
