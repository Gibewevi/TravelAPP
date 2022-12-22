import { createDrawerNavigator } from 'react-navigation-drawer';

const AppNavigator = createDrawerNavigator({
    GetStarted: {
      screen: GetStarted,
    },
    HomePage: {
      screen: HomePage,
    },
    Destination: {
      screen: Destination,
    },
  });