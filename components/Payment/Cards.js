import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Image from 'react-native-remote-svg';

export default function Cards(){

    const styles = StyleSheet.create({
        container:{
            width:'95%',
            height:90,
            padding:15,
            marginTop:15,
            backgroundColor:'white',
            shadowColor: 'black',
            elevation:10,
            borderRadius:15
        },
        containerIcon:{
            width:'100%',
            flexWrap:'wrap',
            flexDirection: 'row', 
            justifyContent: 'space-around', 
            alignItems: 'flex-start', 
            marginTop:5
        },
        button:{
            shadowColor: 'black',
            elevation:10,
            backgroundColor:'white', 
            width:21, 
            height:21, 
            borderRadius:20,
            justifyContent:'center',
            alignItems:'center'      
        }
    });

    return(
            <View style={styles.container}>
                <Text style={{fontSize:12}}>UPI</Text>
                <View style={styles.containerIcon}>
                    <Image source={{uri: 'http://192.168.1.11:8081/public/images/payment/mastercard.svg'}} style={{width:56, height:40}}/>
                    <Image source={{uri: 'http://192.168.1.11:8081/public/images/payment/visa.svg'}} style={{width:56, height:20}}/>
                    <Image source={{uri: 'http://192.168.1.11:8081/public/images/payment/payoneer.svg'}} style={{width:76, height:27}}/>
                </View>
            </View>
        )
}