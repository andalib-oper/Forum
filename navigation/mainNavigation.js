import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Add from '../src/mainTabs/Add/Add';
import Community from '../src/mainTabs/Community/Community';
import Notification from '../src/mainTabs/Notification/Notification';
import Search from '../src/mainTabs/Search/Search';
import HomeStackNavigator from './HomeStackNavigator';
import AddStackNavigator from './AddStackNavigator';
import Add1 from '../src/mainTabs/Add/Add1';

const Tab = createBottomTabNavigator();

function MainNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard:true,
        headerShown:false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 100/2,
          height: 65,
          ...styles.shadow,
        },
        tabBarActiveBackgroundColor:'#ef7e46',
        tabBarItemStyle:{
            borderRadius:100/2,
            margin:8,
            alignSelf:'center'
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#ef7e46'
      }}>
      <Tab.Screen name="homeStack" component={HomeStackNavigator} 
      options={{
        tabBarIcon:(({color})=>(
              <AntDesign
                name="home"
                size={26}
                color={color}
              />
            ))
      }}
      />
      <Tab.Screen name="search" component={Search} 
      options={{
        tabBarIcon:(({color})=>{
            return (
              <AntDesign
                name="search1"
                size={26}
                color={color}
              />
            );
          })
      }}
      />
      <Tab.Screen name="Add" component={Add1} 
      options={{
        tabBarIcon:(({color})=>{
            return (
              <AntDesign
                name="pluscircleo"
                size={28}
                color={color}
              />
            );
          })
      }}
      />
      <Tab.Screen name="notification" component={Notification} 
      options={{
        tabBarIcon:(({color})=>{
            return (
              <Ionicons
                name="notifications-outline"
                size={26}
                color={color}
              />
            );
          })
      }}
      />
      <Tab.Screen name="community" component={Community} 
      options={{
        tabBarIcon:(({color})=>{
            return (
              <MaterialCommunityIcons
                name="account-group"
                size={26}
                color={color}
              />
            );
          })
      }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigation;

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
