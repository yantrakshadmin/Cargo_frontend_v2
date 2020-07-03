import { Dimensions, Platform } from 'react-native';
import { margin, yantraColors } from './default';

export const container = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: yantraColors.bg,
  padding: 10,
};

export const column = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
export const row = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export const rowSpaceBetween = {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};
export const getFlex = (flex, flexDirection, justifyContent, alignItems, key, value) => ({
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  [key]: value,
});
export const font = (size, weight, textAlign, key, value) => ({
  fontSize: size,
  fontWeight: weight || null,
  textAlign,
  [key]: value,
});

export const signInStyle = {
  inputText: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: Platform.OS === 'ios' ? 15 : 0,
  },
  subContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: yantraColors.white,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: yantraColors.primary,
    borderTopWidth: 0,
    shadowColor: yantraColors.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 1,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'flex-start',
    padding: 10,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: yantraColors.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: yantraColors.white,
    borderRadius: 5,
    margin: 5,
  },
  buttonTextStyle: { fontSize: 15, marginLeft: 5 },
  signUpHeading: { color: yantraColors.white, fontSize: 21, fontWeight: 'bold' },
  yantrakshHeading: {
    fontSize: 27,
    fontWeight: 'bold',
    color: yantraColors.primary,
  },
};
export const getHeight = (height) => ({ height });
export const screenWrapperStyle = {
  container: {
    flex: 1,
    backgroundColor: yantraColors.bg,
  },
  floatingContainer: { position: 'absolute', bottom: 0, right: 0, margin: 10, maxHeight: 100 },
  headerContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: yantraColors.white,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: yantraColors.primary,
    borderTopWidth: 0,
  },
  statusBar: {
    // height: getStatusBarHeight(true),
  },
  subContainerScrollView: { flexGrow: 1, backgroundColor: yantraColors.bg, position: 'relative' },
  searchBarContainer: {
    backgroundColor: yantraColors.white,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 1,
  },
  title: {
    ...margin('padding').md,
    marginVertical: 0,
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 41,
    color: yantraColors.black,
  },
  sideIcons: { width: 50 },
  logoContainer: [
    signInStyle.inputText,
    { flex: 1, flexDirection: 'row', justifyContent: 'center', ...margin('padding').md },
  ],
  logo: { width: 169.67, height: 50, resizeMode: 'stretch' },
  searchBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  childrenContainer: { flex: 1 },
};

export const tableStyle = {
  border: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: yantraColors.black,
  },
  headingCell: {
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: yantraColors.black,
    padding: 5,
    height: '100%',
  },
  dataCellContainer: {
    borderWidth: 0,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: yantraColors.black,
  },
};

export const tagsStyle = {
  container: (bg, shadow) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: bg,
    borderRadius: 10,
    shadowColor: shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
  }),
};

export const dashboardStyle = {
  topMenuContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  row: { flexDirection: 'row', width: '100%' },
  topCardBody: color => {
    return {
      flex: 1,
      borderRadius: 10,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      margin:5,
      backgroundColor: color,
      padding:15,
      color: yantraColors.white,
    };
  },
  topCardText: { color: yantraColors.white, textAlign: 'center' },
}
