import React from 'react';
import { FlatList, View } from 'react-native';

import { TextStyled } from '../../components/Text';
import { Header } from '../../components/Header';
import useTexts from '../../hooks/useTexts';
import { Details } from './components/Details';
import { Item } from './components/Item';
import {
  DetailsPropsTypes,
  ItensProps,
  ProducerProps,
} from '../../mocks/producers';
import { cestScreenStyles } from './styles';

export type CestProps = {
  producer: ProducerProps;
};

export const Cest = ({ producer }: CestProps) => {
  const { cestHeader, itensTitle } = useTexts();
  return (
    <FlatList
      data={itens}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={({ name }) => name}
      style={cestScreenStyles.list}
      ListHeaderComponent={() => {
        return (
          <>
            <Header title={cestHeader} />
            <View style={cestScreenStyles.cest}>
              <Details producerDetails={details} producer={producer} />
              <TextStyled isBold={true} customStyle={cestScreenStyles.title}>
                {itensTitle}
              </TextStyled>
            </View>
          </>
        );
      }}
    />
  );
};
