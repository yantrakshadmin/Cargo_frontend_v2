import { Dimensions, Platform } from 'react-native';
import { yantraColors } from './default';

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
