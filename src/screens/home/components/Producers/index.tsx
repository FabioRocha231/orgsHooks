import React from 'react';
import {FlatList, Text} from 'react-native';

import {Producer} from '../Producer';
import {producersStyles} from './styles';
import useProducers from '../../../../hooks/useProducers';
export type ProducersProps = {
  Header: React.FC;
};

export const Producers: React.FC<ProducersProps> = ({Header}) => {
  const [title, producers] = useProducers();
  const listHeader = () => {
    return (
      <>
        <Header />
        <Text style={producersStyles.title}>{title}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={producers}
      renderItem={({item}) => <Producer {...item} />}
      keyExtractor={item => item.name}
      ListHeaderComponent={listHeader}
    />
  );
};
