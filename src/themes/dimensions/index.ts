import {Dimensions} from 'react-native';

export const FULL_WIDTH_WINDOW = Dimensions.get('window').width;
export const FULL_HEIGHT_WINDOW = Dimensions.get('window').height;

export const FULL_WIDTH_SCREEN = Dimensions.get('screen').width;
export const FULL_HEIGHT_SCREEN = Dimensions.get('screen').height;

export const dimensions = {
  d16: 16,
};

export type KeyDimensions = keyof typeof dimensions;
