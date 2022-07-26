import {StyleSheet} from 'react-native';

export const HeaderStylesFunction = (height: number) =>
  StyleSheet.create({
    header: {
      width: '100%',
      height: height,
    },
    gradiente: {
      position: 'absolute',
    },
    title: {
      width: '100%',
      position: 'absolute',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 26,
      color: 'white',
      fontWeight: 'bold',
      padding: 16,
    },
    backButton: {
      position: 'absolute',
      padding: 16,
    },
    back: {
      width: 24,
      height: 24,
    },
  });
