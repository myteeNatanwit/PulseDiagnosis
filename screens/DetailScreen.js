import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView,TouchableOpacity } from 'react-native';
//import Quiz from './quiz';

export default class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.title : 'Pulse Details',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
      	headerRight: (
        <Button onPress={()=> {
        	//var shortDesc = params ? params.shortDesc : "";
        	 navigation.navigate("Quiz", {
        	 	 shortDesc : params.shortDesc,
        	 	 title: params.title	 
        	 });
	        	}} title="Quiz"  />
      ),
    };
  };

  render() {
  	const { params } = this.props.navigation.state;
    const longDesc = params ? params.longDesc : "";
    const img = params ? params.img : null;
 	const shortDesc = this.props.navigation.getParam('shortDesc', '');
 	  
    return (
   <SafeAreaView>
   <ScrollView>
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image source={img} style={styles.image} resizeMode="stretch"/>
    <Text style={{ fontSize: 28 }}>{shortDesc}</Text>
    <Text style={{ fontSize: 18, margin: 10 }}>{longDesc}</Text>
      </View>  	
    
       <TouchableOpacity  style = {styles.button}
          onPress={() => {this.props.navigation.navigate("Quiz", {
           shortDesc: shortDesc,
           title: params.title,
          	  });}} >
          <Image source= {require("../assets/results.png")} style= {{ flex:1, width: 50, height:50, alignSelf: 'center', borderRadius: 25,}}/>
        </TouchableOpacity>
    	  
   </ScrollView>
   	   </SafeAreaView>
    );
  }
}
const win = Dimensions.get('window');
const ratio = win.width/ 2; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  	image: {
        flex: 1,
        alignSelf: 'stretch',
        width: win.width,
        height: ratio,	
        
    },
 button: {
 	right: 0,
 	top: ratio - 60,	 
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden"
  },
});
