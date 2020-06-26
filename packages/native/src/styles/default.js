import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const yantraColors = {
  bg: '#e4e5e6',
  black: '#000',
  white: '#fff',
  primary: '#20a8d8',
  gray: '#ddd',
  grayDark: '#ccc',
  success: '#52c41a',
};
export const margin = (key) => ({
  sm: { [key]: 5 },
  md: { [key]: 10 },
  lg: { [key]: 15 },
  xl: { [key]: 20 },
});

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
