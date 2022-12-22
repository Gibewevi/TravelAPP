import { View, Text, StyleSheet } from "react-native"
import Image from 'react-native-remote-svg';
import Travel from '../homePage/Travel.js'
import PaymentSummary from './PaymentSummary';
import UPI from './UPI';
import Cards from "./Cards.js";
import Footer from "./Footer.js";
import { APIcontext } from "../context/APIcontext.js";
import { useContext } from "react";

export default function Payment(){

    const {travelDataAPI, travelID} = useContext(APIcontext);

    const styles = StyleSheet.create({
        container:{
            width:'100%',
            height:'100%',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            backgroundColor:'white'
        },
        header:{
            width:'100%',
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
        }
    });

    return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={ {uri: 'http://10.0.2.2:8081//public/images/payment/return.svg'} }  style={{width:19, height:14}}/>
                    <Text style={{fontSize:16, fontWeight:'500', marginLeft:'20%', color:'black'}}>Confirm Booking</Text>
                </View>

                <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                    <Travel src={travelDataAPI[travelID].urlImage} title={travelDataAPI[travelID].title} locate={travelDataAPI[travelID].locate} rating={travelDataAPI[travelID].rating} id={travelDataAPI[travelID].id} titleFontSize={14} detailsFontSize={8} locateIconWidth={12} locateIconHeight={14} iconRatingWidth={17} iconRatingHeight={16} width={310}/>
                </View>
                
                <PaymentSummary />
                <UPI />
                <Cards />
                <Footer price={travelDataAPI[travelID].price}/>
            </View>
        )
}