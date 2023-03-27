import React, {useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Add from '../src/mainTabs/Add/Add';

const Stack = createStackNavigator();
const tabHiddenRoutes = ["add"];
const AddStackNavigator = ({navigation, route}) => {
  useLayoutEffect(() => {
    // const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle:  {position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      elevation: 0,
      backgroundColor: '#fff',
      borderRadius: 100/2,
      height: 65,
      ...styles.shadow
    }});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator initialRouteName="Add">
      <Stack.Screen
        name="add"
        component={Add}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AddStackNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
