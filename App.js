import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator , DrawerItems, DrawerActions, SafeAreaView } from 'react-navigation'; // 1.0.0-beta.27

import MainScreen from './screens/main';
import AboutScreen from './screens/AboutScreen';
import DetailScreen from './screens/DetailScreen';
import ResultScreen from './screens/results';
import Quiz from './screens/quiz';
import {expo} from './app.json';

export default class App extends React.Component {
  render() {
    return (
      <MyApp />
    );
  }
}

const MainStack = createStackNavigator(
  {
  Home: { screen: MainScreen,  navigationOptions: {
               //  title:"Home screen",
            },},
  Details: {screen: DetailScreen},         	
  Quiz: {screen: Quiz},  
  Result: {
      screen: ResultScreen,
    },       					
  //Home: { screen: HomeScreen,  navigationOptions: {          //  title:"Home screen",
  //          },},
  
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
 		title:"App",
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Result: {
      screen: ResultScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View>
      <Image source={require('./assets/icon.png')} style={{ height: 100, width: 100, left: 40 }}/>
<Text style={{ fontSize: 18, margin: 4 }}>{expo.name}</Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator({
  Home: { screen: MainStack, },
  About: {screen: AboutScreen,}
  	}, 
  {
   contentComponent: CustomDrawerComponent,
    hideStatusBar :"true"
  });
    
const MyApp = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
