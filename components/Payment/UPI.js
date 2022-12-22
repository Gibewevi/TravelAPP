import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Image from 'react-native-remote-svg';

export default function UPI(){

    const styles = StyleSheet.create({
        container:{
            width:'95%',
            height:115,
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
                    <Image source={{uri: 'http://192.168.1.11:8081/public/images/payment/paypal.svg'}} style={{width:62, height:28}}/>
                    <Image source={{uri: 'http://192.168.1.11:8081/public/images/payment/gplay.svg'}} style={{width:48, height:21}}/>
                    <Image source={{uri: 'http://192.168.1.11:8081/public/images/payment/purple.svg'}} style={{width:26, height:26}}/>
                    <Image source={{uri: 'http://192.168.1.11:8081/public/images/payment/paytm.svg'}} style={{width:52, height:18}}/>
                </View>
                <View style={{display:'flex', flexDirection:'row', marginTop:5}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color:'red'}}>+</Text>
                    </TouchableOpacity>
                    <Text style={{marginLeft:10}}>Add new UPI</Text>
                </View>
            </View>
        )
}