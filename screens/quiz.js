import React from 'react';
//import react in our code. 
import { Switch, Text, View, StyleSheet, Button, Image, SafeAreaView, ScrollView, FlatList} from 'react-native';

const str = "Floating, Superficial, Surging, Flooding, Leathery, Drumskin, Tympanic, Hard, Hollow or Scallion Stalk, Green Onion, Soft or Soggy,Scattered, Forceless, Empty, Deficient, Deep, Hidden, Firm, Deep, Confined, Weak, Slow, Slowed down, Moderate, Relaxed, Choppy, Hesitant, Knotted, Bound, Excess, Full, Replete, Forceful, Slippery, Rolling, Tight, Tense, Long, Wiry, Taut, Minute, Faint, Indistinct, Thready, Thin, Short, Regularly Intermittent, Rapid, Racing, Swift, Hurried, Rapid-Irregular, Skipping, Abrupt, Moving, Throbbing, Stirring, Large, Big";
        
function  shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var myArr = [];
export default class Quiz extends React.Component {
static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.title : 'Quiz',
      
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
      	headerRight: (
        <Button onPress={()=> {
        	var  str = "";
        for (var i = 0; i < myArr.length; i++) {
        if (myArr[i].switch == true) {
        	str += myArr[i].key + ', ';
        }}
            if (str.length > 0) {
            str = str.slice(0, -2);
        	navigation.navigate("Result", {results: str, shortDesc : params.shortDesc});
        	}
	        	}} title="Result"  />
      ),
    };
  };
  constructor() {
    super();
    this.state = {
       listKeys: [
      {key: '', switch : false},
    ]
    }
   }
   componentDidMount(){
   	   this.fillDtata();
   }
   
setSwitchValue = (val, index) => {
      myArr = JSON.parse(JSON.stringify(this.state.listKeys));
      myArr[index].switch = val;
      this.setState({ listKeys: myArr });
  }
  
fillDtata = () => {
	var myArr = [];
	myArr = str.split(",");
	let unique = [...new Set(myArr)];
	myArr = shuffle(unique);
	var tempArr = [];
	for (var i = 0; i < myArr.length; i++) {
	 tempArr.push({key: myArr[i].trim(), switch : false});
    }
this.setState({ listKeys: tempArr });
}

listItem = ({item, index}) => (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.item}>{item.key}</Text>
      <Switch
        onValueChange={(value) => this.setSwitchValue(value, index)}
        value={item.switch}
      />
    </View>
  );
  
 render() {
  return (
  <ScrollView>
  <View style={styles.container}>
  <FlatList
        data={this.state.listKeys}
        renderItem={this.listItem}
      />
   </View>
   </ScrollView>
  
)   
}
}
const styles = StyleSheet.create({
  container: {
  	marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {  
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});