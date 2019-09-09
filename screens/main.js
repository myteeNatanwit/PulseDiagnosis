import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  	  Platform, 
  	   TouchableHighlight,
  	    TouchableOpacity,
 	 	  Dimensions ,
  	 	Button,
  	 	StatusBar,
  ScrollView,
  FlatList
} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator , DrawerItems, DrawerActions, SafeAreaView } from 'react-navigation'; // 1.0.0-beta.27
import Icon from 'react-native-vector-icons/Octicons';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

const myData = [
{
	img : require('./img/fumai.png'),
	key :'Fu Mai',
	shortDesc : 'Fu Mai (Floating, Superficial)',
	longDesc : "Fu Mai (Floating, Superficial)    \n\nDescription:	Located in the exterior. With the finger raised, it has a surplus, when pressing down it is insufficient, weak, or disappears. When pressure is released, it regains full strength.     \n\nIndications:	External invasion, Yin Xu with Yang floating upwards, Qi or Yang Xu     \n\nEtiology:	Mainly an exterior condition, syndromes due to Xu, or Yang Qi losing its root in the lower part of the body and floating to the upper regions."
},
{
	img : require('./img/hongmai.png'),
	key :'Hong Mai',
	shortDesc : 'Hong Mai (Surging, Flooding)',
	longDesc : "Hong Mai (Surging, Flooding)     \n\nDescription:	Floating, large (i.e. wide) comes on exuberant, departs debilitated. 'Coming onto the shore with force and retreating without force'     \n\nIndications:	Extreme heat; if with thirst, high fever it can be Yangming heat or internal heat. If surging and forceless, this is Xu surging.     \n\nEtiology:	This pulse has been said to arrive strong at the chi position and depart at the cun position, thus its wave like character. The Yang is floating excess and upward, this is a manifestation of fire floating upward and water drying internally(i.e. loss of blood, diarrhea)"
},
{
img : require('./img/gemai.png'),
	key :'Ge Mai',
	shortDesc : 'Ge Mai (Leathery, Drumskin, Tympanic, Hard)',
	longDesc : "Ge Mai (Leathery, Drumskin, Tympanic, Hard)     \n\nDescription:	Bowstring and large (wide) with an empty center; feels like the head of a drum. Felt with light pressure. Floating, large, and hard and resistant to pressure.     \n\nIndications:	Hemorrhage, Spermatorrhea, Abortion, Excessive Menstrual Flow, Xu Cold     \n\nEtiology:	The Qi becomes detached and floats to the exterior, the healthy Qi is failing to store sperm and blood. "
},
{img : require('./img/koumai.png'), key :'Kou Mai', shortDesc : 'Kou Mai (Hollow or Scallion Stalk, Green Onion)',
longDesc : "Kou Mai (Hollow or Scallion Stalk, Green Onion) \n\nDescription:	Floating, soft, large body, but empty in the center. Forceless but large and weak. \n\nIndications:	Hemorrhage, Damage of Yin, Great Blood Loss (severe diarrhea/hemorrhage) \n\nEtiology:	There is failure to fill the vessels by insufficient Ying and Blood causing Yang Qi to detach and float to the surface. Sources disagree on the \n\nDescription of this pulse, some say that the beats around the middle level are palpable(i.e. light or heavy pressure) and the beats at the middle level are impalpable. Bob Flaws says that 'a pulse which is empty in the center is an extreme floating pulse which not only gets weaker when one presses down but disappears altogether. It only reappears again when pressure is released to the superficial level.'" },

{img : require('./img/rumai.png'), key :'Ru Mai', shortDesc : 'Ru Mai (Soft or Soggy)',
longDesc : "Ru Mai (Soft or Soggy) \n\nDescription:	Floating, fine, soft and flexible. Can be felt with light pressure but cannot be obtained by heavy pressure. 'Floating, thready, and soft' 'Like a silk thread in water' \n\nIndications:	Primarily means Dampness, can be Yin Xu, Blood Xu, Spleen Xu \n\nEtiology:	The dampness is obstructing the vessels or the Qi and Blood are unable to fill the vessels giving it its soft quality. This is distinguished from other floating pulses, which tend to be large(i.e. wide) " },

{img : require('./img/sanmai.png'), key :'San Mai', shortDesc : 'San Mai (Scattered)',
longDesc : "San Mai (Scattered) \n\nDescription:	Floating, large (ie.wide) and without root; with light pressure it is easily irregular, becoming scattered and chaotic; with heavy pressure it is impalpable. \n\nIndications:	Dispersion of Yuan Qi, Kidney Yuan Qi Xu, severe deficiency and exhaustion of internal organ Qi \n\nEtiology:	This pulse is without root, without definite edges and boundaries, not characterized as an irregular beat pulse, although it feels chaotic. It is a further progression from the Kou Mai (Hollow), being even weaker than the Kou Mai. 'Like wind blowing hair or scattered leaves' " },

{img : require('./img/xumai.png'), key :'Xu Mai', shortDesc : 'Xu Mai (Forceless, Empty, Deficient)',
longDesc : "Xu Mai (Forceless, Empty, Deficient) \n\nDescription:	Generalized term for various types of forceless pulses or is described as a floating, large, slow, empty. deficient, soft, forceless pulse image. \n\nIndications:	Qi and Blood Xu Can be damage by summerheat. " },

{img : require('./img/chenmai.png'), key :'Chen Mai', shortDesc : 'Chen Mai (Deep)',
longDesc : "Chen Mai (Deep) \n\nDescription:	Located near the bone. Cannot be detected with light or moderate pressure but can be felt with heavy pressure. (Not to say it is impalpable at lighter pressure) \n\nIndications:	Interior patterns. If deep and rapid=Interior heat. If deep and slow=interior cold. If deep and forceless=Qi and Yang Xu If deep and forceful=excess of internal disease. \n\nEtiology:	Pathogens in the interior are obstruction healthy flow of Qi and Blood. " },

{img : require('./img/fukmai.png'), key :'Fuk Mai', shortDesc : 'Fuk Mai (Hidden)',
longDesc : "Fu Mai (Hidden) \n\nDescription:	Difficult to feel, under the sinews, not obvious, requires heavy pressure to obtain. Almost to the bone. Deeper than the deep pulse. \n\nIndications:	Severe pain, extreme stagnation,(of food or of pathogens), syncope, last stage of an illness, coma, and lack of circulation. " },

{img : require('./img/laomai.png'), key :'Lao Mai', shortDesc : 'Lao Mai (Firm, Confined)',
longDesc : "Lao Mai (Firm, Confined) \n\nDescription:	Pressed superficially or moderately, it does not respond, but can be obtained by heavy pressure. Hard, firm, not changeable, replete, large, bowstring, and long. \n\nIndications:	Internal cold, perhaps hernia, abdominal masses. Can also indicate wind epilepsy, inflexibility, and cramping, hard accumulations hidden in the interior, running piglet and sudden violent counterflow. \n\nEtiology:	The pathogenic factors are steady, there is interior cold and decline of Yang Qi " },

{img : require('./img/roumai.png'), key :'Ruo Mai', shortDesc : 'Ruo Mai (Weak)',
longDesc : "Ruo Mai (Weak) \n\nDescription:	Deep, fine, soft like a thread. \n\nIndications:	Simultaneous Qi and Blood Xu \n\nEtiology:	Blood Xu results in failure to fill the vessels and Qi Xu results in its forcelessness. " },

{img : require('./img/chimai.png'), key :'Chi Mai', shortDesc : 'Chi Mai (Slow)',
longDesc : "Chi Mai (Slow) \n\nDescription:	Below 60 BPM or less than 4 beats per practitioners breath. \n\nIndications:	Cold syndromes. Forceful and slow=accumulation of cold; Forceless and slow=cold from Xu Slow and floating=external cold. Slow and deep=interior cold. Slow and choppy=blood disease. Slow and slippery=Qi disease. \n\nEtiology:	There is stagnation of Qi due to cold. There may be other factors as well, such as obstruction of blood due to accumulation of heat, this pulse must be forceful and excessive when palpated (i.e. Yangming) " },

{img : require('./img/huanmai.png'), key :'Huan Mai', shortDesc : 'Huan Mai (Slowed down, Moderate, or Relaxed)',
longDesc : "Huan Mai (Slowed down, Moderate, or Relaxed) \n\nDescription:	As a ping mai, or normal pulse it is level and harmonious, relaxed and forceful. As a bing mai or abnormal pulse it is relaxed, loose, slack, on the verge of slow. About 60 BPM. The beats come and go slowly, feels viscous, the rate is like normal but the slowness shows up at the end of a beat, before a slow pulse. \n\nIndications:	Syndromes of Damp, SP/ST Xu Not enough Qi and Blood to fill the vessels. \n\nEtiology:	May also be due to wind if floating and relaxed. If it is deep and relaxed. Damp syndrome. If large and relaxed=liver wind internally, if relaxed and weak it may signify heart Qi Xu " },

{img : require('./img/semai.png'), key :'Se Mai', shortDesc : 'Se Mai (Choppy, Hesitant)',
longDesc : "Se Mai (Choppy, Hesitant) \n\nDescription:	Slow, relaxed, stagnant, difficult, fine, may stop and loose a beat but then recovers. It is not smoothly flowing. It feels like a knife scraping bamboo. \n\nIndications:	Consumption of essence, Blood Xu, Stagnation of Qi, Blood Stagnation, Phlegm or food stagnation. It can also be due to heart palpitations. \n\nEtiology:	Blood and essence failing to nourish the meridians. Blood is not flowing smoothly. " },

{img : require('./img/jiemai.png'), key :'Jie Mai', shortDesc : 'Jie Mai (Knotted, Bound)',
longDesc : "Jie Mai (Knotted, Bound) \n\nDescription:	Slow, relaxed, stops at irregular intervals. \n\nIndications:	Stagnation of Qi due to excess Yin, Blood Stasis due to cold phlegm, Blood Stagnation. Sometimes abdominal masses, also indicates Heart palpitations. \n\nEtiology:	Yin and Yang out of balance due to excess Yin. (This represents an irregular beat or palpitation stemming from the ventricle of the Heart) " },

{img : require('./img/shimai.png'), key :'Shi Mai', shortDesc : 'Shi Mai (Excess, Full, Replete, Forceful)',
longDesc : "Shi Mai (Excess, Full, Replete, Forceful) \n\nDescription:	Bowstring, large, hard and replete pulse which has a surplus at all 3 levels of cunkou. \n\nIndications:	Excess condition where both pathogenic and anitpathogenic factors are strong. \n\nEtiology:	Blood vessels are full with both Qi and Blood " },

{img : require('./img/huamai.png'), key :'Hua Mai', shortDesc : 'Hua Mai (Slippery, Rolling)',
longDesc : "Hua Mai (Slippery, Rolling) \n\nDescription:	Comes smoothly flowing and uninhibited; feels smooth like pearls rolling in a dish. Beats come and go fluently and smoothly, feeling slick to the fingers. \n\nIndications:	Phlegm retention, indigestion, excess heat. May also indicate dampness. The Hua Mai is considered normal (ping mai) for women during pregnancy or menstruation. \n\nEtiology:	The smooth and slick pulsation is caused by the accumulation of pathogens in the interior with sufficiency of Qi and Blood. " },

{img : require('./img/jinmai.png'), key :'Jin Mai', shortDesc : 'Jin Mai (Tight, Tense)',
longDesc : "Jin Mai (Tight, Tense) \n\nDescription:	Tight, has strength, feels like a taut rope. Feels like a stretched and twisted rope. \n\nIndications:	Cold or Pain. Undigested food \n\nEtiology:	Caused by the contraction of tense vessels resulting from the conflict between cold and healthy Qi and the obstruction of Yang Qi " },

{img : require('./img/changmai.png'), key :'Chang Mai', shortDesc : 'Chang Mai (Long)',
longDesc : "Chang Mai (Long) \n\nDescription:	Long and can be felt beyond its location. Felt past the cun position. \n\nIndications:	Excess liver Yang, Yang and Heat Excess in the Interior, Strong Pathogenic factors \n\nEtiology:	A long and smooth pulse can be normal (ping mai) for some people, the long characteristic is usually present with wiry. " },

{img : require('./img/xuanmai.png'), key :'Xuan Mai', shortDesc : 'Xuan Mai (Wiry, Taut)',
longDesc : "Xuan Mai (Wiry, Taut) \n\nDescription:	Feels straight, long and tense, like the feeling of pressing a tight string of a musical instrument. Crisp and distinct edges, tends to reveal itself when one slightly lets up on the pressure. \n\nIndications:	Liver and Gall Bladder disease, various painful disorders, phlegm retention, malaria, abnormal circulation of Qi \n\nEtiology:	Tense vascular Qi due to the liver not gently performing its function, can also be due to the retention of a pathogen in the liver. If wiry, Thready and forceful-like feeling the edge of a knife is indicative of Stomach Qi exhaustion. " },

{img : require('./img/weimai.png'), key :'Wei Mai', shortDesc : 'Wei Mai (Minute, Faint, Indistinct)',
longDesc : " Wei Mai (Minute, Faint, Indistinct) \n\nDescription:	Insufficient, extremely fine, soft, barely palpable. It may be felt and then sometimes it is lost. 'Extremely Thready and soft' \n\nIndications:	Decline of Yang Qi. Yin, Yang, Qi, and Blood Deficiency. \n\nEtiology:	The Yang Qi cannot push the blood in the vessels or the Yin/blood cannot fill the vessels. " },

{img : require('./img/ximai.png'), key :'Xi Mai', shortDesc : 'Xi Mai (Thready, Thin)',
longDesc : "Xi Mai (Thready, Thin) \n\nDescription:	Soft, feels like a silken thread, weak, without strength but not scattered by pressure. \n\nIndications:	Qi and Blood Xu, various deficiency syndromes, disorders due to Damp. Does not indicate weakness. \n\nEtiology:	Impairment of Ying Blood fails to make the vessels plentiful. Qi is too deficient to move the blood. May also occur due to compression of vessels by dampness. " },

{img : require('./img/duanmai.png'), key :'Duan Mai', shortDesc : 'Duan Mai (Short)',
longDesc : "Duan Mai (Short) \n\nDescription:	Does not reach(i.e. fill longitudinally) its location or range. Can be felt most clearly at the Guan position, more indistinct at the Cun and the Chi. \n\nIndications:	Short and forceful indicates Qi Stagnation, Short and weak indicates Qi Xu \n\nEtiology:	Qi is failing to move the Blood. " },

{img : require('./img/daimai.png'), key :'Dai Mai', shortDesc : 'Dai Mai (Regularly Intermittent)',
longDesc : "Dai Mai (Regularly Intermittent) \n\nDescription:	Comparatively relaxed and weak, stops at regular intermittent intervals. These intervals may be strikingly long. \n\nIndications:	Decline of Zang Fu (organ) Qi, Wind Syndromes, Pain, Terror, Fear, Trauma. \n\nEtiology:	Flaws: Patients with this pulse have advanced heart disease according to western medicine and should be immediately referred to a western doctor. " },

{img : require('./img/shumai.png'), key :'Shuo Mai', shortDesc : 'Shuo Mai (Rapid)',
longDesc : "Shuo Mai (Rapid) \n\nDescription:	Above 90 BIM, or more than 5 beats per breath. \n\nIndications:	Heat Syndromes. Forceful and rapid = excess heat. Weak and rapid = Deficiency Heat. \n\nEtiology:	Hyperactivity of heat accelerating Qi and Blood. Rapid pulse may be weak when it is Yin Xu due to a chronic disease resulting from interior deficient heat. Rapid pulse, when seen in cases of floating of Yang Xu, must be large and weak with a sense of emptiness. " },

{img : require('./img/jimai.png'), key :'Ji Mai', shortDesc : 'Ji Mai (Racing, Swift, Hurried)',
longDesc : "Ji Mai (Racing, Swift, Hurried) \n\nDescription:	Very rapid, over 120 BIM, or 7-8 beats per breath. \n\nIndications:	Excess of Yang and exhaustion of Yin, impending exhaustion of primary Qi Can also be due to Heart Palpitations. \n\nEtiology:	Exhaustion of Yin in the lower body and excess of Yang in the upper parts. Often accompanies high temperatures. Swift and wiry=not enough true Yin, overabundance of Yang. Swift and forceful=Primary Yang will be exhausted. Note: This can be normal for infants. " },

{img : require('./img/cumai.png'), key :'Cu Mai', shortDesc : 'Cu Mai (Rapid-Irregular, Skipping, Abrupt)',
longDesc : "Cu Mai (Rapid-Irregular, Skipping, Abrupt) \n\nDescription:	Rapid and irregularly interrupted. \n\nIndications:	Excess Heat, Domination of Yang, Qi, Blood, Phlegm and Food Stagnation. This can be from an Atrial Fibrillation. \n\nEtiology:	This is clinically very severe, Yin and Yang are not in communication. " },

{img : require('./img/dongmai.png'), key :'Dong Mai', shortDesc : 'Dong Mai (Moving, Throbbing, Stirring)',
longDesc : "Dong Mai (Moving, Throbbing, Stirring) \n\nDescription:	Slippery, rapid, forceful, feels like a bean. Strong and throbbing abruptly. Without head or tail. This is most distinguished at the Guan position, and is a subcategory of the short pulse. \n\nIndications:	Pain, Fright, Shock \n\nEtiology:	Conflict between Yin and Yang, disturbance of ascending and descending, leading to faster circulation of Qi and Blood which makes it appear smooth, rapid, and forceful yet palpable over a narrow region. " },

{img : require('./img/damai.png'), key :'Da Mai', shortDesc : 'Da Mai (Large, Big)',
longDesc : "Da Mai (Large, Big) \n\nDescription:	Large, fills up the fingertip, forceful. Similar to the Hong Mai, but does not have the wave-like shape \n\nIndications:	Advance of a disease due to domination of pathogenic factors and also Deficiency Syndrome. \n\nEtiology:	It is possible to differentiate exuberance or decline of pathogenic factors and the health of the Qi according to whether Large pulse is forceful or weak. " },
]
export default class MainScreen extends Component {
		static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
     
const MenuIcon = () => <Icon style = {{left: 10, width: 60}}
    name='three-bars' 
    size={30} 
    color='#fff' 
    onPress={() => navigation.toggleDrawer()} />;

return {
     title:"Pulses",
      headerLeft: (
        <Button navigate={navigation.navigate}
          onPress={() => navigation.toggleDrawer()}
          title="Info"
        />
      ),
headerLeft: MenuIcon(),
      
    };
  };
  
constructor(props) {
    super(props)
this.state = { items:[], count: 0, id: 0}
  }

  render () {
  return (
<SafeAreaView>
  <ScrollView>
  <FlatList
data = {myData}
 renderItem={({item, index}) =>  
  <Card >
  <CardImage style={{paddingBottom:0}}
source= {item.img}
     />
	  <CardTitle title= {item.key} subtitle = {item.shortDesc}  />
    
     <CardAction 
      separator={true} 
      inColumn={false}>
      <CardButton
  onPress={() => { 
     this.props.navigation.navigate('Quiz', {
     	   shortDesc: item.shortDesc,
           title: item.key,
     });
  }}
        title="Quiz"
        color="#FEB557"
      />
      <CardButton
        onPress={() => {
         this.props.navigation.navigate('Details', {
              shortDesc: item.shortDesc,
              title: item.key,
              longDesc: item.longDesc,	  
              img: item.img,	  
            });
        }}
        title="Detail"
        color="#FEB557"
      />
    </CardAction>		 
    </Card>
  }
/>
  
</ScrollView>
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

   title: {
    fontSize: 38,
     backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  },

});
