import {Image, ImageSourcePropType, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {loadHeader} from '../../../../services/loadData';
import logo from '../../../../assets/logo.png';
import {HeaderStyles} from './styles';
import {HeaderDataProps} from '../../../../mocks/header';

export const Header = () => {
  const [header, setHeader] = useState<HeaderDataProps>();
  const loadHeaderData = () => {
    const data = loadHeader();
    return setHeader(data);
  };
  useEffect(() => {
    loadHeaderData();
  }, []);

  return (
    <View style={HeaderStyles.header}>
      <Image style={HeaderStyles.image} source={logo as ImageSourcePropType} />
      <Text style={HeaderStyles.greetings}>{header?.greetings}</Text>
      <Text style={HeaderStyles.subTitle}>{header?.subTitle}</Text>
    </View>
  );
};
