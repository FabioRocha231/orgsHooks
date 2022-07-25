import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {ProducerProps} from '../../../../mocks/producers';
import {loadProducers} from '../../../../services/loadData';
import {Producer} from '../Producer';
import {producersStyles} from './styles';

export type ProducersProps = {
  Header: React.FC;
};

export const Producers: React.FC<ProducersProps> = ({Header}) => {
  const [producers, setProducers] = useState<ProducerProps[]>();
  const [title, setTitle] = useState<string>();
  const loadProducersData = () => {
    const data = loadProducers();
    setProducers(data.list);
    setTitle(data.title);
  };
  useEffect(() => {
    loadProducersData();
  }, []);

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
