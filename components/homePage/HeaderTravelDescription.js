import { View, StyleSheet, Text } from "react-native";
import Image from 'react-native-remote-svg';

export default function HeaderTravelDescription(props){
    const styles = StyleSheet.create({
        containerDetailsTravel:{
            display:'flex',
            justifyContent:'space-between',
            flexDirection:'row',
            width:'100%'
        },
        title:{
            fontWeight:props.titleFontWeight,
            color:'black',
            fontSize: props.titleFontSize    
        },
        details:{
            fontWeight:'400',
            color:'black',
            fontSize: props.detailsFontSize,
            marginLeft:5    
        }, 
        iconLocate:{
            width: props.locateIconWidth,
            height: props.locateIconHeight
        },
        iconRating:{
            width: props.iconRatingWidth,
            height: props.iconRatingHeight
        }
    });
    
    return(
            <View style={styles.containerDetailsTravel}>
                     {/* Locate */}
                     <View style={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                        <Text style={styles.title}>{props.title}</Text>
                        <View style={{display:'flex', flexDirection:'row', alignItems:'center', marginTop:5}}>
                            <Image source={{uri: 'http://192.168.1.11:8081/public/images/homepage/locate.svg'}} style={styles.iconLocate}/>
                            <Text style={styles.details}>{props.locate}</Text>
                        </View>
                    </View>        

                    {/* Rating */}
                    <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                      <Image source={{uri: 'http://192.168.1.11:8081/public/images/homepage/rating.svg'}} style={styles.iconRating}/>
                      <Text style={{marginLeft:5}}>{props.rating}</Text>
                    </View>       
            </View>
        )
}