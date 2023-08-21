import {StyleSheet} from 'react-native';
import Colors from './Colors';

export const hitSlopProp = {
  top: 12,
  right: 12,
  left: 12,
  bottom: 12,
};

export default StyleSheet.create({
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  shadowStyle: {
    borderRadius: 4,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },

  viewStyles: {
    flex: 1,
    justifyContent: 'center',
  },

  navHeaderStyle: {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.secandory,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});
