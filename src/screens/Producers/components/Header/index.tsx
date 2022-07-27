import {Image, ImageSourcePropType, Text, View} from 'react-native';
import React from 'react';
import logo from '../../../../assets/logo.png';
import {HeaderStyles} from './styles';
import useTexts from '../../../../hooks/useTexts';

export type HeaderPropTypes = {
  bestProducers: boolean;
};

export const Header = ({bestProducers}: HeaderPropTypes) => {
  const {greetings, subTitle, subTitleBestProducers} = useTexts();

  return (
    <View style={HeaderStyles.header}>
      <Image style={HeaderStyles.image} source={logo as ImageSourcePropType} />
      <Text style={HeaderStyles.greetings}>
        {bestProducers ? '' : greetings}
      </Text>
      <Text style={HeaderStyles.subTitle}>
        {bestProducers ? subTitleBestProducers : subTitle}
      </Text>
    </View>
  );
};
