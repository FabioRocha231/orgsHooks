import {StyleSheet} from 'react-native';

export const starsStylesFunction = (big: boolean) =>
  StyleSheet.create({
    star: {
      width: big ? 36 : 12,
      height: big ? 36 : 12,
    },
    stars: {
      flexDirection: 'row',
      marginRight: 2,
    },
  });
