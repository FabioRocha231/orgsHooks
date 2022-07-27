import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';

import useTexts from '../../../../hooks/useTexts';
import {TextStyled} from '../../../../components/Text';
import {DetailsPropsTypes, ProducerProps} from '../../../../mocks/producers';
import {detailsStyles} from './styles';

export type DetailsProps = {
  producer: ProducerProps;
  producerDetails: DetailsPropsTypes;
};

export const Details = ({producerDetails, producer}: DetailsProps) => {
  const {buyButton} = useTexts();
  return (
    <>
      <TextStyled isBold={true} customStyle={detailsStyles.name}>
        {producerDetails.name}
      </TextStyled>
      <View style={detailsStyles.farm}>
        <Image source={producer.image} style={detailsStyles.farmImage} />
        <TextStyled isBold={false} customStyle={detailsStyles.farmName}>
          {producer.name}
        </TextStyled>
      </View>
      <TextStyled isBold={false} customStyle={detailsStyles.description}>
        {producerDetails.description}
      </TextStyled>
      <TextStyled isBold={false} customStyle={detailsStyles.price}>
        {producerDetails.price}
      </TextStyled>
      <TouchableOpacity onPress={() => {}} style={detailsStyles.buyButton}>
        <TextStyled isBold={true} customStyle={detailsStyles.buyButtonText}>
          {buyButton}
        </TextStyled>
      </TouchableOpacity>
    </>
  );
};
