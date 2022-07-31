import React from 'react';
import { FlatList, Text } from 'react-native';
import { ProducerCard } from '../ProducerCard';
import { producersStyles } from './styles';
import useProducers from '../../../../hooks/useProducers';
import useTexts from '../../../../hooks/useTexts';
import { useNavigation } from '@react-navigation/native';



export type ProducersProps = {
  Header: React.FC;
  bestProducers: boolean;
};

export const ProducersList: React.FC<ProducersProps> = ({
  Header,
  bestProducers,
}) => {
  const navigation = useNavigation();

  const [producers] = useProducers(bestProducers);
  const { producersTitle } = useTexts();
  const listHeader = () => {
    return (
      <>
        <Header />
        <Text style={producersStyles.title}>{producersTitle}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={producers}
      renderItem={({ item }) => <ProducerCard {...item} onPress={() => {
        navigation.navigate('Producer')
      }} />}
      keyExtractor={item => item.name}
      ListHeaderComponent={listHeader}
    />
  );
};
