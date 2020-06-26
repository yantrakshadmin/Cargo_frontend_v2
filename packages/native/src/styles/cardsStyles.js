import { margin, yantraColors } from './default';

export const cardStyle = {
  container: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: yantraColors.white,
    borderColor: yantraColors.primary,
    borderBottomWidth: 1,
    shadowColor: yantraColors.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 1,
    alignItems: 'flex-start',
  },
};
