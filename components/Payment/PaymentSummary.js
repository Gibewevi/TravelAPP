import { View, Text, StyleSheet } from "react-native"
import Image from 'react-native-remote-svg';
import Travel from '../homePage/Travel.js'
import { APIcontext } from "../context/APIcontext.js";
import { useContext } from "react";

export default function Payment(){

    const {travelDataAPI, travelID} = useContext(APIcontext);
    const discount = 100;
    const price = parseInt(travelDataAPI[travelID].price);
    const result = price-discount;
    const styles = StyleSheet.create({
        container:{
            width:'95%',
            height:180,
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-around',
            padding:20,
            backgroundColor:'white',
            borderRadius:10,
            shadowColor: 'black',
            elevation:10,
            marginTop: 20
        },
    });

    return(
            <View style={styles.container}>
                <Text style={{paddingBottom: 10, fontWeight:'600', color:'black', fontSize:16}}>
                    Payement Summary
                </Text>
                <View style={{paddingBottom: 10, width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignContent:'center'}}>
                    <Text style={{fontSize:14}}>Price</Text>
                    <Text style={{fontSize:14}}>{travelDataAPI[travelID].price}</Text>
                </View>
                <View style={{paddingBottom: 10, borderWidth: 0, borderBottomWidth: 0.8, borderStyle: "dashed", borderColor:'#A3A3A3', width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignContent:'center'}}>
                    <Text style={{fontSize:14}}>Discount</Text>
                    <Text style={{fontSize:14, color:'#4B9501'}}>{(discount+'$')}</Text>
                </View>
                <View style={{marginTop:8, paddingBottom: 10, marginBottom:10, borderWidth: 0, borderBottomWidth: 0.8, borderColor:'#A3A3A3', width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignContent:'center'}}>
                    <Text style={{fontSize:14}}>Total Amount</Text>
                    <Text style={{fontSize:14}}>{result+'$'}</Text>
                </View>
                <Text style={{color:'#4B9501', fontSize:14}}>You Save {discount+'$'} on this Trip</Text>
            </View>
        )
}