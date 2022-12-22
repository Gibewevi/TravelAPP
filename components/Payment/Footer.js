import { View, Text, StyleSheet } from "react-native"
import { managePanProps } from "react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler";
import Image from 'react-native-remote-svg';
import MyButton from "../Button/MyButton";

export default function Footer(props){

    const styles = StyleSheet.create({
        container:{
            position:'absolute',
            bottom:0,
            width:'100%',
            height:81,
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            padding:15,
            borderLeftWidth:0,
            borderLeftRight:0,
            backgroundColor:'white',
            shadowColor: 'black',
            elevation:20,
        }
    });

    return(
            <View style={styles.container}>
                <Text style={{fontSize:16, fontWeight:'600', color:'black'}}>Amount Payable</Text>
                <MyButton width={95} height={40} borderRadius={20} title={'$'+props.price}/>
            </View>
        )
}