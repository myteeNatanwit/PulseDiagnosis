import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		title:"Settings",
    drawerLabel: 'Settings',
    drawerIcon: ({ tintColor }) => (
      <Image
source={require('../assets/setting.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>  	
      		 
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
});
