import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {expo} from '../app.json';
export default class AboutScreen extends React.Component {
	static navigationOptions = {
		title:"About",
    drawerLabel: 'About',
    drawerIcon: ({ tintColor }) => (
      <Image
	source={require('./img/about.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image source={require('../assets/icon.png')} style={{width: 80, height: 80, marginBottom:100}} />
    <Text style={{ fontSize: 28 }}>{expo.name}</Text>
    <Text style={{ fontSize: 20 }}>Ver. {expo.version}</Text>
    <Text style={{ fontSize: 15 }}>RN SDK {expo.sdkVersion}</Text>
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
