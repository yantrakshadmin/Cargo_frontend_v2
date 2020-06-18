import React from 'react';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { publicRoutes } from '../constants/routes';

const Stack = createStackNavigator();

const config = {
  animationTypeForReplace: 'pop',
  animation: 'spring',
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
  gestureDirection: 'horizontal',
  gestureResponseDistance: {
    horizontal: 100,
  },
};
const PublicStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Sign In'
      screenOptions={{
        gestureEnabled: true,
      }}>
      {publicRoutes.map((Route) => (
        <Stack.Screen
          name={Route.name}
          component={Route.Component}
          options={{ ...config, gestureEnabled: false }}
        />
      ))}
    </Stack.Navigator>
  );
};
export default PublicStack;
