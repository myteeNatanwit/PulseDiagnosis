import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator , DrawerItems, DrawerActions, SafeAreaView } from 'react-navigation'; // 1.0.0-beta.27
import Icon from 'react-native-vector-icons/Octicons';

export default class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
     
const MenuIcon = () => <Icon style = {{left: 10, width: 60}}
    name='three-bars' 
    size={30} 
    color='#fff' 
    onPress={() => navigation.toggleDrawer()}
/>;

	 return {
     title:"Home screen",
     
      headerLeft: (
        <Button navigate={navigation.navigate}
          onPress={() => navigation.toggleDrawer()}
          title="Info"
        />
      ),
headerLeft: MenuIcon(),
      headerRight: (
        <Button onPress={()=> {}} title="+1" color="#fff" />
      ),
    };
  };

  render() {
    return (
    <SafeAreaView style={{ flex: 1 }}>
     
      <View style={styles.container}>
        <Text>HomeScreen :3!</Text>
<TouchableOpacity style={styles.button}
          onPress={() => this.props.navigation.openDrawer()} >
          <Text style={{fontSize: 20, color: 'white'}}>Open Drawer</Text>
        </TouchableOpacity>
      </View> 
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a main screen!</Text>
  <Button
          title="Go to home2"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Settings', {
              itemId: 99,
              otherParam: 'Details',
            });
          }}
        />
      </View>  	
      		  </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
 
    position: 'absolute',
    top: 50,
    left: 0,
    width: 150,
    height: 50,
    backgroundColor: '#f39c12',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    	
  }
});
