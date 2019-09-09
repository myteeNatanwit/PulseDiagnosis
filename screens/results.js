import React from 'react';
import { Modal, Dimensions, StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView,TouchableOpacity,TouchableHighlight } from 'react-native';


export default class ResultScreen extends React.Component {
state = {
    modalVisible: true,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.title : 'Pulse Details',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
  	const { params } = this.props.navigation.state;
    const results = params ? params.results : "";
    const shortDesc = params ? params.shortDesc : "";
    const img = params ? params.img : null;
 	
    return (
 
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Modal
          animationType="fade"
          transparent={false}
		  visible={this.state.modalVisible}
          onRequestClose={() => {
           // alert('Modal has been closed.');
          }}>
          <View style={styles.container}>
    <Text style={{ fontSize: 22 }}>You selected</Text>
    <Text style={{ fontSize: 20 }}>{results}</Text>
    <Text style={{ fontSize: 22, marginTop: 20 }}>For</Text>
    <Text style={{ fontSize: 22}}>{shortDesc}</Text>
    
    <TouchableHighlight  style ={styles.button}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.props.navigation.goBack()
                }}>
                <Text>Done</Text>
              </TouchableHighlight>
          
          </View>
        </Modal>
    
      </View>  	

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
 	marginTop: 60,
 	width: 120,
    height: 60,
    backgroundColor: '#f39c12',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden"
  },
});
