import React from 'react';
import { FlatList, Text } from 'react-native';
import { ProducerCard } from '../ProducerCard';
import { producersStyles } from './styles';
import useTexts from '../../../../hooks/useTexts';
import { useNavigation } from '@react-navigation/native';
import { ProducerProps } from '../../../../mocks/producers';
import { Header } from '../Header';

export type ProducersListProps = {
  producers: ProducerProps[];
  bestProducers: boolean;
};

export const ProducersList: React.FC<ProducersListProps> = ({
  producers,
  bestProducers
}) => {
  const navigation = useNavigation();

  const { producersTitle } = useTexts();
  const listHeader = () => {
    return (
      <>
        <Header bestProducers={bestProducers} />
        <Text style={producersStyles.title}>{producersTitle}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={producers}
      renderItem={({ item }) => <ProducerCard {...item} onPress={() => {
        navigation.navigate('Producer Info', item)
      }} />}
      keyExtractor={item => item.name}
      ListHeaderComponent={listHeader}
    />
  );
};
