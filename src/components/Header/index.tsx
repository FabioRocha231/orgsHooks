import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {TextStyled} from '../Text';
import Gradiente from '../../assets/gradiente.svg';
import headerImage from '../../assets/topo.png';
import BackSVG from '../../assets/voltar.svg';
import {HeaderStylesFunction} from './styles';

const width = Dimensions.get('screen').width;
const DEFAULT_HEIGHT = 270;

export type HeaderProps = {
  title: string;
  image: string;
  height: number;
};

export const Header = ({
  title,
  image = headerImage,
  height = DEFAULT_HEIGHT,
}: HeaderProps) => {
  const HeaderStyles = HeaderStylesFunction(height);
  return (
    <>
      <Image
        source={image as ImageSourcePropType}
        style={HeaderStyles.header}
      />
      <Gradiente
        width={width}
        height={(130 / 360) * width}
        style={HeaderStyles.gradiente}
      />
      <TextStyled isBold={true} customStyle={HeaderStyles.title}>
        {title}
      </TextStyled>
      <TouchableOpacity onPress={() => {}} style={HeaderStyles.backButton}>
        <BackSVG color="white" style={HeaderStyles.back} />
      </TouchableOpacity>
    </>
  );
};
