import React from 'react';
import {FlatList, Text} from 'react-native';

import {Producer} from '../Producer';
import {producersStyles} from './styles';
import useProducers from '../../../../hooks/useProducers';
import useTexts from '../../../../hooks/useTexts';
export type ProducersProps = {
  Header: React.FC;
  bestProducers: boolean;
};

export const Producers: React.FC<ProducersProps> = ({
  Header,
  bestProducers,
}) => {
  const [producers] = useProducers(bestProducers);
  const {producersTitle} = useTexts();
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
      renderItem={({item}) => <Producer {...item} />}
      keyExtractor={item => item.name}
      ListHeaderComponent={listHeader}
    />
  );
};
